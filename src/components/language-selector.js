import React from "react";
import { useTranslation } from "react-i18next";


const languages = [
  { code: "en", name: "English"},
  { code: "de", name: "German"},
];

const LanguageSelector = ({ currentlanguage }) => {
const {i18n, t} = useTranslation();
const onlanguageChange = (language) => {
    i18n.changeLanguage(language);
    } 

return (
    <div className="lang-menu  text-white flex flex-col items-center justify-center">
        <div className='p-3 selected-lang text-gradient'>
          {t("lang")}
        </div>
        <ul>
            {languages.map((language) => (
        <li key={language.code}>
        <button  
            className= {`${
            currentlanguage === language.code ? "selected" : ""}` + " text-white" + " p-1" + " text-gradient" + " hover:bg-white hover:text-black"}
            value={language.code}
            onClick={() => onlanguageChange(language.code)}>
            {language.name}
        </button>
        </li>))}
        </ul>
    </div>
);
};

export default LanguageSelector;