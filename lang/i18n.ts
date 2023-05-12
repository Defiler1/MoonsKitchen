import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      index: {
        page_description: "",
      },
    },
  },
  ko: {
    translation: {
      index: {
        page_description: "문씨가 만들어주는 품격있는 요리 지금 예약해서 즐기세요!!",
      },
    },
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "ko",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
