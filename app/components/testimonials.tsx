'use client'
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Testimonials() {
    useEffect(() => {
            AOS.init({
                duration: 1000,
                once: true,
            })
        }, [])
  return (
    <section id="testimonials" className="py-20 bg-gray-50" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Students Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-600 italic">
              "This course made me fall in love with coding. I never thought HTML & CSS could be this fun!"
            </p>
            <h4 className="mt-4 font-semibold">— Ayesha, Student</h4>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-600 italic">
              "Affordable and high quality. I built my first portfolio website within 2 weeks!"
            </p>
            <h4 className="mt-4 font-semibold">— Ali, Beginner Dev</h4>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-600 italic">
              "The support group and mentorship kept me motivated. Highly recommended!"
            </p>
            <h4 className="mt-4 font-semibold">— Sara, Freelancer</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
