import { create } from "zustand";
import { currentCart } from "@wix/ecom";
import { TWixClient } from "@/context/wixContext";

type CartState = {
  cart: any;
  isLoading: boolean;
  counter: number;
  getCart: (wixClient: TWixClient) => void;
  addItem: (
    wixClient: TWixClient,
    productId: string,
    variantId: string,
    quantity: number
  ) => void;
  removeItem: (wixClient: TWixClient, itemId: string) => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: {
    lineItems:[],
    subtotal: 0
  },
  isLoading: true,
  counter: 0,
  getCart: async (wixClient) => {
    try {
      const cart = await wixClient.currentCart.getCurrentCart();
      console.log('cart', cart);
      set({
        cart: cart || [],
        isLoading: false,
        counter: (cart?.lineItems && cart?.lineItems.length) || 0,
      });
    } catch (err) {
      console.error("useCartStore:getCart():", err);
      set((prev) => ({ ...prev, isLoading: false }));
    }
  },
  addItem: async (wixClient, productId, variantId, quantity) => {
    set((state) => ({ ...state, isLoading: true }));
    const response = await wixClient.currentCart.addToCurrentCart({
      lineItems: [
        {
          catalogReference: {
            appId: process.env.NEXT_PUBLIC_WIX_APP_ID!,
            catalogItemId: productId,
            ...(variantId && { options: { variantId } }),
          },
          quantity: quantity,
        },
      ],
    });

    set({
      cart: response.cart,
      counter: response.cart?.lineItems && (response.cart?.lineItems.length),
      isLoading: false,
    });
  },
  removeItem: async (wixClient, itemId) => {
    set((state) => ({ ...state, isLoading: true }));
    const response = await wixClient.currentCart.removeLineItemsFromCurrentCart(
      [itemId]
    );

    set({
      cart: response.cart,
      counter: response.cart?.lineItems && (response.cart?.lineItems.length),
      isLoading: false,
    });
  },
}));