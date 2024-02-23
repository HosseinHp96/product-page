import { unstable_noStore as noStore } from "next/cache";

export async function fetchProductById(id) {
  // Add noStore() here prevent the response from being cached.
  noStore();

  try {
    // Query the database directly and get the data
    return {
      images: [
        "https://eu.mingalondon.com/cdn/shop/files/HanaWhiteAsymmetricalCutOutTop6_720x.png?v=1684503312",
        "https://eu.mingalondon.com/cdn/shop/files/HanaWhiteAsymmetricalCutOutTop8_720x.jpg?v=1684503312",
        "https://eu.mingalondon.com/cdn/shop/files/HanaWhiteAsymmetricalCutOutTop4_720x.jpg?v=1684503312",
        "https://eu.mingalondon.com/cdn/shop/files/Hana-White-Asymmetrical-Cut-Out-Top11_720x.jpg?v=1684503312",
        "https://eu.mingalondon.com/cdn/shop/files/Hana-White-Asymmetrical-Cut-Out-Top10_720x.jpg?v=1684503312",
      ],
      name: "HANA WHITE ASYMMETRICAL CUT OUT TOP",
      price: "€40.00",
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      colors: ["#ffffff", "#262222", "#271b96", "#5f118c", "#2e6362"],
      rating: 4,
      description: [
        "Asymmetrical long sleeve top in white",
        "Cut out front detail",
        "Lettuce edge trims",
        "Boat neckline",
        "Regular length",
        "Slim fit",
        "95% polyester, 5% elastane",
      ],
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch card data.");
  }
}

export async function fetReviewsById(id) {
  // Add noStore() here prevent the response from being cached.
  noStore();

  try {
    // Query the database directly and get the data
    return {
      rating: 4,
      reviews: [
        {
          author: "MARTA",
          rating: 5,
          date: "08/28/2023",
          comment:
            "It fits very nicely, it can be worn as it is or as a layer piece! I love wearing it as it is as it's see through but not totally revealing!",
        },
        {
          author: "ZOE",
          rating: 4,
          date: "05/03/2023",
          comment:
            "Feels slightly uncomfortable because of the scratchy material. However, it's stretchy and fits well and the look was so cute.",
        },
        {
          author: "MARTA",
          rating: 5,
          date: "08/28/2023",
          comment:
            "It fits very nicely, it can be worn as it is or as a layer piece! I love wearing it as it is as it's see through but not totally revealing!",
        },
        {
          author: "ZOE",
          rating: 4,
          date: "05/03/2023",
          comment:
            "Feels slightly uncomfortable because of the scratchy material. However, it's stretchy and fits well and the look was so cute.",
        },
        {
          author: "MARTA",
          rating: 5,
          date: "08/28/2023",
          comment:
            "It fits very nicely, it can be worn as it is or as a layer piece! I love wearing it as it is as it's see through but not totally revealing!",
        },
      ],
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch card data.");
  }
}
