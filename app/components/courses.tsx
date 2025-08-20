'use client'
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Atropos from "atropos/react";

export default function Courses() {
  useEffect(() => {
    AOS.init({
      duration: 800,   // smooth animation speed
      once: true,      // animate only once on scroll
    });
  }, []);

  const courses = [
    {
      title: "HTML + CSS + Tailwind",
      description: "Learn modern web design from scratch with HTML, CSS, and Tailwind.",
      price: "PKR 4,000"
    },
    {
      title: "JavaScript & DOM",
      description: "Build interactive websites with JavaScript and DOM manipulation.",
      price: "PKR 5,000"
    },
    {
      title: "Complete Web Dev Bootcamp",
      description: "A complete package: HTML, CSS, JS, projects, and certification.",
      price: "PKR 10,000"
    },
    {
      title: "Next.js & TypeScript",
      description: "Learn modern full-stack development with Next.js, TypeScript, and TailwindCSS.",
      price: "PKR 12,000"
    },
    {
      title: "Python Programming",
      description: "Start coding with Python - syntax, OOP, and real projects.",
      price: "PKR 3,000"
    },
    {
      title: "Python & Streamlit",
      description: "Build interactive AI dashboards and data apps using Streamlit.",
      price: "PKR 9,000"
    },
    {
      title: "C++ Fundamentals",
      description: "Learn C++ programming concepts with practical coding examples.",
      price: "PKR 3,000"
    },
  ];

  return (
    <section id="courses" className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Courses</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <Atropos
              className="my-atropos"
              shadow={false}
              highlight={false}
              key={index}
            >
              <div
                key={index}
                className="p-6 bg-white rounded-2xl border border-indigo-600"
                data-aos="fade-up"
                data-aos-delay={index * 100}  // staggered animation
                data-aos-duration="800"
              >
                <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <span className="text-indigo-600 font-bold">{course.price}</span>
              </div>
            </Atropos>
          ))}
        </div>
      </div>
    </section>
  );
}
