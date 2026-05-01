import { Suspense } from "react";
import SuccessPurchase from "@/components/SuccessPurchase";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Cliff Bait | Order Confirmed",
    description:
      "Your Cliff Bait order has been successfully placed. You’ll receive tracking updates soon.",
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      title: "Order Confirmed | Cliff Bait",
      description:
        "Your Cliff Bait order has been successfully placed.",
      type: "website",
      siteName: "Cliff Bait",
    },
  };
}

const SuccessPage = async({searchParams}:any) => {
  const pageParams = await searchParams;
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <SuccessPurchase orderId={pageParams.orderId} />
    </Suspense>
  );
};

export default SuccessPage;