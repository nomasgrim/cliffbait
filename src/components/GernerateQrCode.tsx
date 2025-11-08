"use client";

import { useEffect, useRef, useState, ChangeEvent } from "react";
import QRCodeStyling, { FileExtension } from "qr-code-styling";

const GenerateQrCode = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [options, setOptions] = useState<any>({
    width: 350,
    height: 350,
    type: 'svg',
    data: 'http://www.cliffbait.com/custom-qr/?phrase=welcome to cliff bait',
    image: 'https://www.cliffbait.com/home.png',
    margin: 10,
    qrOptions: {
      typeNumber: 0,
      mode: 'Byte',
      errorCorrectionLevel: 'Q'
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 20,
      crossOrigin: 'anonymous',
      saveAsBlob: true,
    },
    dotsOptions: {
      color: '#000',
    },
    backgroundOptions: {
      color: '#fff',
    },
  });
  const [fileExt, setFileExt] = useState<FileExtension>("svg");
  const [qrCode, setQrCode] = useState<QRCodeStyling>();
  const ref = useRef<HTMLDivElement>(null);
  const [phrase, setPhrase] = useState<string>("");

  useEffect(() => {
    setQrCode(new QRCodeStyling(options));
  }, [options])

  useEffect(() => {
    if (ref.current) {
      qrCode?.append(ref.current);
    }
  }, [qrCode, ref]);

  useEffect(() => {
    if (!qrCode) return;
    qrCode?.update(options);
  }, [qrCode, options]);

  const onDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhrase(event.target.value);
    setOptions((options:any) => ({
      ...options,
      data: `https://www.cliffbait.com/custom-qr/?phrase=${phrase}`
    }));
  };

  const onExtensionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFileExt(event.target.value as FileExtension);
  };

  const onDownloadClick = () => {
    if (!qrCode) return;
    qrCode.download({
      extension: fileExt
    });
  };

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      return
    }
    const objectUrl = URL.createObjectURL(selectedFile)

    setOptions((options:any) => ({
      ...options,
      image: objectUrl
    }));
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = (e:any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  }

  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="flex flex-col gap-6 justify-between qr-form mb-6">
        <h2 className="mt-12 text-xl font-semibold">Create a qr code with a secret message!</h2>
        <div className="flex flex-col mt-[20px]">
          <input 
            placeholder="Enter your message!"
            value={phrase}
            onChange={onDataChange} 
            className="ring-2 ring-gray-300 rounded-md p-4 w-[300px] mb-6"
          />
          <input 
            type='file' 
            onChange={onSelectFile} 
            className="ring-2 ring-gray-300 rounded-md p-4 w-[300px] mb-6"
          />
          <p>
            Select Extension to download as
          </p>
          <select 
            onChange={onExtensionChange} 
            value={fileExt}
            className="p-4 rounded-2xl text-xs font-medium bg-gray-200 w-[300px] mb-6"
          >
            <option value="svg">SVG</option>
            <option value="png">PNG</option>
            <option value="jpeg">JPEG</option>
            <option value="webp">WEBP</option>
          </select>
          <button 
            className="w-36 text-sm rounded-3xl 
              ring-1 ring-primary text-primary 
              py-2 pyx-4 
              hover:bg-primary hover:text-white 
              disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-color-white disabled:ring-none
              disabled:ring-0"
            onClick={onDownloadClick}
          >
            Download
          </button>
        </div>
      </div>
      <div className="qr-image">
        <div ref={ref}/>
      </div>
    </div>
  );
};

export default GenerateQrCode
