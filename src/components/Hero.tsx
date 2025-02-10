import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BackgroundEffect from "./BackgroundEffect";
import { useState } from "react";
import { useIsMobile } from '@/hooks/use-mobile'; 
const Hero = () => {
  const [pushPower, setPushPower] = useState(1000); 

  const isMobile = useIsMobile(); 

  const togglePushPower = () => {
    setPushPower((prev) => (prev === 1000 ? -1000 : 1000));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-[#221F26] relative overflow-hidden">
      <BackgroundEffect pushPower={pushPower} /> {/* Передаем pushPower */}
      <div className="container mx-auto px-4 py-32 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="max-w-3xl md:w-1/2 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Привет, я <span className="text-accent">Киселев Константин</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack разработчик, специализирующейся на Web проектах. <br></br>
            Создаю красивые веб-приложения с использованием современных технологий.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link to="/projects" className="text-xl">
                Мои работы
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-primary text-white border-white hover:bg-white/10">
              <Link to="/contact" className="text-xl">Контакты</Link>
            </Button>
          </div>
        </div>
      </div>

      {!isMobile && (
      <Button 
        onClick={togglePushPower} 
        variant="outline"
        className="fixed bottom-4 right-4 bg-primary text-white border-white hover:bg-white/10"
      >
        Переключить эффект
      </Button>
       )}
    </div>
  );
};

export default Hero;
