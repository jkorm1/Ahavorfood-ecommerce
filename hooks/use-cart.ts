'use client'

import { create } from 'zustand'

export interface CartItem {
  id: string
  category: 'classic' | 'pink' | 'elite'
  categoryName: string
  price: number
  flavor: string
  quantity: number
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  
  addItem: (item) => set((state) => {
    const existingItem = state.items.find(
      (i) => i.category === item.category && i.flavor === item.flavor
    )
    
    if (existingItem) {
      return {
        items: state.items.map((i) =>
          i.id === existingItem.id
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        ),
      }
    }
    
    return { items: [...state.items, item] }
  }),
  
  removeItem: (id) => set((state) => ({
    items: state.items.filter((item) => item.id !== id),
  })),
  
  updateQuantity: (id, quantity) => set((state) => ({
    items: state.items.map((item) =>
      item.id === id ? { ...item, quantity } : item
    ),
  })),
  
  clearCart: () => set({ items: [] }),
  
  getTotal: () => {
    const state = get()
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0)
  },
}))
