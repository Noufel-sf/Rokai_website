import React from "react";

type SliderItem = {
  id: number;
  src: string;
  title: string;
  alt?: string;
};

type InfiniteSliderProps = {
  items: SliderItem[];
  width: number;
  height: number;
  duration?: number;
  reverse?: boolean;
};

const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  items,
  width,
  height,
  duration = 100,
  reverse = false,
}) => {
  return (
    <div
      className="slider-wrapper"
      style={{
        ["--width" as any]: `${width}px`,
        ["--height" as any]: `${height}px`,
        ["--quantity" as any]: items.length,
        ["--duration" as any]: `${duration}s`,
      }}
      data-reverse={reverse}
    >
      <div className="slider">
        <div className="slider-list">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="slider-item bg-amber-200"
              style={{ ["--position" as any]: index + 1 }}
            >
              {/* ITEM CARD */}
              <div className="flex flex-col items-center gap-3">
                {/* Image */}
                <div
                  className="overflow-hidden rounded-xl bg-black shadow-md"
                  style={{ width, height }}
                >
                  <img
                    src={item.src}
                    alt={item.alt ?? ""}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Text */}
                <p className="text-sm font-medium text-slate-700 text-center">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
