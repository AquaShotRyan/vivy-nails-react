import React from "react";
import { motion } from "framer-motion";

function Slide({ children, direction }) {
	let x = 0;
	let y = 25;

	if (direction === "left"){
		x = -25;
		y = 0;
	}else if (direction === "right"){
		x = 25;
		y = 0;
	}
  return (
    <motion.div
      className="slide"
      initial={{
        // if odd index card,slide from right instead of left
        y: y,
				x: x,
				opacity:0.2
      }}
      whileInView={{
        y: 0, // Slide in to its original position
				x: 0,
				opacity:1,
        transition: {
          duration: 0.8 // Animation duration
        }
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default Slide;
