import { useState, useEffect } from "react";

interface Wig {
  id: string;
  name: string;
  images: string[];
  sizes: { size: string; price: number }[];
  description: string;
  forShowcase?: boolean;
}

// Hardcoded wigs data
const wigsData: Wig[] = [
    // ========== Straight Synthetic Range ==========
  {
    id: "1",
    name: "Elie (Ash Blonde)",
    description:
      "Elie (Ash Blonde)",
    images: ["/wigs/olive_black.jpg", "/wigs/elie (ash blonde).jpg"],
    sizes: [
      { size: "28", price: 500 },
      // { size: "34", price: 650 },
      // { size: "40", price: 750 },
    ],
    forShowcase: true,
  },
  {
    id: "2",
    name: "Kinky Straight Headband Wig",
    description: "36” full frontal synthetic wig. Available in Black and Brown.",
    images: ["/wigs/kinky_headband.jpg", "/wigs/kinky_headband.jpg"],
    sizes: [{ size: "36", price: 300 }],
    forShowcase: true,
  },
  {
    id: "3",
    name: "ULA - Ombre brown synthetic full frontal wig",
    description:
      "ULA - Ombre brown synthetic full frontal wig",
    images: [
      "/wigs/ULA - Ombre brown.jpg",
    ],
    sizes: [{ size: "34", price: 650 }],
    forShowcase: true,
  },
  {
    id: "4",
    name: "Elie (Black) - full frontal synthetic wig",
    description:
      "Elie (Black) - full frontal synthetic wig",
    images: [
      "/wigs/Elie (Black) - full.jpg",
    ],
    sizes: [{ size: "34", price: 550 }],
    forShowcase: true,
  },
  {
    id: "5",
    name: "Elie (99J) wig",
    description:
      "Elie (99J) wig",
    images: [
      "/wigs/Elie (99J).jpg",
    ],
    sizes: [{ size: "34", price: 550 }],
    forShowcase: true,
  },

  // ========== Curly Synthetic Range ==========
  {
    id: "6",
    name: "Delilah - Full frontal Synthetic",
    description: "20” Delilah - Full frontal Synthetic",
    images: ["/wigs/Delilah - Full.jpg"],
    sizes: [{ size: "20", price: 600 }],
    forShowcase: true,
  },
  {
    id: "7",
    name: "Black Curly Headband Wig",
    description:
      "Black Curly Headband Wig. Available in Ombre brown as well.",
    images: ["/wigs/Black Curly Headband.jpg", "/wigs/Black Curly Headband.jpg"],
    sizes: [{ size: "28", price: 700 }],
    forShowcase: true,
  },
  {
    id: "8",
    name: "Tyra Banks - full frontal wig",
    description: "Tyra Banks - full frontal wig",
    images: ["/wigs/Tyra Banks.jpg"],
    sizes: [{ size: "28", price: 700 }],
    forShowcase: true,
  },

  // ========== Headband Wig Range ==========
  {
    id: "8",
    name: "Kinky Straight Headband Wig",
    description: "Available in Chocolate Brown for a voluminous natural look.",
    images: ["/wigs/kinky_headband.jpg"],
    sizes: [{ size: "Standard", price: 300 }],
    forShowcase: false,
  },
];

const useDatabase = (collection: string, limit?: boolean) => {
  const [items, setItems] = useState<Wig[]>([]);

  useEffect(() => {
    // Simulate fetching data from an API or database
    if (collection === "wigs") {
      const filteredData = limit
        ? wigsData.filter((wig) => wig.forShowcase)
        : wigsData;
      setItems(filteredData);
    }
  }, [collection, limit]);

  return items;
};

export default useDatabase;
