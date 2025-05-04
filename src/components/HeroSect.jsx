import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroIllustration from "../assets/images/Hero-illustrations.png";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import scrollIcon from "../assets/icons/scroll-animation.svg";

export const HeroSect = () => {
  const [word, setWord] = useState("Developer");
  const words = ["Developer", "Designer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setWord((prev) => (prev === words[0] ? words[1] : words[0]));
    }, 3000);

    return () => clearInterval(interval);
  });

  // Function to render multiple random sparkles
  const renderStars = (count = 30) =>
    Array.from({ length: count }).map((_, index) => {
      const size = Math.random() * 5 + 3; // 1-3px
      const top = Math.random() * 150;
      const left = Math.random() * 150;
      const duration = Math.random() * 5 + 7;

      return (
        <motion.div
          key={index}
          className="bg-white rounded-full absolute opacity-25"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}vh`,
            left: `${left}vw`,
          }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      );
    });

  return (
    <>
      <div id="Home" className="relative overflow-hidden">
        {/* Sparkle Stars (Full Screen) */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {renderStars(40)}
        </div>

        <div className="flex justify-center">
          <div className="hero-section w-full h-[80vh] flex justify-between relative max-w-[60rem] z-20">
            <div className="heroText h-full w-full z-30 flex flex-col md:justify-center">
              <div className="flex flex-col text-white pl-5 tracking-wide md:gap-1">
                <span className="font-semibold text-2xl md:text-4xl">
                  Hi! I&apos;m Vritika,
                </span>
                <span className="font-semibold text-2xl md:text-4xl flex">
                  A Web&nbsp;
                  <motion.span
                    key={word}
                    initial={{ width: 0 }}
                    whileInView={{ width: "fit-content" }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="bg-fontBlue text-transparent bg-clip-text overflow-hidden mr-1 will-change-transform will-change-opacity"
                  >
                    {word}
                  </motion.span>
                  <motion.span
                    className="h-full w-[1px] bg-fontBlue whileInView-pulse"
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  ></motion.span>
                </span>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="text-[#989898] font-normal text-[10px] md:text-sm md:w-[50%]"
                >
                  Combining development skills with creative design, <br />I
                  transform concepts into dynamic, user-centered <br /> web
                  solutions.
                </motion.span>
              </div>

              <div className="buttons max-sm:absolute bottom-10 w-full flex max-sm:items-center max-md:flex-col text-white gap-3 text-[10px] tracking-widest pl-4 md:pl-5 mt-5">
                <motion.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  href="#Projects"
                >
                  <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-color1 hover:bg-color1Hover w-[14rem] md:w-[12rem] rounded-3xl uppercase text-center font-semibold cursor-pointer py-2"
                  >
                    Explore Projects
                  </motion.button>
                </motion.a>
                <motion.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  href="#Contact"
                >
                  <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-color2 border-2 border-color2 hover:bg-color2 hover:text-color3 rounded-3xl w-[14rem] md:w-[12rem] uppercase text-center font-semibold cursor-pointer py-2"
                  >
                    Get in Touch
                  </motion.button>
                </motion.a>
              </div>

              <div className="social-icons w-20 flex justify-center items-center gap-3 h-10 mt-5 ml-5">
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  href="https://www.linkedin.com/in/vritikadadhich/"
                  target="_blank"
                >
                  <img
                    className="w-7 cursor-pointer hover:scale-125 duration-100 transition-all"
                    src={linkedin}
                    alt=""
                  />
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  href="https://github.com/vritika23"
                  target="_blank"
                >
                  <img
                    className="w-9 cursor-pointer hover:scale-125 transition-all"
                    src={github}
                    alt=""
                  />
                </motion.a>
              </div>
            </div>

            <div className="heroIllustration flex flex-col items-center w-full h-full absolute">
           
              <motion.div
                className="absolute rounded-full border border-blue-400 opacity-30"
                style={{
                  width: "30rem",
                  height: "30rem",
                  top: "2rem",
                  right: "2rem",
                }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div
                className="absolute rounded-full border border-pink-400 opacity-20"
                style={{
                  width: "30rem",
                  height: "30rem",
                  top: "-3rem",
                  right: "-6rem",
                }}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              {/* Hero Image */}
              <motion.img
  initial={{ opacity: 0, scale: 0.3 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="min-w-[20.5rem] max-sm:w-[20rem] absolute top-[0.5rem] right-[0.2rem] md:w-[20rem] will-change-transform will-change-opacity"
  src={heroIllustration}
  alt=""
/>

              {/* Scroll Icon */}
              <div className="absolute bottom-40 md:bottom-5">
                <div className="scroll-icon">
                  <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-5"
                    src={scrollIcon}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};