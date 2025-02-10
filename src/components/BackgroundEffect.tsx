import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const BackgroundEffect = ({ pushPower }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>();
  const currentPushPower = useRef(pushPower);
  useEffect(() => {
    currentPushPower.current = pushPower; // Обновляем значение при изменении пропса
  }, [pushPower]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const particleColors = [
      'rgba(141, 130, 180, 0.6)',
      'rgba(211, 228, 253, 0.6)',
      'rgba(243, 190, 163, 0.6)',
      'rgba(133, 113, 115, 0.6)',
      'rgba(233, 255, 197, 0.6)',
      'rgba(255, 186, 238, 0.6)',
    ];

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
    }> = [];

    const createParticles = () => {
      const particleCount = 500;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (5 - 0.5) + 0.5,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.4 + 0.2,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
        });
      }
    };

    createParticles();

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        mousePosition.current = {
          x: e.clientX,
          y: e.clientY,
        };
      }
    };

    let time = 0;
    const updateAutonomousPosition = () => {
      pushPower *= -1; // Изменяем направление 
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const scaleX = 125; // Масштаб по оси X
      const scaleY = 50; // Масштаб по оси Y
  
      mousePosition.current = {
        x: centerX + scaleX * Math.sin(time) * Math.cos(time),
        y: centerY + scaleY * Math.sin(time),
      };
      
      time += 0.005; // Увеличиваем время для анимации
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (isMobile) {
        updateAutonomousPosition();
      }

      const gradient = ctx.createRadialGradient(
        mousePosition.current.x,
        mousePosition.current.y,
        0,
        mousePosition.current.x,
        mousePosition.current.y,
        80
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.2)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        const dx = mousePosition.current.x - particle.x;
        const dy = mousePosition.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 50) {
          const force = (80 - distance) / currentPushPower.current;; // Используем переданное значение pushPower
          particle.speedX += dx * force;
          particle.speedY += dy * force;

          // Уменьшение скорости со временем
          particle.speedX *= (0.69 - (particle.size / 100)); 
          particle.speedY *= (0.69 - (particle.size / 100)); 
        }

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();
    
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
    
}, [isMobile, pushPower]);

return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
);
};

export default BackgroundEffect;
