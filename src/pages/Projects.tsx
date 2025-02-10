import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Web3 Кошелёк",
    description: "Приложение для взаимодействия с криптовалютой в Web3 пространстве",
    image: "../../wallet.png",
    github: "https://github.com/OCW-dev/OCW",
    live: "work",
    tags: ["Vue.js", "Node.js", "SQLite"],
  },
  {
    title: "Anonify",
    description: "Современный метод обхода блокировок",
    image: "../../anonify.svg",
    github: "https://github.com/OCW-dev",
    live: "https://t.me/anonify_ocw_bot",
    tags: ["React", "JavaScript", "SQLite"],
  },
  {
    title: "Сайт визитка",
    description: "Современный сайт-визитка (вроде как вы сейчас на нём)",
    image: "../../portfolio.png",
    github: "https://github.com/Pel1x1",
    live: "",
    tags: ["React", "Tailwind", "Vite"],
  },
  {
    title: "Магазин",
    description: "Один из первых проектов сайт-магазин, сделан для себя",
    image: "../../knit-market.png",
    github: "https://github.com/Pel1x1/KnitMarket",
    live: "null",
    tags: ["HTML", "Flask", "SQLite"],
  },
];

const Projects = () => {
  
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-primary to-[#221F26]">
      <div className="container mx-auto px-4 py-16 animate-fadeIn">
        <h1 className="text-6xl font-bold text-accent mb-12">Мои проекты</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Код
                    </a>
                  </Button>
                  <Button size="sm" asChild className="bg-primary">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4 " />
                      Демонстарация
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;