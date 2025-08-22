"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products"); // Your MongoDB API
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="py-12 px-6 md:px-12 bg-gray-50 min-h-screen">
      <h2 className="text-2xl text-black font-bold text-center mb-8">
        🛒 Available Food
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="p-4 text-center">
               <img
                            src={product.photo || "https://via.placeholder.com/300"}
                            alt={product.name}
                            className="w-full h-40 object-cover"
                        />
              <h3 className="text-lg text-black font-semibold">{product.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{product.cuisine}</p>
              <p className="text-green-600 font-bold mt-2">${product.time}</p>
                  <Link
                href={`/products/${product._id}`}
                className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
