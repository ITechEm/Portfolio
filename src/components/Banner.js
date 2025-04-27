import React from 'react';
// images
import Image from '../assets/avatar.png'
// Icons
import { FaGithub, FaLinkedin, FaXing } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
// Type animation
import { TypeAnimation } from 'react-type-animation'
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants'
import { useTranslation } from 'react-i18next';

const Banner = () => {
const {t} = useTranslation();
  return <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/* text */}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>Emanuel <span>Tofan</span></motion.h1>
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='mb-6 text-[36px] lg:text-[60px] font-semibold uppercase leading-[1] my-2'>
            <span className='mr-4 text-white'>{t("iama")}</span>
            <TypeAnimation
              sequence={['Manual Tester', 2000, 'QA Mentor', 2000, 'Software Tester', 2000, 'QA Mentor', 2000,]}
              speed={50}
              className='text-accent'
              repeat={Infinity}
              wrapper='span'
            />
          </motion.div>
          <motion.p
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='mb-8 max-w-lg mx-auto lg:mx-0'>
            {t("heropar")}
            
          </motion.p>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex max-w-max gap-x-6 items-center mb-20 mx-auto lg:mx-0'>
            <a className='btn btn-lg flex items-center justify-center text-center'>{t("contacticon")}</a>
            <a className="text-[30px]" href="https://www.linkedin.com/in/emanuel-tofan-723207162/">
              <FaLinkedin />
            </a>
            <a className="text-[30px]" href="mailto:tofan.emanuel99@gmail.com">
              <SiGmail />
             </a>
            <a className="text-[30px]" href="https://www.xing.com/profile/Tofan_Emanuel/">
              <FaXing />
            </a>
            <a className="text-[30px]" href="https://github.com/ITechEm">
              <FaGithub />
            </a>
          </motion.div>
        </div>
        {/* Image */}
        <motion.div
          variants={fadeIn('down', 0.5)}
          initial='hidden'
          whileInView={'show'}
          className='hidden lg:flex flex-1 max-w-[320px] lg:mx-w-[482px] mb-20'>
          <img src={Image} alt="" />
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Banner;
