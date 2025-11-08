"use-client";

const CustomQrCode = ({
  parameters
}:any) => {
  const phrase = parameters?.phrase;
  return (
    <div className="">
      <h1 className="text-6xl">{phrase}</h1>
    </div>
  )
}

export default CustomQrCode;