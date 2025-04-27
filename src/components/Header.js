import React, { useState, useRef, useEffect  } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './language-selector';

const Header = () => {
  const { t } = useTranslation();

  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const passwordRef = useRef(null);

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
      setError(t("passwordError"));
      setPassword('');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (passwordRef.current && !passwordRef.current.contains(event.target)) {
        setShowPasswordInput(false);
      }
    };

    if (showPasswordInput) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPasswordInput]);

  return (
    <header className="py-6 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* <a className="text-gradient text-xl font-bold" href="/">PORTFOLIO</a> */}

          <div className="flex md:items-center">
            <button
              className="text-gradient text-xl font-bold"
              onClick={handleContinueClick}
            >
              {t("cv")}
            </button>
          </div>

          <div className="flex items-center">
            <LanguageSelector />
          </div>
        </div>

        {showPasswordInput && (
          <div
            ref={passwordRef}
            className="md:absolute flex flex-col  space-y-3 max-w-xs mx-auto text-black "
          >
            <input
              type="password"
              className="w-full border rounded px-3 py-1 "
              placeholder={t("pass")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
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
