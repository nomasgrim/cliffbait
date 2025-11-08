import { Suspense } from "react";
import SuccessPurchase from "@/components/SuccessPurchase";

const SuccessPage = async({searchParams}:any) => {
  const pageParams = await searchParams;
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <SuccessPurchase orderId={pageParams.orderId} />
    </Suspense>
  );
};

export default SuccessPage;