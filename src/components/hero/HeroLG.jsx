import React, { useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import qoute2 from "../../assets/images/qoute2.png";
import qoute1 from "../../assets/images/qoute1.png";
import person from "../../assets/images/person.jpeg";

const HeroLG = React.forwardRef(({ onScroll }, forwardedRef) => {
  const localRef = useRef(null);
  const isInView = useInView(localRef, { once: true, amount: 0.5 });

  // Combine the forwarded ref with the local ref
  const setRefs = useCallback(
    (node) => {
      // Set the local ref
      localRef.current = node;

      // Set the forwarded ref
      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else if (forwardedRef) {
        forwardedRef.current = node;
      }
    },
    [forwardedRef]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const imageItemVariants = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 10,
        damping: 15,
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 10,
        delay: 0.5,
      },
    },
  };

  return (
    <section
      ref={setRefs}
      className="relative min-h-screen flex items-center justify-center bg-[#1a1a1a] overflow-hidden"
    >
      {/* Animated background elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div> */}

      <div className="container mx-auto pt-25 xl:pt-0 px-6 py-16 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-white/80 tracking-wider">
                Fuelled by Purpose. Focused on Impact.
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
              variants={itemVariants}
            >
              Fuelled by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Purpose
              </span>
              , Focused on Impact
            </motion.h1>

            <motion.p
              className="text-16 text-white/80 max-w-2xl"
              variants={itemVariants}
            >
              I’m Chogyal — a self-taught developer crafting meaningful digital
              solutions. I blend technology with purpose to create apps that
              solve real-world problems, elevate communities, and push
              boundaries.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              {/* <button className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-medium text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300">
                Get Started
              </button> */}
              {/* <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-400/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" /> */}
              <button
                onClick={() => onScroll()}
                className="px-8 py-3.5 cursor-pointer hover:bg-white/20 backdrop-blur-md  font-small text-white border border-white transition-all duration-300"
              >
                Contact Me
              </button>
            </motion.div>

            {/* <motion.div
              className="flex items-center gap-4 pt-4"
              variants={itemVariants}
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <img
                    key={i}
                    src={`https://randomuser.me/api/portraits/${
                      i % 2 === 0 ? "men" : "women"
                    }/${i + 10}.jpg`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white/20"
                  />
                ))}
              </div>
              <div className="text-sm text-white/80">
                Trusted by{" "}
                <span className="font-semibold text-white">10,000+</span>{" "}
                creators worldwide
              </div>
            </motion.div> */}
          </div>

          {/* Hero image */}
          <motion.div className="relative" variants={imageVariants}>
            <motion.div
              variants={imageItemVariants}
              className="hidden md:block w-[15rem] md:w-[20rem] z-1 lg:z-0 -left-5 -top-5 h-auto object-cover absolute lg:-top-25 -left-10 rounded-md"
            >
              <div className="flex flex-row">
                <span className="bg-primary w-[5px] h-[110px] text-primary">
                  o
                </span>
                <img
                  src={qoute1}
                  alt="Hero"
                  // className="hidden md:block w-[15rem] md:w-[20rem] z-1 lg:z-0 -left-5 -top-5 h-auto object-cover absolute lg:-top-25 -left-10 rounded-md"
                />
              </div>
            </motion.div>

            <motion.div
              variants={imageItemVariants}
              className="hidden md:block absolute w-[15rem] md:w-[20rem] z-2 -left-[0.5rem] opacity-[0.6] bottom-10 h-auto object-cover  -left-10 rounded-md"
            >
              <div className="flex flex-row">
                <span className="bg-primary w-[5px] h-[120px] text-primary">
                  o
                </span>
                <img
                  // src="../../../public/images/qoute2.png"
                  src={qoute2}
                  alt="Hero"
                  // className="hidden md:block absolute w-[15rem] md:w-[20rem] z-2 -left-[0.5rem] opacity-[0.6] bottom-10 h-auto object-cover  -left-10 rounded-md"
                />
              </div>
            </motion.div>
            <motion.div
              variants={imageItemVariants}
              className="hidden lg:block absolute w-[15rem] md:w-[20rem] z-2 left-40 xl:left-70 -bottom-30 h-auto object-cover  -left-10 rounded-md"
            >
              <div className="flex flex-row">
                <span className="bg-primary w-[5px] h-[120px] text-primary">
                  o
                </span>
                <img
                  src={qoute1}
                  alt="Hero"
                  // className="hidden lg:block absolute w-[15rem] md:w-[20rem] z-2 left-40 xl:left-70 -bottom-30 h-auto object-cover  -left-10 rounded-md"
                />
              </div>
            </motion.div>

            <div className=" absolute -top-10 -left-10 w-64 h-64 bg-cyan-400/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" />
            <div className="hidden md:block absolute -bottom-10 -right-10 w-64 h-64 bg-purple-400/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000" />

            <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={person}
                alt="Hero"
                className="w-full h-auto object-cover"
              />

              {/* <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Lightning Fast</h3>
                    <p className="text-sm text-white/80">
                      Optimized for performance
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

export default HeroLG;
