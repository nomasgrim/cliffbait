import { createClient, OAuthStrategy } from "@wix/sdk";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const ua = request.headers.get("user-agent") || "";

  // 👇 IMPORTANT: let crawlers through without Wix auth work
  const isBot =
    ua.includes("facebookexternalhit") ||
    ua.includes("Facebot") ||
    ua.includes("Twitterbot") ||
    ua.includes("Slackbot") ||
    ua.includes("Discordbot") ||
    ua.includes("LinkedInBot") ||
    ua.includes("bot");

  if (isBot) {
    return NextResponse.next();
  }

  const cookies = request.cookies;
  const res = NextResponse.next();

  if (cookies.get("refreshTokens")) {
    return res;
  }

  const wixClient = createClient({
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    }),
  });

  const tokens = await wixClient.auth.generateVisitorTokens();

  res.cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
    maxAge: 60 * 60 * 24 * 30,
  });

  return res;
};