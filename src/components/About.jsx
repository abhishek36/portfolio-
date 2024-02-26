import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { textVariant, fadeIn } from "../util/motion";
import SectionWrapper from "./hoc";
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h1 className="text-white text-[20px] font-bold text-center">
            {title}
          </h1>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>ABOUT ME</p>
        <h1
          className={`${styles.sectionHeadText} hover:text-secondary transition-colors duration-150 ease-in cursor-pointer`}
        >
          A{" "}
          <span
            className={`${styles.heroHeadText} text-[#915eff]`}
            style={{ color: "#915eff" }}
          >
            {" "}
            Front-end Web
          </span>{" "}
          Developer.
        </h1>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        My name is Abhishek a dedicated front-end developer passionate about
        turning innovative ideas into captivating digital experiences. With a
        blend of creativity and technical expertise, I specialize in crafting
        user interfaces that not only look stunning but also deliver seamless
        and intuitive interactions.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Embarking on a journey in the world of web development I've had the
        privilege of working on diverse projects that have shaped my skills and
        perspectives. From dynamic single-page applications to responsive
        e-commerce platforms, I've navigated the evolving landscape of front-end
        development with enthusiasm. : )
      </motion.p>
      {/* <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
