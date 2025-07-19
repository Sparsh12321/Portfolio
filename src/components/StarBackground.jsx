import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const OrbBackground = () => {
  const [orbs, setOrbs] = useState([]);

  useEffect(() => {
    generateOrbs();
    const handleResize = () => generateOrbs();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateOrbs = () => {
    const numberOfOrbs = Math.floor((window.innerWidth * window.innerHeight) / 14000);
    const newOrbs = [];
    for (let i = 0; i < numberOfOrbs; i++) {
      newOrbs.push({
        id: i,
        size: Math.random() * 6 + 6,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.2 + 0.2,
        color: `hsl(${Math.floor(Math.random() * 60 + 180)}, 70%, 80%)`, // Cool tone (aqua/blue/green)
        driftDistance: Math.random() * 10 + 4,
        duration: Math.random() * 20 + 10,
      });
    }
    setOrbs(newOrbs);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="rounded-full"
          initial={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            opacity: orb.opacity,
            scale: 1,
          }}
          animate={{
            left: [
              `${orb.x}%`,
              `${orb.x + (Math.random() - 0.5) * orb.driftDistance}%`,
              `${orb.x}%`,
            ],
            top: [
              `${orb.y}%`,
              `${orb.y + (Math.random() - 0.5) * orb.driftDistance}%`,
              `${orb.y}%`,
            ],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            position: "absolute",
            backgroundColor: orb.color,
            filter: "blur(4px)",
          }}
        />
      ))}
    </div>
  );
};
