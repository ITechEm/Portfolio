import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './language-selector';

const Header = () => {
  const { t } = useTranslation();

  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleContinueClick = () => {
    setShowPasswordInput(true);
    setError('');
  };

  const handleSubmit = () => {
    if (password === 'en0179') {
      window.open('https://www.canva.com/design/DAGey6y9QA0/uoyVyzhv4ZsL4DOF2KdSZw/view?utm_content=DAGey6y9QA0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf5fbdb71f5');
    } else if (password === 'de0179') {
      window.open('https://www.canva.com/design/DAGdwYX7gGE/d8fz14qMpzk5YxNxknQdSQ/view?utm_content=DAGdwYX7gGE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h741a3f15a0');
    } else {
      setError('❌');
    }
  };

  return (
    <header className='py-8'>
      <div className='container mx-auto relative xs:center'>
        <div className='flex justify-between items-center'>
          <a className="text-gradient" href="/">PORTFOLIO</a>
          <div className="flex item-center">
            <button className="btn btn-lg ml-10 p-2" onClick={handleContinueClick}>
              {t("cv")}
            </button>
          </div>
          <LanguageSelector />
        </div>
        {showPasswordInput && (
          <div className="mt-4 flex flex-col items-center space-y-2 text-black ">
            <input
              type="password"
              className="border rounded"
              placeholder={t("pass")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button className="btn btn-sm" onClick={handleSubmit}>
              {t("submit")}
            </button>
            
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;