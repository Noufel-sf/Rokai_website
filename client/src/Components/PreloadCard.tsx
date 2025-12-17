// Components/PolaroidCard.tsx
import React from "react";

interface PolaroidCardProps {
  image: string;
  caption: string;
  alt: string;
  rotation?: number;
}

const PolaroidCard: React.FC<PolaroidCardProps> = ({
  image,
  caption,
  alt,
  rotation = 0,
}) => {
  return (
    <div className="">
      <div
        className="card bg-white rounded-lg shadow-2xl p-4 pb-16"
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
      >
        {/* Image */}
        <div className="relative w-full aspect-[4/3] bg-slate-200 overflow-hidden rounded">
          <img
            src={image}
            alt={alt}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center">
          <p className="font-handwriting text-xl text-slate-800 italic">
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
};
export default PolaroidCard;
