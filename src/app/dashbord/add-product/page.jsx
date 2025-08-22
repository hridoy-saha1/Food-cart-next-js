'use client';
import { useState } from "react";

export default function AddProductPage() {
  const [form, setForm] = useState({
    title: "",
    cuisine: "",
    photo: "",
    time: "",
    description: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Product added successfully!");
        setForm({ title: "", cuisine: "", photo: "", time: "", description: "" });
      } else {
        const data = await res.json();
        setStatus(`Error: ${data.message}`);
      }
    } catch (error) {
      setStatus("Error submitting product");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-amber-50 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-black p-8 rounded shadow-md"
      >
        <h1 className="text-2xl font-bold mb-6">Add New Product</h1>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <input
          type="text"
          name="cuisine"
          placeholder="Cuisine"
          value={form.cuisine}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          value={form.photo}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        <input
          type="text"
          name="time"
          placeholder="Price / Time"
          value={form.time}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Add Product
        </button>

        {status && <p className="mt-4 text-center">{status}</p>}
      </form>
    </div>
  );
}
