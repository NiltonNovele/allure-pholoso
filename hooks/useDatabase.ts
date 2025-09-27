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
    name: "Olive – Straight Full Frontal Synthetic Wig",
    description:
      "28” full frontal synthetic wig. Available in Black and Blonde.",
    images: ["/wigs/olive_black.jpg", "/wigs/olive_blonde.jpg"],
    sizes: [
      { size: "28", price: 500 },
      { size: "34", price: 650 },
      { size: "40", price: 750 },
    ],
    forShowcase: true,
  },
  {
    id: "2",
    name: "Ula – Straight Full Frontal Synthetic Wig",
    description: "36” full frontal synthetic wig. Available in Black and Brown.",
    images: ["/wigs/ula_black.jpg", "/wigs/ula_brown.jpg"],
    sizes: [{ size: "36", price: 650 }],
    forShowcase: true,
  },
  {
    id: "3",
    name: "Elie – Straight Kinky Full Frontal Synthetic Wig",
    description:
      "34” straight kinky full frontal synthetic wig. Available in Black, Brown, 99J (Maroon), and R19 (Ash Blonde).",
    images: [
      "/wigs/elie_black.jpg",
      "/wigs/elie_brown.jpg",
      "/wigs/elie_99j.jpg",
      "/wigs/elie_r19.jpg",
    ],
    sizes: [{ size: "34", price: 550 }],
    forShowcase: true,
  },

  // ========== Curly Synthetic Range ==========
  {
    id: "4",
    name: "Delilah – Curly Human Hair Blended Wig",
    description: "20” human hair blended full frontal curly wig.",
    images: ["/wigs/delilah.jpg"],
    sizes: [{ size: "20", price: 600 }],
    forShowcase: true,
  },
  {
    id: "5",
    name: "Latisha – Curly Human Blended Bouncy Wig",
    description:
      "28” human blended bouncy full frontal wig. Available in Black and Brown (coming soon).",
    images: ["/wigs/latisha_black.jpg", "/wigs/latisha_brown.jpg"],
    sizes: [{ size: "28", price: 700 }],
    forShowcase: true,
  },
  {
    id: "6",
    name: "Tyra Banks – Curly Full Frontal Synthetic Wig",
    description: "28” full frontal synthetic wig with bold curls.",
    images: ["/wigs/tyra_banks.jpg"],
    sizes: [{ size: "28", price: 700 }],
    forShowcase: true,
  },

  // ========== Headband Wig Range ==========
  {
    id: "7",
    name: "Bodywave Headband Wig",
    description: "24” bodywave headband wig with natural bounce and shine.",
    images: ["/wigs/bodywave_headband.jpg"],
    sizes: [{ size: "24", price: 280 }],
    forShowcase: false,
  },
  {
    id: "8",
    name: "Kinky Straight Headband Wig",
    description: "Available in Chocolate Brown for a voluminous natural look.",
    images: ["/wigs/kinky_headband.jpg"],
    sizes: [{ size: "Standard", price: 300 }],
    forShowcase: false,
  },
  {
    id: "9",
    name: "Kinky Watverave",
    description: "Available in colour 99J",
    images: ["/wigs/Kinky Watverave.jpg"],
    sizes: [{ size: "Standard", price: 320 }],
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
