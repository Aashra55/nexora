"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Michroma } from "next/font/google";

const michroma = Michroma({
    subsets: ['latin'],
    weight: ['400'],
})

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className={`${michroma.className} text-2xl font-bold text-indigo-600`}>
                    Nexora
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <Link href="#features" className="hover:text-indigo-600">
                        Features
                    </Link>
                    <Link href="#courses" className="hover:text-indigo-600">
                        Courses
                    </Link>
                    <Link href="#about" className="hover:text-indigo-600">
                        About
                    </Link>
                    <Link href="#testimonials" className="hover:text-indigo-600">
                        Testimonials
                    </Link>
                    <Link href="#faq" className="hover:text-indigo-600">
                        FAQ
                    </Link>
                    <Link href="#contact" className="hover:text-indigo-600">
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden p-2 rounded-lg border"
                >
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <div className="md:hidden bg-gray-50 px-6 py-4 space-y-4">
                    <Link href="#features" className="block">
                        Features
                    </Link>
                    <Link href="#courses" className="block">
                        Courses
                    </Link>
                    <Link href="#about" className="block">
                        About
                    </Link>
                    <Link href="#testimonials" className="block">
                        Testimonials
                    </Link>
                    <Link href="#faq" className="block">
                        FAQ
                    </Link>
                    <Link href="#contact" className="block">
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}
