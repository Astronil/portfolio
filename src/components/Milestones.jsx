import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    id: 1,
    title: "First Project",
    description: "Completed my first web application.",
    date: "January 2020",
  },
  {
    id: 2,
    title: "Second Project",
    description: "Built a full-stack e-commerce platform.",
    date: "June 2021",
  },
  {
    id: 3,
    title: "Third Project",
    description: "Developed a real-time chat application.",
    date: "December 2022",
  },
];

const Milestones = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });

    milestones.forEach((milestone, index) => {
      tl.to(`#milestone-${index}`, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: index * 0.2,
      });
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Career Milestones</h1>
      <div ref={timelineRef} className="relative">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            id={`milestone-${index}`}
            className="mb-8 opacity-0 transform translate-x-10"
          >
            <h2 className="text-2xl font-bold mb-2">{milestone.title}</h2>
            <p className="text-gray-700 mb-4">{milestone.description}</p>
            <p className="text-gray-500">{milestone.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Milestones;
