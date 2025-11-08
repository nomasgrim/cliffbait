"use-client";

const CustomQrCode = ({
  pageParams
}:any) => {
  const phrase = pageParams?.phrase;
  return (
    <div className="">
      <h1 className="text-6xl">{phrase}</h1>
    </div>
  )
}

export default CustomQrCode;