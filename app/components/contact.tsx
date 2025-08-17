'use client';
import { Mail, Linkedin, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Link from "next/link";

export default function Contact() {
    useEffect(() => {
            AOS.init({
                duration: 1000,
                once: true,
            })
        }, [])
  return (
    <section id="contact" className="py-20" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-600 mb-12">
          Have questions? Reach out to us directly. We'd love to hear from you!
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Email */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <Mail className="mx-auto text-indigo-600 w-8 h-8 mb-3" />
            <h4 className="font-semibold">Email</h4>
            <p className="text-gray-600">aashrasaleem99@gmail.com</p>
          </div>

          {/* LinkedIn */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <Linkedin className="mx-auto text-indigo-600 w-8 h-8 mb-3" />
            <h4 className="font-semibold">LinkedIn</h4>
            <Link
              href="https://www.linkedin.com/in/aashra-saleem-7047a0315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="text-indigo-600 hover:underline"
            >
              Visit Profile
            </Link>
          </div>

          {/* WhatsApp */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <MessageCircle className="mx-auto text-indigo-600 w-8 h-8 mb-3" />
            <h4 className="font-semibold">WhatsApp</h4>
            <Link 
              href="https://wa.me/923128694822"
              target="_blank"
              className="text-indigo-600 hover:underline"
            >
              Chat Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


