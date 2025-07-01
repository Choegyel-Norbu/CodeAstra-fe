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
import HeroLG from "../components/hero/HeroLG";
import HeroSM from "../components/hero/HeroSM";
import RatingWidget from "../components/RatingWidget";

const Landing = () => {
  const { loggedIn, logout } = useAuth();
  const [loginShow, setLoginShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoogedIn = useSelector((state) => state.auth.loggedIn);
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [image, setImage] = useState("");
  const certiRef = useRef(null);
  const [rating, setRating] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const contactMeRef = useRef(null);
  const homeRef = useRef(null);
  const [hasRated, setHasRated] = useState(
    localStorage.getItem("hasRated") === "true"
  );

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setRating(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!dismissed) return;

    const interval = setInterval(() => {
      setRating(true);
    }, 10 * 60 * 1000); // 10 minutes in milliseconds

    return () => clearInterval(interval);
  }, [dismissed]);

  const handleDismiss = () => {
    setRating(false);
    setDismissed(true);
  };

  const handleSubmit = () => {
    // Your submit logic here
    setRating(false);
    setDismissed(false); // Stop showing if submitted
  };

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
    setMenuOpen((prev) => !prev);
  };

  const closeLogin = () => {
    setLoginShow(false);
  };
  const menuButtonRef = useRef(null);
  const sideBarRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (certiRef.current && !certiRef.current.contains(event.target)) {
        setCertModalOpen(false);
      }
      if (
        sideBarRef.current &&
        !sideBarRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
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
      <div className=" relative bg-white text-black dark:text-white">
        {/* Navigation */}
        <div className="fixed w-full z-20 bg-white md:bg-[#1a1a1a]">
          <nav className="relative py-2 px-2 md:px-8 ">
            <div className="mx-auto flex justify-between items-center">
              <div className="flex flex-row justify-center items-center">
                {/* <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG4T2eeT56DWkwb5nJE1avnleYrgQBQTKmQsiXkQavEnsEpakMNMALnFE&s"
                  alt="Logo"
                  className="w-16 h-16"
                /> */}
                <div className="text-20 font-bold text-black-600 md:text-white font-[cursive]">
                  Chogyal
                </div>
              </div>
              <div className="flex flex-row gap-12 hidden md:flex">
                <a
                  href="/"
                  className="text-ms font-light text-14 text-[#333333] md:text-white cursor-pointer hover:opacity-80 transition-opacity"
                >
                  Home
                </a>

                <div className="relative group">
                  <a
                    href="#"
                    className="text-ms font-small text-14 text-[#333333] cursor-pointer md:text-white hover:opacity-80 transition-opacity"
                  >
                    Projects
                  </a>
                  <div className="absolute bottom-10 left-0 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md mt-1 min-w-[180px] z-50">
                    <a
                      href="#java"
                      className="px-4 text-14 py-2 hover:bg-gray-100 text-[#333333]"
                    >
                      Java Projects
                    </a>
                    <a
                      href="#react"
                      className="px-4 text-14 py-2 hover:bg-gray-100 text-[#333333]"
                    >
                      React Projects
                    </a>
                    <a
                      href="#fullstack"
                      className="px-4 py-2 text-14 hover:bg-gray-100 text-[#333333]"
                    >
                      Fullstack Projects
                    </a>
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    contactMeRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="text-ms font-small text-14 text-[#333333] cursor-pointer md:text-white hover:opacity-80 transition-opacity"
                >
                  Contact
                </a>

                <a
                  href="#about"
                  className="text-ms font-small text-14 text-[#333333] cursor-pointer md:text-white hover:opacity-80 transition-opacity"
                >
                  About
                </a>
              </div>
              <div className="hidden md:block  w-fit gap-4 px-6">
                <div>
                  {!loggedIn && (
                    <span
                      onClick={toggleLogin}
                      className=" text-primary transition cursor-pointer nav-btn md:border-white"
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
              <button
                ref={menuButtonRef}
                className="md:hidden menu-toggle-button"
                onClick={toggleMenu}
              >
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

          <motion.div
            ref={sideBarRef}
            variants={MenuSlideIn}
            initial="offscreen"
            animate={menuOpen ? "onscreen" : "exit"}
            exit="exit"
            className="fixed top-18 bg-white left-0  h-screen w-[70%] sm:w-[60%] md:w-[40%] md:hidden z-50 overflow-y-auto shadow-lg"
          >
            <nav className="border-b-1 border-[#cccccc] pb-5 py-5">
              <div className=" flex flex-col gap-y-2">
                <a
                  href="#"
                  onClick={() => {
                    homeRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                    setMenuOpen(false);
                  }}
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
                  onClick={() => {
                    contactMeRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                    setMenuOpen(false);
                  }}
                >
                  <FaPhone className="w-5 h-5" /> Contact
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
                    <FaSignInAlt className="w-5 h-5" />{" "}
                    <span>
                      {!loggedIn && (
                        <span
                          onClick={toggleLogin}
                          className="hover:text-cyan-600 transition cursor-pointer"
                        >
                          Login
                        </span>
                      )}
                      {loggedIn && (
                        <span
                          onClick={() => logout()}
                          className="text-primary transition cursor-pointer"
                        >
                          LogOut
                        </span>
                      )}
                    </span>
                  </>
                )}
              </a>
            </div>
          </motion.div>
        </div>

        {/* LoginModal */}
        {loginShow && <LoginModal onClose={closeLogin} />}

        {/* hero section  */}
        {/* {isMobile ? <HeroSM /> : <HeroLG />} */}
        <HeroLG
          ref={homeRef}
          onScroll={() =>
            contactMeRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />

        {/* About Section */}
        <motion.section
          id="about"
          className="py-14 px-4 sm:px-8 bg-white from-gray-50 to-white"
          variants={fadeInUp}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.2 }} // 30% visible before triggering
        >
          <section
            id="about"
            className=" sm:px-8 bg-white from-gray-50 to-white"
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
                      <p className="text-gray-700 text-14 leading-relaxed">
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
                      <p className="text-gray-700 text-14 leading-relaxed">
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

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            offscreen: {
              opacity: 0,
            },
            onscreen: {
              opacity: 1,
              transition: {
                ease: "easeInOut",
                duration: 0.6,
              },
            },
          }}
        >
          <section className="py-16 px-6 mt-10 md:px-12 bg-[#1a1a1a] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-xl italic mb-6">
                " Through thoughtful design and deep community insight, I
                delivered a platform that has empowered local farmers to connect
                directly with buyers and grow their livelihoods sustainably. "
              </blockquote>
              <div className="font-medium">— Chogyal, Bhutan</div>
            </div>
          </section>
        </motion.div>

        {/* Projects Section */}
        <section id="projects" className="mb-5 px-4 sm:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center sm:mb-10 md:mb-20 mt-10">
              <h2 className="text-4xl md:text-5xl font-bold text-subheading mb-4">
                Impactful
                <span className="text-primary">Digital Courses</span>
              </h2>
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
                <div className="w-[40%] h-[20rem] flex flex-col justify-center">
                  <div className="hidden md:block text-gray-800">
                    <h2 className="text-2xl font-semibold mb-4">
                      My Certifications
                    </h2>
                    <p className="text-14">
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
        <section id="skills" className="pt-7 lg:pt-17 w-full mx-auto">
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

          <div className="hidden lg:block bg-blue-300 relative h-[10rem] w-fit m-auto py-10 perspective-[1000px] flex items-center justify-center">
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
        </section>

        {/* Get in contact */}
        <GetInTouch ref={contactMeRef} />

        {/* Footer */}
        <Footer />
        {/* <button onClick={() => localStorage.removeItem("hasRated")}>
          Remove rated
        </button> */}
        <AnimatePresence>
          {rating && !hasRated && (
            <motion.div
              className="fixed bottom-0 z-20 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
              <RatingWidget onClose={handleDismiss} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Landing;
