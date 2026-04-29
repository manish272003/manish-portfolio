"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { gridItems } from "@/data";
import { motion } from "framer-motion";

export const Grid = () => {
  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0, filter: "blur(12px)", y: 30 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <BentoGrid>
          {gridItems.map((gridItem) => (
            <BentoGridItem key={gridItem.id} {...gridItem} />
          ))}
        </BentoGrid>
      </motion.div>
    </section>
  );
};
