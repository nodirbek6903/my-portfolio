import { motion } from "framer-motion";
import userData from "../../data/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
} from "react-icons/si";
import { useState } from "react";

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skills = [
    { icon: SiHtml5, name: "HTML5" },
  { icon: SiCss3, name: "CSS3" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiReact, name: "React" },
  { icon: SiRedux, name: "Redux" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiBootstrap, name: "Bootstrap" },
  { icon: SiNodedotjs, name: "Node.js" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 py-12 space-y-16">
      {/* Profil Ma'lumotlari */}
      <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-400">{userData.fullName}</h1>
          <p className="text-xl sm:text-2xl mt-3 text-gray-300">{userData.profession}</p>
          <a href="/projects" className="mt-5 inline-flex items-center gap-2 text-lg sm:text-xl text-blue-400 hover:text-blue-500 font-semibold">
            Show Projects <FaArrowRight />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-sm sm:max-w-md shadow-xl rounded-lg overflow-hidden border border-gray-700"
        >
          <Slider {...settings}>
            {userData.myImage.map((img, index) => (
              <div key={index} className="w-full">
                <img src={img} alt="Profile" className="w-full h-72 sm:h-96 object-cover rounded-lg" />
              </div>
            ))}
          </Slider>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400">{`Mening Ko'nikmalarim`}</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-4xl sm:text-5xl relative">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <skill.icon className="hover:scale-110 cursor-pointer transition-transform duration-300" />
              {hoveredSkill === index && (
                <span className="absolute top-full mt-2 px-2 py-1 text-sm text-gray-900 bg-white rounded shadow-lg">
                  {skill.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400">Mening Loyihalarim</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {userData.projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-52 sm:h-60 object-cover rounded-md" />
              <h3 className="text-lg sm:text-xl font-bold text-blue-400 mt-4">{project.title}</h3>
              <p className="text-gray-300 mt-2 text-sm sm:text-base">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Batafsil</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400">{`Bog'lanish`}</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-5 text-3xl sm:text-4xl">
          {[
            { icon: FaGithub, link: userData.contact.github },
            { icon: FaLinkedin, link: userData.contact.linkedin },
            { icon: FaTelegram, link: userData.contact.telegram },
            { icon: FaEnvelope, link: `mailto:${userData.contact.email}` },
            { icon: FaPhoneAlt, link: `tel:${userData.contact.phone}` },
          ].map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-transform hover:scale-110">
              <item.icon />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;