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
        profile_description1: "Name : SeogHun Moon",
        profile_description2: "Age : 26",
        profile_description3: "Tall : 175cm",
        profile_description4: "Career : 3 years of YouTube self-study",
        profile_description5: "HomeTown : Daegu Korea",
        profile_description6: "Possible cuisines : Western, Chinese, Korean",
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
        profile_description1: "名前 : ムン・ソクフン",
        profile_description2: "年齢 : 26歳",
        profile_description3: "背 : 175cm",
        profile_description4: "経歴 : ユーチューブ独学3年",
        profile_description5: "故郷 : 大邱廣域市 韓国",
        profile_description6: "可能な料理 : 洋食、中華、韓食",
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
        profile_description1: "이름 : 문석훈",
        profile_description2: "나이 : 26살",
        profile_description3: "키 : 175cm",
        profile_description4: "경력 : 유투브 독학 3년",
        profile_description5: "고향 : 대구",
        profile_description6: "가능한 요리 : 양식, 중식, 한식",
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
