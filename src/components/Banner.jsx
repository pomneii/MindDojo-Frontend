import { useState } from "react";

function Banner() {
  const ImagesSlide = [
    {
      label: "First Image",
      imgPath:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e4058f59786659.5a2f714d3b929.jpg",
    },
    {
      label: "Second Image",
      imgPath:
        "https://static0.moviewebimages.com/wordpress/wp-content/uploads/article/nV2VonPhcU8eYBJssm1tpCIHKgpHb8.jpg?w=1200&h=675&fit=crop",
    },
    {
      label: "Third Image",
      imgPath: "https://posterspy.com/wp-content/uploads/2020/04/DuneFINAL.jpg",
    },
    {
      label: "Fourth Image",
      imgPath: "https://live.staticflickr.com/4019/4686112721_b0fe19fae0_h.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === ImagesSlide.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? ImagesSlide.length - 1 : prev - 1));
  };

  return (
    <div className="relative mx-auto w-full max-w-6xl aspect-16/6 mt-10">
      <img
        src={ImagesSlide[index].imgPath}
        alt={ImagesSlide[index].label}
        className="w-full h-full object-cover rounded-xl"
      />

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2
                 bg-black/60 text-white px-4 py-2 rounded-full"
      >
        Prev
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2
                 bg-black/60 text-white px-4 py-2 rounded-full"
      >
        Next
      </button>
    </div>
  );
}

export default Banner;
