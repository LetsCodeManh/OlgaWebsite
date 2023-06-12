import { heading, layout } from "../../styles";
import { useTranslation } from "react-i18next";

import {
  einzelberatung,
  familienberatung,
  imigratenberatung,
  paarberatung,
} from "../../assets";

const Private = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className={`${layout.boxCard} sm:flex-row sm:h-[290px]`}>
        <img
          src={einzelberatung}
          alt="Two people taking to each other"
          className={`${layout.boxImage} ${layout.boxImageObject}`}
        />
        <div className={`${layout.boxText} overflow-scroll h-[290px]`}>
          <h2 className={`${heading.levelOne} headingOne`}>
            {t("Offer.EinzelpersonenAngebot.Einzelberatung")}
          </h2>
          <p className={`${heading.paragraph} headingLevelFive`}>
            {t("Offer.EinzelpersonenAngebot.Description1")}
          </p>
        </div>
      </div>
      <div className={`${layout.boxCard} sm:flex-row-reverse sm:h-[290px]`}>
        <img
          src={imigratenberatung}
          alt="Two people taking to each other"
          className={`${layout.boxImage} ${layout.boxImageObject}`}
        />
        <div className={`${layout.boxText} overflow-scroll h-[290px]`}>
          <h2 className={`${heading.levelOne} headingOne`}>
            {t("Offer.EinzelpersonenAngebot.Imigratenberatung")}
          </h2>
          <p className={`${heading.paragraph} headingLevelFive`}>
            {t("Offer.EinzelpersonenAngebot.Description2")}
          </p>
        </div>
      </div>
      <div className={`${layout.boxCard} sm:flex-row sm:h-[290px]`}>
        <img
          src={paarberatung}
          alt="Two people taking to each other"
          className={`${layout.boxImage} ${layout.boxImageObject}`}
        />
        <div className={`${layout.boxText} overflow-scroll h-[290px]`}>
          <h2 className={`${heading.levelOne} headingOne`}>
            {t("Offer.EinzelpersonenAngebot.Paarberatung")}
          </h2>
          <p className={`${heading.paragraph} headingLevelFive`}>
            {t("Offer.EinzelpersonenAngebot.Description3")}
          </p>
        </div>
      </div>
      <div className={`${layout.boxCard} sm:flex-row-reverse sm:h-[290px]`}>
        <img
          src={familienberatung}
          alt="Two people taking to each other"
          className={`${layout.boxImage} ${layout.boxImageObject}`}
        />
        <div className={`${layout.boxText} overflow-scroll h-[290px]`}>
          <h2 className={`${heading.levelOne} headingOne`}>
            {t("Offer.EinzelpersonenAngebot.Familienberatung")}
          </h2>
          <p className={`${heading.paragraph} headingLevelFive`}>
            {t("Offer.EinzelpersonenAngebot.Description4")}
          </p>
        </div>
      </div>
      <div className={`${layout.boxCard} overflow-scroll gap-3 p-6`}>
        <h2 className={`${heading.levelOne} headingOne`}>
          {t("Offer.EinzelpersonenAngebot.Affirmation.MainHeader")}
        </h2>
        <div>
          <h4 className={`${heading.levelOne} headingLevelThree`}>
            {t("Offer.EinzelpersonenAngebot.Affirmation.Header1")}
          </h4>
          <p className={`${heading.paragraph} headingLevelFive`}>
            {t("Offer.EinzelpersonenAngebot.Affirmation.Description1")}
          </p>
        </div>
        <div>
          <h4 className={`${heading.levelOne} headingLevelThree`}>
            {t("Offer.EinzelpersonenAngebot.Affirmation.Header2")}
          </h4>
          <p className={`${heading.paragraph} headingLevelFive`}>
            {t("Offer.EinzelpersonenAngebot.Affirmation.Description2")}
          </p>
        </div>
        <div>
          <h4 className={`${heading.levelOne} headingLevelThree`}>
            {t("Offer.EinzelpersonenAngebot.Affirmation.Header3")}
          </h4>
          <p className={`${heading.paragraph} headingLevelFive`}>
            {t("Offer.EinzelpersonenAngebot.Affirmation.Description3")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Private;
