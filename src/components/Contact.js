import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const {t} = useTranslation();
  return (
    <section id='contact' className='py-16 lg:section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <div>
              <h4 className='h2 uppercase text-accent'>{t("git")}</h4>
              <h2 className='text-[45px] lg:text-[70px] leading-none mb-12'>{t("gittitle1")}
                <br />
                {t("gittitle2")}
              </h2>
              <p className='max-w-[400px] text-justify'>{t("gitpar")}</p>
              <p className='max-w-[400px] text-justify'>#QA #SoftwareTesting #ManualTesting #Mentorship</p>
            </div>
          </motion.div>
          {/* form */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-10 pb-24 mt-4 p-20 items-center max-w-[471px]'>
            <p className='bg-transparent text-justify'>{t("msg1")}</p>
            <a className='btn btn-lg  p-4' href="mailto:tofan.emanuel99@gmail.com">{t("msg")}</a>
          </motion.div>
        </div>
      </div>
    </section>);
};

export default Contact;
