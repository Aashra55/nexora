'use client';
import { Target, Award, BookOpen } from "lucide-react";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function About() {
  useEffect(() => {
            AOS.init({
                duration: 1000,
                once: true,
            })
        }, [])
  return (
    <section id="about" className="py-20" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6">About Nexora</h2>
          <p className="text-gray-600 mb-6">
            Nexora is a solo initiative dedicated to teaching coding in a simple and 
            affordable way. We believe every student in Pakistan should have access 
            to practical digital skills like <span className="font-semibold">HTML, CSS, and JavaScript</span>.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Target className="text-indigo-600 w-6 h-6" />
              <p className="text-gray-700">Our mission is to empower youth with digital skills.</p>
            </div>
            <div className="flex items-center gap-3">
              <Award className="text-indigo-600 w-6 h-6" />
              <p className="text-gray-700">Certificates after course completion.</p>
            </div>
            <div className="flex items-center gap-3">
              <BookOpen className="text-indigo-600 w-6 h-6" />
              <p className="text-gray-700">Practical, project-based learning approach.</p>
            </div>
          </div>
        </div>

        {/* Image / Illustration */}
        <div className="bg-indigo-50 rounded-2xl shadow p-8 text-center">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-2">🚀 Empowering the Next Gen</h3>
          <p className="text-gray-600">From zero to web developer — step by step.</p>
        </div>
      </div>
    </section>
  );
}
