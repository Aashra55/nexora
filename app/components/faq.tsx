'use client'
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function FAQ() {
    useEffect(() => {
            AOS.init({
                duration: 1000,
                once: true,
            })
        }, [])
  return (
    <section id="faq" className="py-20 bg-gray-50" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">FAQ</h2>
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold">Do I need prior experience?</h3>
            <p className="text-gray-600 mt-2">
              No, this course starts from absolute basics and moves step by step.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold">Will I get a certificate?</h3>
            <p className="text-gray-600 mt-2">
              Yes, upon successful completion you will get a Nexora certificate.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold">What if I miss a live class?</h3>
            <p className="text-gray-600 mt-2">
              You'll get recordings so you can learn at your own pace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
