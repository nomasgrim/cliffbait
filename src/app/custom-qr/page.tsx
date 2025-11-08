import CustomQrCode from "@/components/CustomQrCode";
import { Suspense } from "react";

const CustomQrPage = async({
  searchParams
}:any) => {
  const pageParams = await searchParams;

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      <Suspense fallback={"loading"}>
        <CustomQrCode pageParams={pageParams} />
      </Suspense>
    </div>
  )
};

export default CustomQrPage;