import React, { useEffect, useState } from 'react';

const skills = {
  frontend: [
    { name: "Vue.js", level: 80 },
    { name: "React", level: 70 },
    { name: "HTML/CSS", level: 90 },
    { name: "Tailwind", level: 60 },
    { name: "Angular", level: 60 },
  ],
  backend: [
    { name: "Python", level: 95 },
    { name: "SQLite", level: 80 },
    { name: "Flask", level: 75 },
    { name: "Node.js", level: 85 },
    { name: "C#", level: 70 },
  ],
  tools: [
    { name: "GitHub", level: 90 },
    { name: "Visual Studio Code", level: 95 },
    { name: "Docker", level: 60 },
    { name: "Linux", level: 75 },
    { name: "Visual Studio", level: 90 }
  ],
};

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    let start = 10;
    const end = level;
    const duration = 500; // продолжительность анимации в миллисекундах
    const incrementTime = 5;
    
    const timer = setInterval(() => {
      if (start < end) {
        start++;
        setAnimatedLevel(start);
      } else {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-200">{name}</span>
        <span className="text-gray-200">{animatedLevel}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-accent h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${animatedLevel}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-primary to-[#221F26]">
      <div className="container mx-auto px-4 py-16 animate-fadeIn">
        <h1 className="text-6xl font-bold text-accent mb-12">Навыки</h1>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-white">Frontend</h2>
            {skills.frontend.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-white">Backend</h2>
            {skills.backend.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-white">Инструменты и технологии</h2>
            {skills.tools.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
