import { Variants } from "framer-motion";

export const fadeIn: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }, // ✅ ab type error nahi aayega
  },
};
