import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useTranslation } from 'react-i18next';


const Services = () => {
  const {t} = useTranslation();
  const services1 = [
    {
      name1: '',
      description1: '',
      text1:"",
      date: '04/2021 - 09/2022'
    }
  ]
  const services2 = [
    
    {
      name2: '',
      description2: '',
      date: '09/2022 - 04/2024'
    }
  ]
  const services3 = [
    {
      name3: '',
      description3: "",
      text3:"",
      date: '06/2023 - Present'
    }
  ]
  const services4 = [
    {
      name4: '',
      description4: '',
      date: '06/2023 - Present'
    }
  ]
  const services = [...services1, ...services2, ...services3, ...services4];
  return <section id='services' className='py-10'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 bg-no-repeat mix-blend-lighten mb-12 lg:bg-services lg:bg-bottom lg:mb-0'  >
          <h2 className='h2 text-accent'>{t("widtitle")}</h2>
          <h3 className='h3 max-w-[455px] mb-16'>{t("widsubtitle")}</h3>
          <p className='max-w-[500px] text-justify text-sm sm:text-base leading-relaxed'>🔍 {t("widpar1")}
                      <br/> 🌟{t("widpar2")}
                      <br/> 🌟{t("widpar3")}
                      <br/> 🌟{t("widpar4")}
                      <br/> 🌟{t("widpar5")}
                      <br/> 🌟{t("widpar6")}
                      <br/> 🌟{t("widpar7")}
                      <br/> 🚀 {t("widpar8")}</p>
        </motion.div>
        {/* services */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 space-y-8'>
          {/* service list */}
          <div>
            {
              services1.map((service, idx) => {
                const { name1, description1, text1, date } = service;
                return (
                  <div key={idx} className='border-b border-white/20 pb-4 flex flex-col sm:flex-row justify-between gap-4'>
                    <div className='flex-1'>
                      <h4 className='text-[18px] sm:text-[20px] tracking-wider font-primary font-semibold mb-2'>{name1}{t("wid1a")}</h4>
                      <p className='font-secondary text-sm sm:text-base leading-tight'>{description1} {t("wid1b")}</p>
                      <p className='font-secondary text-sm sm:text-base leading-tight mt-1'>{text1} {t("wid1b2")}</p>

                    </div>
                    <div className='flex flex-col flex-1 items-end mt-2'>
                      <a className='text-sm text-right sm:text-end text-gradient mt-1 sm:mt-0' >
                      {date}
                      </a>
                    </div>
                  </div>
                )
              })
              
            }
          </div>
          <div>
            {
              services2.map((service, idx) => {
                const { name2, description2, text2, date } = service;
                return (
                  <div key={idx} className='border-b border-white/20 pb-4 flex flex-col sm:flex-row justify-between gap-4'>
                    <div className='flex-1'>
                      <h4 className='text-[18px] sm:text-[20px] tracking-wider font-primary font-semibold mb-2'>{name2}{t("wid2a")}</h4>
                      <p className='font-secondary text-sm sm:text-base leading-tight'>{description2} {t("wid2b")}</p>
                      <p className='font-secondary text-sm sm:text-base leading-tight mt-1'>{text2} {t("wid2b2")}</p>
                      

                    </div>
                    <div className='flex flex-col flex-1 items-end mt-2'>
                      <a className='text-sm text-right sm:text-end text-gradient mt-1 sm:mt-0' >
                      {date}
                      </a>
                    </div>
                  </div>
                )
              })
              
            }
          </div>
          <div>
            {
              services3.map((service, idx) => {
                const { name3, description3, text3, date } = service;
                return (
                  <div key={idx} className='border-b border-white/20 pb-4 flex flex-col sm:flex-row justify-between gap-4'>
                    <div className='flex-1'>
                      <h4 className='text-[18px] sm:text-[20px] tracking-wider font-primary font-semibold mb-2'>{name3}{t("wid3a")}</h4>
                      <p className='font-secondary text-sm sm:text-base leading-tight'>{description3} {t("wid3b")}</p>
                      <p className='font-secondary text-sm sm:text-base leading-tight mt-1'>{text3} {t("wid3b2")}</p>
                      

                    </div>
                    <div className='flex flex-col flex-1 items-end mt-2'>
                      <a className='text-sm text-right sm:text-end text-gradient mt-1 sm:mt-0' >
                      {date}
                      </a>
                    </div>
                  </div>
                )
              })
              
            }
          </div>
          <div>
            {
              services4.map((service, idx) => {
                const { name4, description4, date } = service;
                return (
                  <div key={idx} className='border-b border-white/20 pb-4 flex flex-col sm:flex-row justify-between gap-4'>
                    <div className='flex-1'>
                      <h4 className='text-[18px] sm:text-[20px] tracking-wider font-primary font-semibold mb-2'>{name4}{t("wid4a")}</h4>
                      <p className='font-secondary text-sm sm:text-base leading-tight'>{description4} {t("wid4b")}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end mt-2'>
                      <a className='text-gradient text-sm' >
                      {date}
                      </a>
                    </div>
                  </div>
                )
              })
              
            }
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Services;