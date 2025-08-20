'use client'
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Atropos from "atropos/react";

export default function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const testimonials = [
    {
      quote: "This course made me fall in love with coding. I never thought HTML & CSS could be this fun!",
      author: "— Ayesha, Student"
    },
    {
      quote: "Affordable and high quality. I built my first portfolio website within 2 weeks!",
      author: "— Ali, Beginner Dev"
    },
    {
      quote: "The support group and mentorship kept me motivated. Highly recommended!",
      author: "— Sara, Freelancer"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Students Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <Atropos
              className="my-atropos w-full h-full"
              shadow={false}
              highlight={false}
              key={index}
            >
              <div key={index}
              data-aos="fade-up"
              data-aos-delay={index*150}
               className="bg-white p-6 rounded-2xl shadow">
                <p className="text-gray-600 italic">"{item.quote}"</p>
                <h4 className="mt-4 font-semibold">{item.author}</h4>
              </div>
            </Atropos>
          ))}
        </div>
      </div>
    </section>
  );
}
