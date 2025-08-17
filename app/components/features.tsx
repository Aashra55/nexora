'use client'
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Code, Laptop, Users } from "lucide-react";

export default function Features() {
    useEffect(() => {
            AOS.init({
                duration: 1000,
                once: true,
            })
        }, [])
  return (
    <section id="features" className="py-20 bg-gray-50" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Choose Nexora?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 bg-white rounded-2xl shadow">
            <Code className="mx-auto text-indigo-600 w-12 h-12 mb-4" />
            <h3 className="font-semibold text-lg">Practical Learning</h3>
            <p className="text-gray-600 mt-2">
              Learn by building real-world projects and gaining hands-on experience.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <Laptop className="mx-auto text-indigo-600 w-12 h-12 mb-4" />
            <h3 className="font-semibold text-lg">Live Coding</h3>
            <p className="text-gray-600 mt-2">
              Interactive Zoom sessions with screen sharing and Q&A.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <Users className="mx-auto text-indigo-600 w-12 h-12 mb-4" />
            <h3 className="font-semibold text-lg">Community Support</h3>
            <p className="text-gray-600 mt-2">
              Get access to a supportive learning group and mentorship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
