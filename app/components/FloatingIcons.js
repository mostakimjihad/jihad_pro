"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingIcons = () => {
  const ICONS = ["/linux.png", "/docker.png", "/python.png", "/api.png", "/artificial-intelligence.png", "/nodejs.png", "/postgre.png", "/mysql.png"];
  const NUM_ICONS = 1; // Number of icons per type
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const usedPositions = new Set();

    const getUniquePosition = () => {
      let top, left, posKey;
      let attempts = 0;

      do {
        top = Math.random() * 100;
        left = Math.random() * 100;
        posKey = `${Math.round(top)}-${Math.round(left)}`;
        attempts++;

        if (attempts > 50) break; // Prevent infinite loops
      } while (
        usedPositions.has(posKey) || // Ensure uniqueness
        (top > 30 && top < 70 && left > 30 && left < 70) // Avoid center
      );

      usedPositions.add(posKey);
      return { top, left };
    };

    setPositions(
      ICONS.flatMap((iconSrc) =>
        Array.from({ length: NUM_ICONS }).map(() => ({
          src: iconSrc,
          ...getUniquePosition(),
        }))
      )
    );
  }, []);

  return (
    <>
      {positions.map((icon, i) => (
        <motion.img
          key={i}
          src={icon.src}
          alt="Tech Icon"
          className="absolute w-20 h-20 opacity-90"
          style={{
            top: `${icon.top}%`,
            left: `${icon.left}%`,
          }}
          animate={{
            y: [0, 20, -20, 0],
            x: [0, -10, 10, 0],
          }}
          transition={{
            duration: 5 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

export default FloatingIcons;
