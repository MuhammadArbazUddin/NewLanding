import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WorkHead = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.4], [60, 4]);
  const y = useTransform(scrollYProgress, [0.5, 1], [0, -100]);

  return (
    <>
      <div className="h-[40vh] ">
        <motion.div
          style={{
            scale,
            y,
            position: "sticky",
            top: "50%",
            transformOrigin: "center",
            overflow: "hidden", // Ensure no overflow
          }}
          className="flex h-[60vh] w-full items-center justify-center"
        >
          <h1 className="text-4xl">Work</h1>
        </motion.div>
      </div>
    </>
  );
};

export default WorkHead;
