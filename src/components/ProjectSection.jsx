import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Personal Finance Tracker",
    description: "One place Destination for managing your income and expenses at one place",
    image: "/projects/1.png",
    tags: ["MERN Stack", "Supabase", "Clerk"],
    demoUrl: "#",
    githubUrl: "https://github.com/bharathganeshn/Finance__Platform",
  },
  {
    id: 2,
    title: "Skin Disease Detection using CNN",
    description: "Application where you can upload the image and the agent will detect the disease.",
    image: "/projects/2.png",
    tags: ["Python", "CNN", "Tensorflow", "Django", "Matplotlib"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of My Recent Projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              
              {/* <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p> */}
              <div className="flex justify-between items-center mt-5">
                  <div className="flex space-x-3">
                    <a 
                        href={project.demoUrl} 
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                        <ExternalLink size={20}/>
                    </a>
                    <a 
                        href={project.githubUrl} 
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                        <Github size={20}/>
                    </a>
                  </div>
              </div>

              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <a 
                className="cosmic-button w-fit items-center flex mx-auto gap-2"
                target="_blank"
                href="https://github.com/bharathganeshn"
            >
                Check My Github <ArrowRight size={16} />
            </a>

        </div>
      </div>
    </section>
  );
};
