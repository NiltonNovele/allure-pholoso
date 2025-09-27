import * as React from "react";
import { useState } from "react";
import useDatabase from "../hooks/useDatabase";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface ShowcaseProps {
  limit?: boolean;
}

interface Wig {
  id: string;
  name: string;
  images: string[];
  sizes: { size: string; price: number }[];
  description: string;
}

export const Showcase: React.FC<ShowcaseProps> = ({ limit }) => {
  const [selectedWig, setSelectedWig] = useState<Wig | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const wigs: Wig[] = useDatabase("wigs", limit) as Wig[];

  const handleOpenWig = (wig: Wig) => {
    setSelectedWig(wig);
    setSelectedSize(wig.sizes[0].size);
    setCurrentImageIndex(0);
  };

  const currentPrice = selectedWig
    ? selectedWig.sizes.find((s) => s.size === selectedSize)?.price || 0
    : 0;

  return (
    <>
      <section className="py-12 col-span-10 col-start-2 col-end-12">
        {limit && (
          <div className="flex flex-row items-center my-8">
            <span className="w-full h-0.5 bg-gray-300 mr-4"></span>
            <h1 className="text-4xl font-bold text-gray-800 tracking-wide">
              Wig Collection
            </h1>
            <span className="w-full h-0.5 bg-gray-300 ml-4"></span>
          </div>
        )}

        {/* Wig Grid */}
        <main className="py-8 gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full sm:w-11/12 lg:w-10/12 mx-auto">
          {wigs.map((wig) => (
            <motion.div
              key={wig.id}
              className="relative bg-gradient-to-br from-pink-50 to-orange-50 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl cursor-pointer transition-all duration-300 group"
              onClick={() => handleOpenWig(wig)}
              whileHover={{ y: -5 }}
            >
              {/* Wig Image */}
              <div className="relative w-full h-72">
                <Image
                  src={wig.images[0]}
                  alt={wig.name}
                  height={400}
                  width={450}
                  className="object-cover rounded-t-3xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between h-48">
                <div>
                  <h2 className="text-lg font-bold text-gray-800">{wig.name}</h2>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {wig.description}
                  </p>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-orange-600">
                    R{wig.sizes[0].price.toFixed(2)}
                  </span>
                  <span className="text-gray-500 text-sm">Starting Price</span>
                </div>
              </div>
            </motion.div>
          ))}
        </main>
      </section>

      {/* Wig Modal */}
      <AnimatePresence>
        {selectedWig && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative grid grid-cols-1 md:grid-cols-2"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* Left: Image Carousel */}
              <div className="relative w-full h-96 md:h-auto">
                <Image
                  src={selectedWig.images[currentImageIndex]}
                  alt={selectedWig.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-l-3xl"
                />
                {selectedWig.images.length > 1 && (
                  <>
                    <button
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                      onClick={() =>
                        setCurrentImageIndex(
                          (prev) =>
                            (prev - 1 + selectedWig.images.length) %
                            selectedWig.images.length
                        )
                      }
                    >
                      ◀
                    </button>
                    <button
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                      onClick={() =>
                        setCurrentImageIndex(
                          (prev) => (prev + 1) % selectedWig.images.length
                        )
                      }
                    >
                      ▶
                    </button>
                  </>
                )}
              </div>

              {/* Right: Content */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    {selectedWig.name}
                  </h2>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {selectedWig.description}
                  </p>

                  {/* Size Selector */}
                  <div className="mt-6">
                    <label className="block mb-2 text-gray-700 font-medium">
                      Select Size:
                    </label>
                    <select
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      {selectedWig.sizes.map((option) => (
                        <option key={option.size} value={option.size}>
                          {option.size}&quot - R{option.price.toFixed(2)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Price + Add to Cart */}
                <div className="mt-8 flex justify-between items-center">
                  <span className="text-3xl font-bold text-orange-600">
                    R{currentPrice.toFixed(2)}
                  </span>
                  <button
                    onClick={() => alert(`${selectedWig.name} added to cart!`)}
                    className="px-8 py-3 bg-gradient-to-r from-orange-400 to-pink-400 text-black font-semibold rounded-xl shadow-lg hover:from-orange-500 hover:to-pink-500 transition-all duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedWig(null)}
                className="absolute top-5 right-5 bg-gray-100 hover:bg-gray-200 rounded-full p-3 shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
