import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import { motion } from "framer-motion";
import { fadeInUp, fadeIn } from "@/animations/commonAnimations";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <motion.div
        className="text-center"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="mb-4 text-6xl font-bold font-mono"
          variants={fadeInUp}
        >
          404
        </motion.h1>

        <motion.p
          className="mb-4 text-xl text-muted-foreground"
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
        >
          Oops! Page not found
        </motion.p>

        <motion.a
          href="/"
          className="text-primary underline hover:text-primary/90 font-mono"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          Return to Home
        </motion.a>
      </motion.div>
    </div>
  );
};

export default NotFound;
