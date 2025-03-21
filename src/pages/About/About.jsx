import aboutData from "./aboutData";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side - Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={aboutData.myImage}
              alt={aboutData.name}
              className="rounded-lg shadow-lg w-64 h-64 object-cover"
            />
          </div>

          {/* Right side - Text */}
          <div className="w-full md:w-2/3 mt-8 md:mt-0 md:pl-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {aboutData.name}
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              <strong>Kasbi:</strong> {aboutData.profession}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <strong>Tajriba:</strong> {aboutData.experience}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <strong>Ta’lim:</strong> {aboutData.education}
            </p>
            <p className="text-lg text-gray-600 mb-4">{aboutData.description}</p>

            {/* Technologies */}
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Texnologiyalar:
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {aboutData.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Languages */}
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Tillar:
            </h3>
            <p className="text-gray-600">{aboutData.languages.join(", ")}</p>

            {/* Hobbies */}
            <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">
              Qiziqishlar:
            </h3>
            <p className="text-gray-600">{aboutData.hobbies.join(", ")}</p>

            {/* Social Links */}
            <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">
              Mening ijtimoiy tarmoqlarim:
            </h3>
            <div className="flex gap-4">
              {aboutData.socialLink.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
