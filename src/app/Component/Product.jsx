"use client";
import { useEffect, useState } from "react";

export default function Product() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const res = await fetch("/api/recipes");
                const data = await res.json();
                setRecipes(data);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <section className="py-12 px-6 md:px-12 bg-gray-50">
            <h2 className="text-2xl text-black font-bold text-center mb-8">
                🍽️ Product Highlights
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
                {recipes.slice(0, 4).map((item) => (
                    <div
                        key={item._id}
                        className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                    >
                        <img
                            src={item.photo || "https://via.placeholder.com/300"}
                            alt={item.name}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-lg text-black font-semibold">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.cuisine}</p>
                            <p className="text-green-600 font-bold mt-2">${item.time}</p>
                        </div>
                    </div>
                ))}
            </div>


        </section>
    );
}
