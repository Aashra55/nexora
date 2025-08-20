'use client';
import { Mail, Linkedin, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Link from "next/link";
import Atropos from "atropos/react";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const contacts = [
    {
      icon: Mail,
      title: "Email",
      content: "aashrasaleem99@gmail.com",
      type: "text", // simple text (not a link)
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "Visit Profile",
      href: "https://www.linkedin.com/in/aashra-saleem-7047a0315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      type: "link",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "Chat Now",
      href: "https://wa.me/923128694822",
      type: "link",
    },
  ];

  return (
    <section id="contact" className="py-20" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-600 mb-12">
          Have questions? Reach out to us directly. We'd love to hear from you!
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {contacts.map((item, index) => {
            const Icon = item.icon;
            return (
              <Atropos
              className="my-atropos w-full h-full"
              shadow={false}
              highlight={false}
              key={index}
            >
              <div key={index} className="bg-gray-100 p-6 rounded-2xl shadow">
                <Icon className="mx-auto text-indigo-600 w-8 h-8 mb-3" />
                <h4 className="font-semibold">{item.title}</h4>

                {item.type === "link" ? (
                  <Link
                    href={item.href!}
                    target="_blank"
                    className="text-indigo-600 hover:underline"
                  >
                    {item.content}
                  </Link>
                ) : (
                  <p className="text-gray-600">{item.content}</p>
                )}
              </div></Atropos>
            );
          })}
        </div>
      </div>
    </section>
  );
}
