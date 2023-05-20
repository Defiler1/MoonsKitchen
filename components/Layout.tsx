import { useState } from "react";
import i18n from "lang/i18n";
import Setting from "./setting";

export default function Layout({ children }) {
  const [lan, setLan] = useState<number>(1); // 1. ko 2.en 3.jp
  const changeLanguageToKo = () => i18n.changeLanguage("ko");
  const changeLanguageToEn = () => i18n.changeLanguage("en");
  const changeLanguageToJp = () => i18n.changeLanguage("jp");

  return (
    <>
      <Setting lan={lan} setLan={setLan} changeLanguageToKo={changeLanguageToKo} changeLanguageToJp={changeLanguageToJp} changeLanguageToEn={changeLanguageToEn} />
      <div>{children}</div>
    </>
  );
}
