import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

export default function FadeInView ({ children }){
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          variants={fadeInVariant}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {children}
        </motion.div>
      )}
    </InView>
  );
};

