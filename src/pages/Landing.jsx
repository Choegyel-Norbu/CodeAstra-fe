import React, { useState, useEffect, useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaJava,
  FaDatabase,
  FaArrowRight,
  FaMobile,
} from "react-icons/fa";
import {
  SiFirebase,
  SiSpringboot,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";
import LoginModal from "../components/LoginModal";
import "../assets/css/custom.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useAuth } from "../services/AuthProvider";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import { useInView } from "react-intersection-observer";

const Landing = () => {
  const { loggedIn, logout } = useAuth();
  const [loginShow, setLoginShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoogedIn = useSelector((state) => state.auth.loggedIn);

  const [ref, inView] = useInView({
    triggerOnce: false, // Set true if you want it only once
    threshold: 0.5,
  });
  const toggleLogin = () => {
    setLoginShow(!loginShow);
  };

  const [theme, setTheme] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // only animate once
    });
  }, []);

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

  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setTheme("dark");
  };

  useEffect(() => {
    const root = window.document.documentElement;
    console.log("Root " + root);
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeLogin = () => {
    setLoginShow(false);
  };

  return (
    <>
      <div className="bg-white md:bg-[#262626] text-black dark:text-white">
        {/* Navigation */}
        <div className="fixed w-full z-20 bg-white">
          <nav className=" py-2 px-2 md:px-8 ">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
              <div className="flex flex-row justify-center items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG4T2eeT56DWkwb5nJE1avnleYrgQBQTKmQsiXkQavEnsEpakMNMALnFE&s"
                  alt="Logo"
                  className="w-16 h-16"
                />
                <div className="text-20 font-bold text-black-600 font-[cursive]">
                  Chogyal
                </div>
              </div>
              <div className="flex flex-row gap-12 hidden md:flex">
                <div className="text-ms font-bold text-[#333333] cursor-pointer">
                  Home
                </div>
                <div className="text-ms font-bold text-[#333333] cursor-pointer">
                  Contact
                </div>
              </div>
              <div
                className={`${
                  menuOpen
                    ? "flex flex-col absolute top-16 right-0 w-full bg-custom-background gap-4 px-6"
                    : "hidden"
                } md:flex gap-3`}
              >
                <div>
                  {!loggedIn && (
                    <span
                      onClick={toggleLogin}
                      className="hover:text-cyan-600 transition cursor-pointer nav-btn"
                    >
                      Login
                    </span>
                  )}
                  {loggedIn && (
                    <span
                      onClick={() => logout()}
                      className="hover:text-cyan-600 transition cursor-pointer nav-btn"
                    >
                      LogOut
                    </span>
                  )}
                </div>
              </div>
              <button className="md:hidden" onClick={toggleMenu}>
                <svg
                  className="w-6 h-6 relative"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </nav>
        </div>

        {/* LoginModal */}
        {loginShow && <LoginModal onClose={closeLogin} />}

        {/* hero section  */}
        <motion.section
          variants={fadeInUp}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          <section className="h-full w-full pt-15 flex flex-col md:flex-row sm:py-10 items-center">
            <div className=" relative w-[50%] h-full px-5 md:px-10 xl:px-10 rounded-l-30">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRziwypGm_6QKLI_YhK6XM_m5qSlEELNsFwxQ&s"
                alt="Hero"
                className="w-[100%] h-[100%] pt-10 object-cover hidden md:block rounded-3xl"
              />
            </div>

            <div
              className="hidden xl:block absolute top-20 left-[4.1%] lg:left-[2.8%] w-40 h-40 bg-[#262626]"
              style={{
                clipPath: "path('M 0 100 L 0 0 L 100 0 A 100 100 0 0 0 0 100')",
              }}
            ></div>

            <div
              className="hidden xl:block absolute top-20 left-[47%] w-40 h-40 bg-white"
              style={{
                clipPath: "path('M 0 100 L 0 0 L 100 0 A 100 100 0 0 0 0 100')",
              }}
            ></div>

            <div className="w-full pt-20 sm:pt-20 px-3 sm:px-5 md:px-0 md:w-[50%] h-full rounded-t-30">
              <div className="flex flex-col">
                <h1 className="text-6xl text-[#cccccc] sm:text-5xl xl:text-6xl text-center font-semibold text-[#b3b3b3] mb-4 ">
                  <span className="text-[#262626] md:text-white">
                    My Developer
                  </span>
                  <br />
                  Portfolio
                </h1>
              </div>
              <p className="py-5 text-left text-14 --font-family-primary sm:px-10 text-black md:text-white">
                I’m Chogyal, a self-taught tech enthusiast passionate about
                building real-world solutions. I work with Java, React, React
                Native, and Spring Boot to create meaningful apps, especially
                for communities in Bhutan. I’m driven by design, UI/UX, and
                clean architecture, and I’m continuously learning tools like
                Redux, Firebase, and cloud deployment to grow as a well-rounded
                developer.
              </p>

              <div className="flex gap-4 pl-10">
                <motion.section
                  variants={cardVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                >
                  <button
                    className="bg-black text-white px-6 py-2 shadow-md cursor-pointer hover:scale-105
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
                    className="border text-black md:text-white px-6 py-2  cursor-pointer hover:scale-105
        transition-transform duration300 ease-in-out"
                  >
                    Download Resume
                  </button>
                </motion.section>
              </div>
            </div>
          </section>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="py-16 px-4 sm:px-8 bg-white from-gray-50 to-white"
          variants={fadeInUp}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.2 }} // 30% visible before triggering
        >
          <section
            id="about"
            className=" px-4 sm:px-8 bg-white from-gray-50 to-white"
          >
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                  MY PATH
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  From Self-Taught to
                  <span className="text-blue-600">Problem Solver</span>
                </h2>
                <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
              </div>

              <div className="relative">
                {/* Timeline element */}
                <div className="hidden md:block absolute left-1/2 transform-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-400 to-blue-200"></div>

                {/* Journey items */}
                <div className="space-y-12 md:space-y-16">
                  <div className="relative md:flex items-center">
                    {/* <div className="hidden md:block absolute md:left-1/2 transform md:-translate-x-1/2 -ml-3 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-lg"></div> */}
                    <div className="md:w-5/12 md:pr-8 mb-4 md:mb-0">
                      <div className="md:text-right">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Self-Taught Beginnings
                        </h3>
                      </div>
                    </div>
                    <div className="md:w-7/12 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <p className="text-gray-700 leading-relaxed">
                        As a self-taught developer, I've always been fascinated
                        by how technology can solve real-world problems. Without
                        formal training, I've dedicated countless hours to
                        mastering programming through online resources, building
                        projects, and learning from the global developer
                        community.
                      </p>
                    </div>
                  </div>

                  <div className="relative md:flex items-center md:flex-row-reverse">
                    {/* <div className="hidden md:block absolute md:left-1/2 transform md:-translate-x-1/2 -ml-3 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-lg"></div> */}
                    <div className="md:w-5/12 md:pl-8 mb-4 md:mb-0">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Purpose-Driven Development
                        </h3>
                      </div>
                    </div>
                    <div className="md:w-7/12 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <p className="text-gray-700 leading-relaxed">
                        What drives me is not just coding, but understanding
                        problems deeply and crafting solutions that are simple,
                        effective, and culturally relevant to Bhutan's unique
                        context.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.section>

        {/* Projects Section */}
        <section id="projects" className="pb-10 px-4 sm:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block py-2 px-4 mb-4 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full">
                CREATIVE WORK
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Impactful{" "}
                <span className="text-indigo-600">Digital Solutions</span>
              </h2>
              <p className="max-w-2xl mx-auto text-gray-500 text-lg">
                Building technology that serves Bhutan's unique needs
              </p>
            </div>

            <div className="space-y-20">
              {/* Project 1 - Farmers' Market App */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-100 to-indigo-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-md"></div>
                <div className="relative flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all">
                  <div className="md:w-1/2 p-10 bg-gradient-to-br from-cyan-50 to-indigo-50 flex items-center justify-center">
                    <div className="text-center">
                      <FaMobile className="mx-auto text-7xl text-cyan-600 mb-6" />
                      <div className="inline-flex space-x-2">
                        <span className="px-3 py-1 text-xs font-medium bg-cyan-100 text-cyan-800 rounded-full">
                          React
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                          Node.js
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Farmers' Market App
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Revolutionizing agricultural commerce in Bhutan by
                      connecting farmers directly with consumers through a
                      mobile platform that eliminates middlemen, increases
                      transparency, and boosts farmer profits by an average of
                      40%.
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                      >
                        Case Study
                        <FaArrowRight className="ml-2" />
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center text-gray-500 hover:text-gray-700"
                      >
                        <FaGithub className="mr-2" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 - Cleaning Service Platform */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-md"></div>
                <div className="relative flex flex-col md:flex-row-reverse bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all">
                  <div className="md:w-1/2 p-10 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                    <div className="text-center">
                      <FaReact className="mx-auto text-7xl text-blue-600 mb-6" />
                      <div className="inline-flex space-x-2">
                        <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                          React
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                          Firebase
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Urban Cleaning Network
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      A comprehensive service platform that professionalizes
                      Bhutan's cleaning industry by connecting verified
                      providers with clients, featuring automated scheduling,
                      secure payments, and quality assurance systems.
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                      >
                        Case Study
                        <FaArrowRight className="ml-2" />
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center text-gray-500 hover:text-gray-700"
                      >
                        <FaGithub className="mr-2" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 3 - Tourism Helper */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-md"></div>
                <div className="relative flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all">
                  <div className="md:w-1/2 p-10 bg-gradient-to-br from-green-50 to-teal-50 flex items-center justify-center">
                    <div className="text-center">
                      <SiFirebase className="mx-auto text-7xl text-green-600 mb-6" />
                      <div className="inline-flex space-x-2">
                        <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                          Flutter
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                          Firebase
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Bhutan Travel Companion
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Supporting Bhutan's sustainable tourism initiative with a
                      digital platform that helps local operators manage
                      bookings, share cultural insights, and provide exceptional
                      visitor experiences while maintaining our environmental
                      commitments.
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                      >
                        Case Study
                        <FaArrowRight className="ml-2" />
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center text-gray-500 hover:text-gray-700"
                      >
                        <FaGithub className="mr-2" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 px-6 md:px-12 bg-cyan-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-xl italic mb-6">
              "Chogyal's ability to understand community needs and translate
              them into functional apps is remarkable. His work has genuinely
              helped local farmers increase their income."
            </blockquote>
            <div className="font-medium">
              — Local Agricultural Cooperative, Bhutan
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>
            <div className="hidden lg:block relative h-[700px] w-fit m-auto py-10 perspective-[1000px] flex items-center justify-center">
              <motion.div
                ref={ref}
                initial={{
                  rotate: 25,
                  x: 0,
                }}
                animate={{
                  rotate: inView ? 0 : 0,
                  x: inView ? -450 : 0,
                }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-10 w-[10rem] h-[15rem] flex flex-col items-center p-4"
              >
                {/* <div className="absolute top-10 w-[10rem] h-[15rem] flex flex-col items-center p-4 bg-gray-200 rounded-lg float-left transform rotate-40 transition"> */}
                <FaReact className="text-4xl text-cyan-600 mb-2" />
                <span>React</span>
              </motion.div>
              {/* </div> */}

              <motion.div
                ref={ref}
                initial={{
                  rotate: 25,
                  x: 0,
                }}
                animate={{
                  rotate: inView ? 0 : 0,
                  x: inView ? -300 : 0,
                }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-10 w-[10rem] h-[15rem] flex flex-col items-center p-4 "
              >
                <SiSpringboot className="text-4xl text-green-600 mb-2" />
                <span>Spring Boot</span>
              </motion.div>

              <motion.div
                ref={ref}
                initial={{
                  rotate: 25,
                  x: 0,
                }}
                animate={{
                  rotate: inView ? 0 : 0,
                  x: inView ? -150 : 0, // translates to left
                }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-10 w-[10rem] h-[15rem] flex flex-col items-center p-4 "
              >
                {/* <div className="absolute top-10 flex w-[10rem] h-[15rem] flex-col items-center p-4 bg-gray-200 rounded-lg transform rotate-30 transition"> */}
                <SiFirebase className="text-4xl text-yellow-500 mb-2" />
                <span>Firebase</span>
                {/* </div> */}
              </motion.div>

              <motion.div
                ref={ref}
                initial={{
                  rotate: 0,
                  x: 0,
                }}
                animate={{
                  rotate: inView ? 0 : 0,
                  x: inView ? 0 : 0, // translates to left
                }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-10 w-[10rem] h-[15rem] flex flex-col items-center p-4 "
              >
                {/* <div className="absolute top-10 w-[10rem] h-[15rem] flex flex-col items-center p-4 bg-gray-200 rounded-lg transform transition"> */}
                <SiMysql className="text-4xl text-blue-600 mb-2" />
                <span>MySQL</span>
                {/* </div> */}
              </motion.div>
              <motion.div
                ref={ref}
                initial={{
                  rotate: -25,
                  x: 0,
                }}
                animate={{
                  rotate: inView ? 0 : 0,
                  x: inView ? 150 : 0, // translates to left
                }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-10 w-[10rem] h-[15rem] flex flex-col items-center p-4 "
              >
                {/* <div className="absolute top-10 w-[10rem] h-[15rem] flex flex-col items-center p-4 bg-gray-200 rounded-lg transform rotate-20 transition"> */}
                <FaJava className="text-4xl text-red-600 mb-2" />
                <span>Java</span>
                {/* </div> */}
              </motion.div>

              <motion.div
                ref={ref}
                initial={{
                  rotate: -25,
                  x: 0,
                }}
                animate={{
                  rotate: inView ? 0 : 0,
                  x: inView ? 300 : 0, // translates to left
                }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-10 w-[10rem] h-[15rem] flex flex-col items-center p-4 "
              >
                {/* <div className="absolute top-10 flex w-[10rem] h-[15rem] flex-col items-center p-4 bg-gray-200 rounded-lg transform rotate-15 transition"> */}
                <SiTailwindcss className="text-4xl text-cyan-400 mb-2" />
                <span>Tailwind CSS</span>
                {/* </div> */}
              </motion.div>

              <motion.div
                ref={ref}
                initial={{
                  rotate: -25,
                  x: 0,
                }}
                animate={{
                  rotate: inView ? 0 : 0,
                  x: inView ? -600 : 0,
                }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-10 w-[10rem] h-[15rem] flex flex-col items-center p-4 "
              >
                {/* <div className="absolute top-10 w-[10rem] h-[15rem] flex flex-col items-center p-4 bg-gray-200 rounded-lg transform rotate-10 transition"> */}
                <FaDatabase className="text-4xl text-gray-600 mb-2" />
                <span>REST APIs</span>
                {/* </div> */}
              </motion.div>
              <motion.div
                ref={ref}
                initial={{
                  rotate: 25,
                  x: 0,
                }}
                animate={{
                  rotate: inView ? 0 : 0,
                  x: inView ? 450 : 0,
                }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-10 w-[10rem] h-[15rem] flex flex-col items-center p-4"
              >
                {/* <div className="absolute top-10 w-[10rem] h-[15rem] flex flex-col items-center p-4 bg-gray-200 rounded-lg float-left transform rotate-40 transition"> */}
                <FaReact className="text-4xl text-cyan-600 mb-2" />
                <span>React Native</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Get In Touch
            </h2>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-50 p-8 rounded-lg h-full">
                  <h3 className="text-xl font-bold mb-4">Direct Contact</h3>
                  <p className="mb-6">
                    Interested in collaborating or have a project in mind? Reach
                    out directly:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-3 text-cyan-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span>hello@chogyal.dev</span>
                    </div>
                    <div className="flex items-center">
                      <FaGithub className="w-5 h-5 mr-3 text-cyan-600" />
                      <a href="#" className="hover:underline">
                        github.com/chogyal
                      </a>
                    </div>
                    <div className="flex items-center">
                      <FaLinkedin className="w-5 h-5 mr-3 text-cyan-600" />
                      <a href="#" className="hover:underline">
                        linkedin.com/in/chogyal
                      </a>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h4 className="font-medium mb-3">Based in Bhutan</h4>
                    <p className="text-gray-600">
                      Creating digital solutions tailored for Bhutanese
                      communities and beyond.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Landing;
