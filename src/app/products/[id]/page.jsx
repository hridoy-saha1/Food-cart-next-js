'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function ProductDetailsPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`/api/products/${id}`);
                const data = await res.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) return <p className="text-center mt-8">Loading...</p>;

    return (
        <section className="py-12 px-6 md:px-12 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto rounded-xl shadow-md overflow-hidden bg-white p-6">
                <img
                    src={product.photo || 'https://via.placeholder.com/400'}
                    alt={product.title}
                    className="w-full h-64 object-cover rounded-md"
                />
                <h1 className="text-3xl text-black font-bold mt-4">{product.title}</h1>
                <p className="text-gray-700 mt-2">{product.instruction
                }</p>
                <p className="text-gray-600 mt-2">Cuisine: {product.cuisine}</p>
                <p className="text-green-600 font-bold mt-2">${product.time}</p>
            </div>
        </section>
    );
}
