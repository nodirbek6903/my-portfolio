import projectData from "./projectData";

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8">
          Mening Loyihalarim
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.name}
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>

                {/* Texnologiyalar */}
                <h4 className="text-md font-medium text-gray-700 mt-3">Texnologiyalar:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Tillar */}
                <h4 className="text-md font-medium text-gray-700 mt-3">Tillar:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.languages.map((lang, index) => (
                    <span
                      key={index}
                      className="bg-green-500 text-white px-3 py-1 rounded-md text-xs sm:text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                {/* Havolalar */}
                <div className="mt-4 flex flex-wrap justify-between gap-2">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline font-medium text-sm sm:text-base"
                  >
                    🔗 Live Demo
                  </a>
                  <a
                    href={project.githubCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:underline font-medium text-sm sm:text-base"
                  >
                    🔗 GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
