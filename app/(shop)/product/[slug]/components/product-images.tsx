"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  name: string;
  imageUrls: string[];
}

const ProductImages = ({ imageUrls, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };
  return (
    <div className="flex flex-col lg:min-h-full lg:w-3/5">
      <div className="bg-accent flex h-[380px] w-full items-center justify-center lg:h-full lg:rounded-lg">
        <Image
          src={currentImage}
          alt={name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
        />
      </div>

      <div className="mt-8 grid grid-cols-4 gap-4 px-5 lg:px-0">
        {imageUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            className={`bg-accent flex h-[100px] cursor-pointer items-center justify-center rounded-lg ${
              imageUrl === currentImage &&
              "border-primary border-2 border-solid"
            }`}
            onClick={() => handleImageClick(imageUrl)}
          >
            <Image
              src={imageUrl}
              alt={name}
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
