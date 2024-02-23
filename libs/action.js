"use server";

import { revalidatePath } from "next/cache";
export async function createReview(formData) {
  // We can validate the formData here and return an error if there is one
  // prepare data
  const data = {
    rating: formData.get("rating"),
    comment: formData.get("comment"),
    "review-author": formData.get("review-author"),
  };

  try {
    // Insert data into the database
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to Create review.",
    };
  }

  // Revalidate the cache for the product page
  revalidatePath("/");
}
