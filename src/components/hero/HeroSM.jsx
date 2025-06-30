import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
export default function HeroSM() {
  const cardVariants = {
    offscreen: { opacity: 0, x: 100 },
    onscreen: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const heroVariants = {
    offscreen: { y: 100 },
    onscreen: { y: -30, transition: { duration: 0.8 } },
  };
  const fadeInUp = {
    offscreen: {
      opacity: 0,
      y: 40,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.section
      variants={fadeInUp}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <section className="h-full w-full pt-20 flex flex-col md:flex-row sm:py-10 items-center">
        <div className=" relative w-[50%] h-full px-5 md:px-10 rounded-l-30">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRziwypGm_6QKLI_YhK6XM_m5qSlEELNsFwxQ&s"
            alt="Hero"
            className="w-[100%] h-[100%] pt-10 object-cover hidden md:block rounded-3xl"
          />
        </div>

        <div className="w-full pt-10 sm:pt-10 px-3 sm:px-1 md:px-0 md:w-[50%] h-full rounded-t-30">
          <div className="flex flex-col">
            <h1 className="text-6xl text-[#cccccc] sm:text-5xl xl:text-6xl text-center font-semibold text-[#b3b3b3] mb-4 ">
              <span className="text-[#262626]">My Developer</span>
              <br />
              Portfolio
            </h1>
          </div>
          <p className="py-5 text-left text-14 --font-family-primary sm:px-10 text-black">
            I’m Chogyal, a self-taught tech enthusiast passionate about building
            real-world solutions. I work with Java, React, React Native, and
            Spring Boot to create meaningful apps, especially for communities in
            Bhutan. I’m driven by design, UI/UX, and clean architecture, and I’m
            continuously learning tools like Redux, Firebase, and cloud
            deployment to grow as a well-rounded developer.
          </p>

          <div className="flex justify-start gap-4 sm:pl-10">
            <motion.section
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
            >
              <button
                className="border bg-black text-white px-6 py-2  cursor-pointer hover:scale-105
          transition-transform duration300 ease-in-out"
              >
                View My Work
              </button>
            </motion.section>

            <motion.section
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
            >
              <button
                className="border text-heading px-6 py-2  cursor-pointer hover:scale-105
        transition-transform duration300 ease-in-out"
              >
                Download Resume
              </button>
            </motion.section>
          </div>
        </div>
      </section>
    </motion.section>
  );
}
