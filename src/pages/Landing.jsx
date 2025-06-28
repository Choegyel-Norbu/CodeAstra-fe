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
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaStar,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import {
  SiFirebase,
  SiSpringboot,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";
import brainstormingImg from "../../public/images/artificial-intelligence.png";
import developmentImg from "../../public/images/development.png";
import java from "../../public/images/java.png";
import react from "../../public/images/react.png";
import ic3 from "../../public/images/ic3.png";

import LoginModal from "../components/LoginModal";
import "../assets/css/custom.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useAuth } from "../services/AuthProvider";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import { useInView } from "react-intersection-observer";
import GetInTouch from "../components/GetInTouch";

const Landing = () => {
  const { loggedIn, logout } = useAuth();
  const [loginShow, setLoginShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoogedIn = useSelector((state) => state.auth.loggedIn);
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [image, setImage] = useState("");
  const certiRef = useRef(null);

  const [ref, inView] = useInView({
    triggerOnce: false, // Set true if you want it only once
    threshold: 0.1,
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

  const MenuSlideIn = {
    offscreen: {
      opacity: 0,
      x: -300, // Start off-screen to the left
    },
    onscreen: {
      opacity: 1,
      x: 0, // Slide in to normal position
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: -300, // Slide back out to the left
      transition: {
        ease: "easeIn",
        duration: 0.3,
      },
    },
  };

  const [dark, setDark] = useState(false);

  const handleImageSelection = (path) => {
    setImage(path);
    setCertModalOpen(true);
    console.log("Image path - " + path);
  };

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

  const sideBarRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (certiRef.current && !certiRef.current.contains(event.target)) {
        setCertModalOpen(false);
      }
      if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [certiRef]);

  return (
    <>
      <div className="bg-white text-black dark:text-white">
        {/* Navigation */}
        <div className="fixed w-full z-20 bg-white">
          <nav className="relative py-2 px-2 md:px-8 ">
            <div className="mx-auto flex justify-between items-center">
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
                <div className="text-ms font-normal text-[#333333] cursor-pointer">
                  Home
                </div>
                <div className="relative group">
                  <div className="text-ms font-normal text-[#333333] cursor-pointer">
                    Projects
                  </div>
                  <div className="absolute botton-10 left-0 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md mt-1 min-w-[180px] z-50">
                    <a href="#java" className="px-4 py-2 hover:bg-gray-100">
                      Java Projects
                    </a>
                    <a href="#react" className="px-4 py-2 hover:bg-gray-100">
                      React Projects
                    </a>
                    <a
                      href="#fullstack"
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      Fullstack Projects
                    </a>
                  </div>
                </div>
                <div className="text-ms font-normal text-[#333333] cursor-pointer">
                  Contact
                </div>
                <div className="text-ms font-normal text-[#333333] cursor-pointer">
                  About
                </div>
              </div>
              <div className="hidden md:block  w-fit bg-custom-background gap-4 px-6">
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
                      className="text-primary transition cursor-pointer nav-btn"
                    >
                      LogOut
                    </span>
                  )}
                </div>
              </div>
              <button className="md:hidden" onClick={toggleMenu}>
                {menuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
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
                )}
              </button>
            </div>
          </nav>

          <motion.section
            ref={sideBarRef}
            variants={MenuSlideIn}
            initial="offscreen"
            animate={menuOpen ? "onscreen" : "exit"}
            exit="exit"
            className="fixed top-18 bg-gray-100 left-0  h-screen w-[70%] sm:w-[60%] md:w-[40%] md:hidden z-50 overflow-y-auto shadow-lg"
          >
            <nav className="border-b-1 border-[#cccccc] pb-5 py-5">
              <div className=" flex flex-col gap-y-2">
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 transition"
                >
                  <FaHome className="w-5 h-5" /> Home
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                >
                  <FaInfoCircle className="w-5 h-5" /> About
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                >
                  <FaPhone className="w-5 h-5" /> Contact
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                >
                  <FaStar className="w-5 h-5" /> Rate
                </a>
              </div>
            </nav>
            <div className="mt-auto">
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
              >
                {loggedIn ? (
                  <>
                    <FaSignOutAlt className="w-5 h-5" /> Logout
                  </>
                ) : (
                  <>
                    <FaSignInAlt className="w-5 h-5" /> Login
                  </>
                )}
              </a>
            </div>
          </motion.section>
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
                I’m Chogyal, a self-taught tech enthusiast passionate about
                building real-world solutions. I work with Java, React, React
                Native, and Spring Boot to create meaningful apps, especially
                for communities in Bhutan. I’m driven by design, UI/UX, and
                clean architecture, and I’m continuously learning tools like
                Redux, Firebase, and cloud deployment to grow as a well-rounded
                developer.
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
                <span className="inline-block md:text-18 py-1 px-3 mb-4  text-[var(--color-primary)] text-xs font-semibold bg-blue-100 rounded-full">
                  MY PATH
                </span>

                <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
              </div>

              <div className="relative">
                {/* Timeline element */}
                <div className="hidden md:block absolute left-1/2 transform-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-400 to-blue-200"></div>

                {/* Journey items */}
                <div className="space-y-12 md:space-y-16">
                  <div className="relative md:flex items-center ">
                    <img
                      src={brainstormingImg}
                      alt="Brainstorming"
                      className="hidden md:block absolute bottom-[-80] left-0 w-70 h-70  opacity-40"
                    />
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
                    <img
                      src={developmentImg}
                      alt="Brainstorming"
                      className="hidden md:block absolute md:bottom-[-30] lg:bottom-[-90] right-[-20] w-70 h-70  opacity-40"
                    />
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

        {/* Testimonial Section */}
        <section className="py-16 px-6 mt-10 md:px-12 bg-[#1a1a1a] text-white">
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

        {/* Projects Section */}
        <section id="projects" className="mb-5 px-4 sm:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center sm:mb-10 md:mb-20 mt-10">
              <h2 className="text-4xl md:text-5xl font-bold text-subheading mb-4">
                Impactful
                <span className="text-primary">Digital Courses</span>
              </h2>
              <p className="max-w-2xl mx-auto text-gray-500 text-lg">
                Building technology that serves Bhutan's unique needs
              </p>
            </div>

            <div className="">
              <div className="w-full flex  md:flex-row">
                <div className="relative w-[60%] py-10 pl-10">
                  {/* cartification card */}
                  <div
                    className="absolute top-10 left-10 z-1 md:w-[200px] lg:w-[400px] h-[200px] border border-gray-300 rounded-xl -skew-y-10 shadow-sm
                    transition-all duration-500 ease-in-out hover:-translate-y-10 bg-white cursor-pointer"
                    onClick={() =>
                      handleImageSelection("../../public/images/java.png")
                    }
                    style={{
                      WebkitMaskImage:
                        "linear-gradient(to right, black 90%, transparent 80%)",
                      maskImage:
                        "linear-gradient(to right, black 90%, transparent 80%)",
                    }}
                  >
                    <p className="w-full h-[3rem] px-[0.5rem] py-[0.5rem]">
                      Java
                    </p>
                    <img
                      src={java}
                      alt="java"
                      className="w-100 h-fit z-10 group-hover:opacity-100 transition-opacity duration-700"
                    />
                  </div>
                  <div
                    className="absolute top-20 left-25 z-2 md:w-[200px] lg:w-[400px] h-[200px] border border-gray-300 rounded-xl -skew-y-10 shadow-sm
                    transition-all duration-500 ease-in-out hover:-translate-y-10 bg-white cursor-pointer"
                    onClick={() =>
                      handleImageSelection("../../public/images/react.png")
                    }
                    style={{
                      WebkitMaskImage:
                        "linear-gradient(to right, black 90%, transparent 80%)",
                      maskImage:
                        "linear-gradient(to right, black 90%, transparent 80%)",
                    }}
                  >
                    <p className="w-full h-[3rem] px-[0.5rem] py-[0.5rem]">
                      React
                    </p>
                    <img
                      src={java}
                      alt="java"
                      className="w-100 h-fit z-10 group-hover:opacity-100 transition-opacity duration-700"
                    />
                  </div>

                  <div
                    className="absolute top-30 left-40 z-3 md:w-[200px] lg:w-[400px] h-[200px] border border-gray-300 rounded-xl -skew-y-10 shadow-sm
                     transition-all duration-500 ease-in-out hover:-translate-y-10 bg-white hover:z-4 cursor-pointer"
                    onClick={() =>
                      handleImageSelection("../../public/images/ic3.png")
                    }
                    style={{
                      WebkitMaskImage:
                        "linear-gradient(to right, black 90%, transparent 100%)",
                      maskImage:
                        "linear-gradient(to right, black 90%, transparent 100%)",
                    }}
                  >
                    <p className="w-full h-[3rem] px-[0.5rem] py-[0.5rem] text-bold">
                      IC3
                    </p>
                    <img
                      src={ic3}
                      alt="java"
                      className="w-100 h-fit z-10 group-hover:opacity-100 transition-opacity duration-700"
                    />
                  </div>
                </div>
                <div className="w-[40%] h-[20rem]">
                  <div className="hidden md:block text-gray-800">
                    <h2 className="text-2xl font-semibold mb-4">
                      My Certifications
                    </h2>
                    <p>
                      This section highlights a collection of certifications
                      I’ve earned as part of my continuous learning journey.
                      Each certificate represents a step forward in expanding my
                      knowledge, refining my skills, and staying committed to
                      personal and professional growth in the field of
                      technology.
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="relative mb-10 cursor-pointer group hover:text-primary">
                <h2>Java Project</h2>
                <img
                  src={java}
                  alt="java"
                  className="hidden md:block absolute top-0 right-[30%] opacity-0 w-100 h-100 z-10 group-hover:opacity-100 transition-opacity duration-700"
                />
              </div>

              <div className="relative cursor-pointer group hover:text-primary">
                <h2>React Project</h2>
                <img
                  src={react}
                  alt="java"
                  className="hidden md:block absolute top-0 right-[30%] opacity-0 w-100 h-100 z-10 group-hover:opacity-100 transition-opacity duration-700"
                />
              </div> */}
            </div>
          </div>
        </section>

        {/* Certificate modal  */}
        <AnimatePresence>
          {certModalOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                skewY: certModalOpen ? 0 : -10,
                scale: certModalOpen ? 0.9 : 1,
              }}
              exit={{
                opacity: 0,
                y: 0,
                transition: { duration: 0.2, ease: "easeIn" },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              class="fixed inset-0 flex items-center justify-center z-50"
            >
              <div
                ref={certiRef}
                class="relative bg-white rounded-xl shadow-xl w-[90%] md:w-[75%] lg:w-[55%] p-4 md:p-6"
              >
                <div class="flex justify-center items-center">
                  <img
                    src={image}
                    alt="Placeholder"
                    class="rounded-lg max-w-full h-auto"
                  />
                </div>
                <button
                  class="absolute -top-10 flex items-center -right-6 px-2 bg-gray-200 text-black rounded-full text-20 font-normal focus:outline-none cursor-pointer"
                  onClick={() => setCertModalOpen(false)}
                >
                  &times;
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold  text-center">Tech Stack</h2>
            {/* Grid tried  */}

            <div class="lg:hidden mt-5 grid grid-cols-3 sm:grid-cols-4 gap-x-4 gap-y-8 place-items-center p-4">
              {/* <!-- Left tall block --> */}
              <div class="flex flex-col items-center">
                <SiMysql className="text-5xl text-blue-600 mb-2" />
                {/* <p className="text-12">MySQL</p>   */}
              </div>

              <div class="flex flex-col items-center">
                <FaJava className="text-4xl text-red-600 mb-2" />
                <span className="text-14">Java</span>
              </div>

              <div class="flex flex-col items-center">
                <SiTailwindcss className="text-4xl text-cyan-400 mb-2" />
                <span className="text-14">Tailwind CSS</span>
              </div>

              <div class="flex flex-col items-center">
                <SiFirebase className="text-4xl text-yellow-500 mb-2" />
                <span className="text-14">Firebase</span>
              </div>

              <div class="flex flex-col items-center">
                <FaDatabase className="text-4xl text-gray-600 mb-2" />
                <span className="text-14">REST APIs</span>
              </div>

              <div class="flex flex-col items-center">
                <SiSpringboot className="text-4xl text-green-600 mb-2" />
                <span className="text-14">Spring Boot</span>
              </div>

              <div class="flex flex-col items-center">
                <FaReact className="text-4xl text-cyan-600 mb-2" />
                <span className="text-14">React</span>
              </div>
              <div className="flex flex-col items-center">
                <FaReact className="text-4xl text-cyan-600 mb-2" />
                <span className="text-14">React Native</span>
              </div>
            </div>

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

        {/* Get in contact */}
        <GetInTouch />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Landing;
