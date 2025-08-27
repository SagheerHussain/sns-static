import React from "react";
import { motion } from "framer-motion";

function ColourfulText({ text }: { text: string }) {
  const colors = [
    "rgb(0, 173, 206)",  // Light Blue
    "rgb(0, 173, 206)",  // Sky Blue
    "rgb(0, 173, 206)",  // Cornflower Blue
    "rgb(0, 173, 206)",   // Steel Blue
    "rgb(0, 173, 206)",   // Dodger Blue
    "rgb(0, 173, 206)",    // Medium Blue
    "rgb(0, 173, 206)",    // Royal Blue
    "rgb(0, 173, 206)",     // Darker Royal Blue
    "rgb(0, 173, 206)",     // Navy Blue
    "rgb(0, 173, 206)",      // Deep Dark Blue
];
  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}

export default ColourfulText