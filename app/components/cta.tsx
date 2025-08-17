'use client'
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function CTA() {
    useEffect(() => {
            AOS.init({
                duration: 1000,
                once: true,
            })
        }, [])
  return (
    <section className="py-20 bg-indigo-600 text-white text-center" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">
          Start Your Web Development Journey Today 🚀
        </h2>
        <p className="text-lg mb-8">
          Join our upcoming batch and learn by building real projects.
        </p>
        <a
          href="https://wa.me/923128694822" 
          className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          Enroll Now
        </a>
      </div>
    </section>
  );
}
