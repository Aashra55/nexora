'use client'
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function FAQ() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const faqs = [
    {
      question: "Do I need prior experience?",
      answer: "No, this course starts from absolute basics and moves step by step."
    },
    {
      question: "Will I get a certificate?",
      answer: "Yes, upon successful completion you will get a Nexora certificate."
    },
    {
      question: "What if I miss a live class?",
      answer: "You'll get recordings so you can learn at your own pace."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">FAQ</h2>
        <div className="space-y-6">
          {faqs.map((item, index) => (
              <div key={index}
              data-aos="fade-up"
              data-aos-delay={index*100}
              className="p-6 bg-white rounded-2xl shadow transition transition-duration-1000 hover:scale-110">
                <h3 className="font-semibold">{item.question}</h3>
                <p className="text-gray-600 mt-2">{item.answer}</p>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
