import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaJava,
  FaDatabase,
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

const Landing = () => {
  const [loginShow, setLoginShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleLogin = () => {
    setLoginShow(!loginShow);
  };

  const [dark, setDark] = useState(false);

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
      <div className="font-sans text-gray-800 bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white py-5 px-6 md:px-12">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="text-xl font-bold text-cyan-600">Chogyal</div>
            <div
              className={`${
                menuOpen
                  ? "flex flex-col absolute top-16 right-0 w-full bg-custom-background gap-4 px-6"
                  : "hidden"
              } md:flex gap-3`}
            >
              <span clssName="hover:text-cyan-600 transition nav-btn">
                Let's talk
              </span>

              <div>
                <span
                  onClick={toggleLogin}
                  className="hover:text-cyan-600 transition cursor-pointer nav-btn"
                >
                  Login
                </span>
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

        {/* LoginModal */}
        {loginShow && <LoginModal onClose={closeLogin} />}

        {/* hero section  */}
        <section className="h-[70vh] bg-white flex flex-col items-center text-center px-4 pt-30">
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-8xl font-semibold text-custom-white mb-4">
              Tech with Purpose
            </h1>
            <h1 className="text-4xl md:text-8xl font-semibold text-[#b3b3b3] mb-4">
              My Developer Portfolio
            </h1>
          </div>

          <div className="flex gap-4">
            <button
              className="bg-black text-white px-6 py-2 rounded-3xl shadow-md cursor-pointer hover:scale-105
            transition-transform duration300 ease-in-out"
            >
              View My Work
            </button>
            <button
              className="border px-6 py-2 rounded-3xl cursor-pointer hover:scale-105
            transition-transform duration300 ease-in-out"
            >
              Download Resume
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-6 px-6 md:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">My Journey</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                As a self-taught developer from Bhutan, I've always been
                fascinated by how technology can solve real-world problems.
                Without formal training, I've dedicated countless hours to
                mastering programming through online resources, building
                projects, and learning from the global developer community.
              </p>
              <p>
                My passion lies in creating digital solutions that address local
                challenges in Bhutan. Whether it's helping farmers connect with
                markets or improving service accessibility in remote areas, I
                believe technology can make a meaningful difference in our
                communities.
              </p>
              <p>
                What drives me is not just coding, but understanding problems
                deeply and crafting solutions that are simple, effective, and
                culturally relevant to Bhutan's unique context.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-6 md:px-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-cyan-100 flex items-center justify-center">
                  <FaMobile className="text-6xl text-cyan-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Farmers' Market App
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A mobile platform connecting Bhutanese farmers directly with
                    consumers, eliminating middlemen and increasing profits.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-cyan-600 hover:underline">
                      View Details
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                      <FaGithub className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <FaReact className="text-6xl text-blue-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Cleaning Service Platform
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A full-stack solution matching cleaning professionals with
                    clients in urban Bhutan, with scheduling and payment
                    features.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-cyan-600 hover:underline">
                      View Details
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                      <FaGithub className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-green-100 flex items-center justify-center">
                  <SiFirebase className="text-6xl text-green-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Tourism Helper</h3>
                  <p className="text-gray-600 mb-4">
                    An app helping Bhutanese tour operators manage bookings and
                    provide better experiences for visitors.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-cyan-600 hover:underline">
                      View Details
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                      <FaGithub className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <FaReact className="text-4xl text-cyan-600 mb-2" />
                <span>React Native</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <SiSpringboot className="text-4xl text-green-600 mb-2" />
                <span>Spring Boot</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <SiFirebase className="text-4xl text-yellow-500 mb-2" />
                <span>Firebase</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <SiMysql className="text-4xl text-blue-600 mb-2" />
                <span>MySQL</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <FaJava className="text-4xl text-red-600 mb-2" />
                <span>Java</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <SiTailwindcss className="text-4xl text-cyan-400 mb-2" />
                <span>Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <FaDatabase className="text-4xl text-gray-600 mb-2" />
                <span>REST APIs</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <svg className="w-10 h-10 mb-2" viewBox="0 0 128 128">
                  <path
                    fill="#61DAFB"
                    d="M64.004 25.602c-7.4 0-14.195 2.5-19.598 6.7-1.2 1-2.8 1-4-.2-1-1.2-1-2.8.2-4 6.4-5.3 14.5-8.1 23.4-8.1 7.4 0 14.195 2.5 19.598 6.7 1.2 1 1.4 2.8.2 4-1 1.2-2.8 1.4-4 .2-5.3-4.2-12-6.7-19.4-6.7zM90.004 42.102c1.2 0 2.4-.5 3.2-1.4 1.2-1.2 1.2-3 0-4.2-5.7-5.7-13.5-8.9-22.2-8.9-8.7 0-16.5 3.2-22.2 8.9-1.2 1.2-1.2 3 0 4.2 1.2 1.2 3 1.2 4.2 0 4.9-4.9 11.7-7.7 18-7.7 6.3 0 13.1 2.8 18 7.7.8.9 2 1.4 3.2 1.4z"
                  ></path>
                  <path
                    fill="#61DAFB"
                    d="M103.404 55.902c1.2 0 2.4-.5 3.2-1.4 1.2-1.2 1.2-3 0-4.2-7.3-7.3-17.5-11.4-28.6-11.4-11.1 0-21.3 4.1-28.6 11.4-1.2 1.2-1.2 3 0 4.2 1.2 1.2 3 1.2 4.2 0 6.5-6.5 15.6-10.2 24.4-10.2 8.8 0 17.9 3.7 24.4 10.2.8.9 2 1.4 3.2 1.4z"
                  ></path>
                  <path
                    fill="#61DAFB"
                    d="M92.104 69.702c1.2 0 2.4-.5 3.2-1.4 1.2-1.2 1.2-3 0-4.2-4.1-4.1-9.8-6.4-15.9-6.4-6.1 0-11.8 2.3-15.9 6.4-1.2 1.2-1.2 3 0 4.2 1.2 1.2 3 1.2 4.2 0 3.1-3.1 7.5-4.9 11.7-4.9 4.2 0 8.6 1.8 11.7 4.9.8.9 2 1.4 3.2 1.4z"
                  ></path>
                  <path
                    fill="#61DAFB"
                    d="M64.004 81.002c3.9 0 7-3.1 7-7s-3.1-7-7-7-7 3.1-7 7 3.1 7 7 7z"
                  ></path>
                </svg>
                <span>Full Stack</span>
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
        <footer className="bg-gray-800 text-white py-8 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <div className="text-xl font-bold text-cyan-400">Chogyal</div>
                <div className="text-gray-400 mt-1">
                  Self-taught tech enthusiast & developer
                </div>
              </div>
              <div className="flex space-x-6">
                <a href="#about" className="hover:text-cyan-400 transition">
                  About
                </a>
                <a href="#projects" className="hover:text-cyan-400 transition">
                  Projects
                </a>
                <a href="#skills" className="hover:text-cyan-400 transition">
                  Skills
                </a>
                <a href="#contact" className="hover:text-cyan-400 transition">
                  Contact
                </a>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
              <p>© {new Date().getFullYear()} Chogyal. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Landing;
