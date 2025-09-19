import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

interface TitleProps {
  text: string;
  words: string[];
}

export default function Title({ text, words }: TitleProps) {
  return (
    <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
      <LayoutTextFlip text={text} words={words} />
    </motion.div>
  );
}
