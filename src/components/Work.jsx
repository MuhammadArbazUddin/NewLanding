import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import HorizontalContent from "./HorizontalContent";

const HorizontalScroll = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-126%"]);
  return (
    <div>
      <section ref={targetRef} className="relative h-auto lg:h-[200vh]">
        <div className="lg:sticky top-0 lg:flex lg:h-screen items-center lg:overflow-hidden">
          <motion.div
            style={{ x: window.innerWidth >= 1024 ? x : "0%" }}
            className="flex flex-col lg:flex-row gap-4"
          >
            <HorizontalContent />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HorizontalScroll;
