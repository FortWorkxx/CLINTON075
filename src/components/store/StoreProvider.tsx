"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products, type Product } from "@/data/products";

export type CartLine = {
  key: string;
  productId: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  qty: number;
};

export type Order = {
  id: string;
  date: string;
  items: CartLine[];
  subtotal: number;
  delivery: number;
  total: number;
  status: "Processing" | "Packed" | "In transit" | "Delivered";
  customer: { name: string; email: string; phone: string; address: string; state: string; lga: string };
  payment: string;
};

export type Enquiry = {
  id: string;
  date: string;
  type: "Marine" | "Real Estate" | "AI Video" | "General" | "Quotation";
  reference: string;
  summary: string;
  status: "Received" | "In review" | "Quoted" | "Scheduled" | "Closed";
};

type StoreState = {
  cart: CartLine[];
  wishlist: string[];
  orders: Order[];
  enquiries: Enquiry[];
  savedProperties: string[];
  discount: string | null;
};

const initialState: StoreState = {
  cart: [],
  wishlist: [],
  orders: [],
  enquiries: [
    {
      id: "STARTER-1",
      date: new Date().toISOString(),
      type: "Quotation",
      reference: "CGI-DEMO-1042",
      summary: "Demo entry — your live enquiries will appear here.",
      status: "Quoted",
    },
  ],
  savedProperties: ["re2"],
  discount: null,
};

const DISCOUNTS: Record<string, number> = { CLINTON10: 0.1, WELCOME5: 0.05, OWAMBE15: 0.15 };

type StoreContextValue = StoreState & {
  cartCount: number;
  cartSubtotal: number;
  discountRate: number;
  addToCart: (product: Product, opts: { size: string; color: string; qty?: number }) => void;
  removeFromCart: (key: string) => void;
  updateQty: (key: string, qty: number) => void;
  clearCart: () => void;
  toggleWishlist: (id: string) => void;
  isWishlisted: (id: string) => boolean;
  toggleSavedProperty: (id: string) => void;
  isPropertySaved: (id: string) => boolean;
  applyDiscount: (code: string) => { ok: boolean; message: string };
  placeOrder: (customer: Order["customer"], payment: string, delivery: number) => Order;
  addEnquiry: (e: Omit<Enquiry, "id" | "date" | "status">) => Enquiry;
  hydrated: boolean;
};

const StoreContext = createContext<StoreContextValue | null>(null);

const STORAGE_KEY = "clintonglobal.store.v1";

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<StoreState>(initialState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<StoreState>;
        setState({ ...initialState, ...parsed });
      }
    } catch {
      /* ignore corrupt storage */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* storage may be full or blocked */
    }
  }, [state, hydrated]);

  const addToCart = useCallback(
    (product: Product, { size, color, qty = 1 }: { size: string; color: string; qty?: number }) => {
      const key = `${product.id}-${size}-${color}`;
      setState((s) => {
        const existing = s.cart.find((l) => l.key === key);
        if (existing) {
          return {
            ...s,
            cart: s.cart.map((l) =>
              l.key === key ? { ...l, qty: Math.min(l.qty + qty, 10) } : l
            ),
          };
        }
        return {
          ...s,
          cart: [
            ...s.cart,
            {
              key,
              productId: product.id,
              slug: product.slug,
              name: product.name,
              price: product.price,
              image: product.image,
              size,
              color,
              qty,
            },
          ],
        };
      });
    },
    []
  );

  const removeFromCart = useCallback((key: string) => {
    setState((s) => ({ ...s, cart: s.cart.filter((l) => l.key !== key) }));
  }, []);

  const updateQty = useCallback((key: string, qty: number) => {
    setState((s) => ({
      ...s,
      cart: s.cart
        .map((l) => (l.key === key ? { ...l, qty: Math.max(1, Math.min(qty, 10)) } : l))
        .filter((l) => l.qty > 0),
    }));
  }, []);

  const clearCart = useCallback(() => setState((s) => ({ ...s, cart: [], discount: null })), []);

  const toggleWishlist = useCallback((id: string) => {
    setState((s) => ({
      ...s,
      wishlist: s.wishlist.includes(id) ? s.wishlist.filter((w) => w !== id) : [...s.wishlist, id],
    }));
  }, []);

  const toggleSavedProperty = useCallback((id: string) => {
    setState((s) => ({
      ...s,
      savedProperties: s.savedProperties.includes(id)
        ? s.savedProperties.filter((p) => p !== id)
        : [...s.savedProperties, id],
    }));
  }, []);

  const applyDiscount = useCallback((code: string) => {
    const normalized = code.trim().toUpperCase();
    if (!normalized) return { ok: false, message: "Enter a discount code." };
    if (!(normalized in DISCOUNTS)) return { ok: false, message: "That code is not valid." };
    setState((s) => ({ ...s, discount: normalized }));
    return { ok: true, message: `${Math.round(DISCOUNTS[normalized] * 100)}% off applied.` };
  }, []);

  const placeOrder = useCallback(
    (customer: Order["customer"], payment: string, delivery: number) => {
      const id = `CGI-${Math.floor(100000 + Math.random() * 900000)}`;
      const order: Order = {
        id,
        date: new Date().toISOString(),
        items: state.cart,
        subtotal: state.cart.reduce((t, l) => t + l.price * l.qty, 0),
        delivery,
        total:
          state.cart.reduce((t, l) => t + l.price * l.qty, 0) *
            (1 - (state.discount ? DISCOUNTS[state.discount] : 0)) +
          delivery,
        status: "Processing",
        customer,
        payment,
      };
      setState((s) => ({ ...s, orders: [order, ...s.orders], cart: [], discount: null }));
      return order;
    },
    [state.cart, state.discount]
  );

  const addEnquiry = useCallback((e: Omit<Enquiry, "id" | "date" | "status">) => {
    const enquiry: Enquiry = {
      ...e,
      id: `${Date.now()}`,
      date: new Date().toISOString(),
      status: "Received",
    };
    setState((s) => ({ ...s, enquiries: [enquiry, ...s.enquiries] }));
    return enquiry;
  }, []);

  const value = useMemo<StoreContextValue>(() => {
    const cartCount = state.cart.reduce((t, l) => t + l.qty, 0);
    const cartSubtotal = state.cart.reduce((t, l) => t + l.price * l.qty, 0);
    return {
      ...state,
      hydrated,
      cartCount,
      cartSubtotal,
      discountRate: state.discount ? DISCOUNTS[state.discount] : 0,
      addToCart,
      removeFromCart,
      updateQty,
      clearCart,
      toggleWishlist,
      isWishlisted: (id: string) => state.wishlist.includes(id),
      toggleSavedProperty,
      isPropertySaved: (id: string) => state.savedProperties.includes(id),
      applyDiscount,
      placeOrder,
      addEnquiry,
    };
  }, [
    state,
    hydrated,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    toggleWishlist,
    toggleSavedProperty,
    applyDiscount,
    placeOrder,
    addEnquiry,
  ]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}

export const resolveProduct = (id: string) => products.find((p) => p.id === id);
