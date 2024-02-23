import { unstable_noStore as noStore } from "next/cache";

export async function fetchProductById(id) {
  // Add noStore() here prevent the response from being cached.
  noStore();

  try {
    // Query the database directly and get the data
    return {
      images: [
        "https://eu.mingalondon.com/cdn/shop/products/minga-london-faye-striped-knit-cardigan-11_900x.jpg?v=1649078981",
        "https://eu.mingalondon.com/cdn/shop/products/minga-london-faye-striped-knit-cardigan-15_720x.jpg?v=1649078981",
        "https://eu.mingalondon.com/cdn/shop/products/minga-london-faye-striped-knit-cardigan-6_900x.jpg?v=1649078981",
      ],
      name: "By Anthropologie Tweed Appliqué Blazer",
      price: "£27.99",
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      colors: [
        "#e0190b",
        "#262222",
        "#271b96",
        "#5f118c",
        "#2e6362",
        "#3a0e5e",
      ],
      rating: 4,
      description:
        "Relaxed knitted cardigan Stripes in brown and green Distressed rib detail V-neck Front button through opening Loose fit Long sleeves 70% acrylic, 30% wool Relaxed knitted cardigan Stripes in brown and green Distressed rib detail V-neck Front button through opening Loose fit Long sleeves 70% acrylic, 30% wool Relaxed knitted cardigan Stripes in brown and green Distressed rib detail V-neck Front button through opening Loose fit Long sleeves 70% acrylic, 30% wool Relaxed knitted cardigan Stripes in brown and green Distressed rib detail V-neck Front button through opening Loose fit Long sleeves 70% acrylic, 30% wool",
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
          author: "Hossein Hosseinpour",
          rating: 4,
          date: "12/02/2023",
          comment:
            "First of all, you start off by hiding the actual circular radio buttons themselves – we’ll just be styling the labels. We can select them by using input. Initially I was hiding this by setting display:none, but as Patryk Kiedrowski points out in the comments, that will mean they are unfocusable and unable to be navigated via the keyboard. So instead, we make it invisible with the following settings:",
        },
        {
          author: "Ali",
          rating: 5,
          date: "01/08/2023",
          comment:
            "First of all, you start off by hiding the actual circular radio buttons themselves – we’ll just be styling the labels. We can select them by using input. Initially I was hiding this by setting display:none, but as Patryk Kiedrowski points out in the comments, that will mean they are unfocusable and unable to be navigated via the keyboard. So instead, we make it invisible with the following settings:",
        },
        {
          author: "Behnam",
          rating: 2,
          date: "05/08/2023",
          comment:
            "First of all, you start off by hiding the actual circular radio buttons themselves – we’ll just be styling the labels. We can select them by using input. Initially I was hiding this by setting display:none, but as Patryk Kiedrowski points out in the comments, that will mean they are unfocusable and unable to be navigated via the keyboard. So instead, we make it invisible with the following settings:",
        },
        {
          author: "Barbod",
          rating: 1,
          date: "12/02/2023",
          comment:
            "First of all, you start off by hiding the actual circular radio buttons themselves – we’ll just be styling the labels. We can select them by using input. Initially I was hiding this by setting display:none, but as Patryk Kiedrowski points out in the comments, that will mean they are unfocusable and unable to be navigated via the keyboard. So instead, we make it invisible with the following settings:",
        },
        {
          author: "Arshia",
          rating: 4,
          date: "12/02/2023",
          comment:
            "First of all, you start off by hiding the actual circular radio buttons themselves – we’ll just be styling the labels. We can select them by using input. Initially I was hiding this by setting display:none, but as Patryk Kiedrowski points out in the comments, that will mean they are unfocusable and unable to be navigated via the keyboard. So instead, we make it invisible with the following settings:",
        },
      ],
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch card data.");
  }
}
