import React, { ElementType, ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

interface IAnimatedWrapperProps extends MotionProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  once?: boolean;
}

const AnimatedWrapper: React.FC<IAnimatedWrapperProps> = ({
  children,
  initial = { opacity: 0, y: 10 },
  whileInView = { opacity: 1, y: 0 },
  transition={ duration: 0.6, delay: 0.2 },
  className = "",
  as = "section",
  viewport = { once: true, amount: 0.2 },
  once,
  ...rest
}) => {
  const MotionTag = motion(as);

  return (
    <MotionTag
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={{ once: once ?? true, amount: 0.2 }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default AnimatedWrapper;
