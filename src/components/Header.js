import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './language-selector';
import { PASSWORD_ROUTES } from './config';

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
    const destination = PASSWORD_ROUTES[password];
    if (destination) {
      window.location.href = destination;
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