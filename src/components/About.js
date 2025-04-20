import React from 'react';
import CountUp from 'react-countup';
import { FaLinkedin, FaXing } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useTranslation } from 'react-i18next';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  const {t} = useTranslation();
  return <section id='about' className='' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
      lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* img */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
        </motion.div>
        {/* text */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'>
          <h2 className='h2 text-accent'>{t("aboutmetitle")}</h2>
          <h3 className='h3 mb-4'>{t("aboutmesubtitle")}</h3>
          <p className='mb-6'>{t("aboutmepar")}</p>
          {/* stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ?
                  <CountUp start={0} end={3} duration={8} />
                  :
                  null
                }+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
              {t("aboutme1a")} <br />
              {t("aboutme1b")}
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ?
                  <CountUp start={0} end={6} duration={6} />
                  :
                  null
                }+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
              {t("aboutme2a")} <br />
              {t("aboutme2b")}
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ?
                  <CountUp start={0} end={80} duration={3} />
                  :
                  null
                }+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
              {t("aboutme3a")} <br />
              {t("aboutme3b")}
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ?
                  <CountUp start={0} end={2} duration={10} />
                  :
                  null
                }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
              {t("aboutme4a")} <br />
              {t("aboutme4b")}
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>{t("contacticon")}</button>
            <a className="text-[40px]" href="https://www.linkedin.com/in/emanuel-tofan-723207162/">
              <FaLinkedin />
            </a>
            <a className="text-[40px]" href="mailto:tofan.emanuel99@gmail.com">
              <SiGmail />
            </a>
            <a className="text-[40px]" href="https://www.xing.com/profile/Tofan_Emanuel/">
              <FaXing />
            </a>
          </div>
        </motion.div>
        
      </div>
    </div>
  </section>;
};

export default About;
