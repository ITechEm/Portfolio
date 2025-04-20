
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import img1 from '../assets/portfolio-img1.png'
import img2 from '../assets/project2.PNG'
import { useTranslation } from 'react-i18next';

const Work = () => {
  const {t} = useTranslation();
  return (
    <section id='work' className='py-10'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-8 mb-10 lg:mb-0'>
            {/* text */}
            <h2 className='h2 leading-tight text-accent'>{t("mlwtitle")}</h2>
            <p className='max-w-md text-justify'>{t("mlwpar1")}</p>
            <div className="flex"><a className=' btn btn-lg p-4 ' href="https://qa-delivery.vercel.app " target='_blank'>{t("wtp")}</a></div>
          </motion.div>
          {/* image */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
              </div>
              {/* img */}
              <img src={img1} alt="" className='group-hover:scale-125 transition-all duration-500' />
              {/* pre-title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>{t("wd")}</span>
              </div>
              {/* title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>QA Delivery</span>
              </div>
            </div>
          </motion.div>
          
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-12'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-8 mb-10 lg:mb-0'>
            {/* text */}
            <h2 className='h2 leading-tight text-accent'></h2>
            <p className='max-w-md text-justify'>{t("mlwpar2")}</p>
            <div className="flex"><a className=' btn btn-lg p-4' href="https://greek-tasty.de" target='_blank'>{t("wtp")}</a></div>
          </motion.div>
          {/* image */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
              </div>
              {/* img */}
              <img src={img2} alt="" className='group-hover:scale-125 transition-all duration-500' />
              {/* pre-title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>{t("wd")}</span>
              </div>
              {/* title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Greek Tasty</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section >);
};

export default Work;
