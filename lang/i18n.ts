import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      index: {
        main_description1: "Make a reservation now and enjoy the elegant ",
        main_description2: "cuisine prepared by Mr. Moon!",
        main_btn_reserve: "Go to Schedule",
        main_btn_participant: "Participants",
      },
    },
  },
  jp: {
    translation: {
      index: {
        main_description1: "ムンさんが作ってくれる上品な料理、今すぐ予約",
        main_description2: "してお楽しみください!!!",
        main_btn_reserve: "予約する",
        main_btn_participant: "今週の出場者",
      },
    },
  },
  ko: {
    translation: {
      index: {
        main_description1: "문씨가 만들어주는 품격있는 요리 지금 예약해서",
        main_description2: "즐기세요!!",
        main_btn_reserve: "예약하러가기",
        main_btn_participant: "이번주참가자",
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
