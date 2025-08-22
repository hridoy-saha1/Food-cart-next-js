"use client";

import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="bg-gradient-to-r from-lime-300 via-green-400 to-emerald-500 shadow-lg px-6 py-4 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 font-extrabold text-xl tracking-wide">
          <img
            src="/images/logo.jpg"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <p>CraveCraft</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 font-semibold">
          <li>
            <Link href="/" className="hover:text-lime-900 transition">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="hover:text-lime-900 transition"
            >
              Available Food
            </Link>
          </li>
          <li>
            {session ? (
              <Link
                href="/dashbord/add-product"
                className="hover:text-lime-900 transition"
              >
                Add Food
              </Link>
            ) : (
              <button
                onClick={() =>
                  signIn("google", { callbackUrl: "/dashboard/add-product" })
                }
                className="hover:text-lime-900 transition"
              >
                Add Food
              </button>
            )}
          </li>

          <li>
            {session ? (
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="px-4 py-2 rounded-full bg-red-400 text-white shadow hover:scale-105 transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => signIn("google")}
                className="px-4 py-2 rounded-full bg-blue-300 text-white shadow hover:scale-105 transition"
              >
                Login
              </button>
            )}
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded hover:bg-lime-400 transition"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="lg:hidden bg-gradient-to-r from-lime-300 via-green-400 to-emerald-500 text-white px-6 py-4 space-y-4 font-semibold">
          <li>
            <Link href="/" className="block hover:text-lime-900 transition">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="block hover:text-lime-900 transition"
            >
              Available Food
            </Link>
          </li>
          <li>
            {session ? (
              <Link
                href="/dashbord/add-product"
                className="block hover:text-lime-900 transition"
              >
                Add Food
              </Link>
            ) : (
              <button
                onClick={() =>
                  signIn("google", { callbackUrl: "/dashboard/add-product" })
                }
                className="block hover:text-lime-900 transition"
              >
                Add Food
              </button>
            )}
          </li>
          <li>
            {session ? (
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="block px-4 py-2 border border-white rounded hover:bg-white hover:text-green-700 transition font-semibold"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => signIn("google")}
                className="block px-4 py-2 border border-white rounded hover:bg-white hover:text-green-700 transition font-semibold"
              >
                Login
              </button>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
}
