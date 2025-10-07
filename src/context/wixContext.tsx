"use client"

import { createContext } from "react";
import Cookies from "js-cookie";

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { currentCart } from "@wix/ecom";
import { ReactNode } from "react";
import { redirects } from "@wix/redirects";
import { contacts } from "@wix/crm";

const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

const wixClient = createClient({
  modules: {
    products,
    collections,
    currentCart,
    redirects,
    contacts
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    tokens: {
      refreshToken, accessToken: {value:"", expiresAt:0 }
    },
  }),
});

export type TWixClient = typeof wixClient;

export const WixClientContext = createContext<TWixClient>(wixClient);

export const WixClintContextProvider = ({children}:{children:ReactNode}) => {
  return <WixClientContext.Provider value={wixClient}>{children}</WixClientContext.Provider>
};