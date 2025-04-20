import React from 'react';
import logo from '../assets/logo.svg'
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './language-selector';




const Header = () => {
  const {t} = useTranslation();
  return <header className='py-8 '> {/*fixed top-0 w-full bg-primary/20 backdrop-blur-lg*/}
    <div className='container mx-auto relative xs:center'>
      <div className='flex justify-between items-center '>
        {/* logo */}
        <a className="text-gradient" href="/">PORTFOLIO</a>
        {/* button */}
        <div className="flex">
          <a className=' btn btn-lg p-4' href="https://www.canva.com/design/DAGey6y9QA0/uoyVyzhv4ZsL4DOF2KdSZw/view?utm_content=DAGey6y9QA0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf5fbdb71f5/">
          {t("cv")}</a>
        </div>
        <LanguageSelector />
      </div>
      
    </div>

    
       
  </header>;
};

export default Header;
