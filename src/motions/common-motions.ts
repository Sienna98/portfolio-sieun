export const commonMotion = {
  start: {
    opacity: 0,
    translateY: 20,
  },
  end: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
};

export const staggerMotion = {
  start: {
    opacity: 0,
    translateY: 20,
  },
  end: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
};
