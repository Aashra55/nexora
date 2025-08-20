"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Code, Laptop, Users } from "lucide-react";
import Atropos from "atropos/react";

const features = [
  {
    icon: Code,
    title: "Practical Learning",
    description: "Learn by building real-world projects and gaining hands-on experience.",
  },
  {
    icon: Laptop,
    title: "Live Coding",
    description: "Interactive Zoom sessions with screen sharing and Q&A.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Get access to a supportive learning group and mentorship.",
  },
];

export default function Features() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Choose Nexora?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <Atropos
              className="my-atropos w-full h-full"
              shadow={false}
              highlight={false}
              key={index}
            >
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index*150}
                className="p-6 bg-white rounded-2xl transition shadow"
              >
                <feature.icon className="mx-auto text-indigo-600 w-12 h-12 mb-4" />
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            </Atropos>
          ))}
        </div>
      </div>
    </section>
  );
}
