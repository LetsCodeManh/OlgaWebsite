import React from "react";
import { useTranslation } from "react-i18next";
import { component } from "../styles";

const lngs = {
  de: { nativeName: "DE" },
  en: { nativeName: "EN" },
  ru: { nativeName: "RU" },
};

function LanguageSwitch() {
  const { t, i18n } = useTranslation();

  return (
    <li className="flex gap-2">
      {Object.keys(lngs).map((lng) => (
        <button
          className={`buttonAfter ${component.button} ${
            component.buttonHover
          }  ${
            i18n.resolvedLanguage === lng ? `${component.buttonDisable}` : ``
          }`}
          type="submit"
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          disabled={i18n.resolvedLanguage === lng}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
    </li>
  );
}

export default LanguageSwitch;
