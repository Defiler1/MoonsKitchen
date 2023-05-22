import { IoLanguageSharp } from "react-icons/io5";
import styles from "../styles/setting.module.css";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

interface SettingProps {
  lan: number;
  setLan: Dispatch<SetStateAction<number>>;
  changeLanguageToKo: () => any;
  changeLanguageToJp: () => any;
  changeLanguageToEn: () => any;
}

export default function Setting({ lan, setLan, changeLanguageToKo, changeLanguageToEn, changeLanguageToJp }: SettingProps) {
  const [isSetting, setIsSetting] = useState<boolean>(false);
  const settingRef = useRef(null);

  const handleCloseSetting = (e) => {
    if (isSetting && (!settingRef.current || !settingRef.current.contains(e.target))) {
      setIsSetting(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleCloseSetting);
    return () => {
      window.removeEventListener("click", handleCloseSetting);
    };
  }, []);

  const onClick = (e) => {
    e.stopPropagation();
    setIsSetting(!isSetting);
  };

  const onChange = (e: any, changeLan: () => any) => {
    changeLan();
    setLan(e.target.value);
  };

  return (
    <div ref={settingRef}>
      <div className={styles.circle} onClick={onClick}>
        <IoLanguageSharp size={"35"} />
      </div>
      {isSetting && (
        <div className={styles.menu_container}>
          <div className={styles.header}>Language</div>
          <div className={styles.lan_container}>
            <div className={styles.btn_box}>
              <div className={styles.btn}>
                <input
                  id={"korean"}
                  type="radio"
                  name="lan"
                  value={1}
                  onChange={(e) => {
                    onChange(e, changeLanguageToKo);
                  }}
                  checked={lan == 1}
                />
                <label htmlFor={"korean"}>한국어</label>
              </div>
              <div className={styles.btn}>
                <input
                  id={"eng"}
                  type="radio"
                  name="lan"
                  value={2}
                  onChange={(e) => {
                    onChange(e, changeLanguageToEn);
                  }}
                  checked={lan == 2}
                />
                <label htmlFor={"eng"}>English</label>
              </div>
              <div className={styles.btn}>
                <input
                  id={"jp"}
                  type="radio"
                  name="lan"
                  value={3}
                  onChange={(e) => {
                    onChange(e, changeLanguageToJp);
                  }}
                  checked={lan == 3}
                />
                <label htmlFor={"jp"}>日本語</label>
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx>
        {`
          input {
            padding-right: 2px;
            box-shadow: 0px 1px 2px rgb(0, 0, 0, 0.1);
          }
          p {
            padding-left: 4px;
          }
        `}
      </style>
    </div>
  );
}
