"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ParallaxImage({ src, alt, className = "" }: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }}>
        <Image src={src} alt={alt} fill className="object-cover" />
      </motion.div>
    </div>
  );
}
