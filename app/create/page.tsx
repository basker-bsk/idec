"use client";

import { createBook } from "../actions/create";
import { useState } from "react";
type FormData = {
  title: string;
  author: string;
  rating: number;
  blurb: string;
};
export default function Create() {
  const [error, setError] = useState("");

  async function handleSubmit(formData: any) {
    const result = await createBook(formData);

    if (result?.error) {
      setError(result.error);
    }
  }

  return (
    <main>
      <form action={handleSubmit}>
        <h4>Add a New Book</h4>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="author" placeholder="author" />
        <input
          type="number"
          name="rating"
          max={10}
          min={1}
          placeholder="rating"
        />
        <textarea name="blurb" placeholder="blurb..."></textarea>
        <button type="submit" className="btn">
          Add Book
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </main>
  );
}
