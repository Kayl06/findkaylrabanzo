import { motion } from "framer-motion";

export default function BotCornerLinks({ renderedSocialLinks, email }) {
  return (
    <div className="hidden md:block">
      <motion.div
        initial={{ y: 500 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.1,
          delay: 1.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="__social_links fixed left-[20px] lg:left-[40px] right-auto bottom-0 after:content-[''] after:h-[90px] z-10 after:mx-auto after:w-[1px] after:bg-white after:block"
      >
        <ul className="flex flex-col gap-[15px] text-gray-400">
          {renderedSocialLinks}
        </ul>
      </motion.div>

      <motion.div initial={{ y: 500 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1,
          delay: 1.1,
          ease: [0, 0.71, 0.2, 1.01],
        }} className="__mail fixed right-[40px] left-auto bottom-0 after:content-[''] after:h-[90px] z-10 after:mx-auto after:w-[1px] after:bg-white after:block">
        <div className="flex flex-col items-center">
          <a
            href="mailto:frabanzoo@gmail.com"
            className="font-thin my-[20px] p-[10px] tracking-[.2em] text-[12px]"
            style={{ writingMode: "vertical-rl" }}
          >
            {email}
          </a>
        </div>
      </motion.div>
    </div>
  );
}
