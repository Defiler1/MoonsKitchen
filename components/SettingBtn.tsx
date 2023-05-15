import { Dispatch, SetStateAction } from "react";

interface SettingBtnProps {
  value: string;
  htmlfor: string;
  setLan?: Dispatch<SetStateAction<number>>;
  setDarkMode?: Dispatch<SetStateAction<boolean>>;
}

export default function SettingBtn({ value, htmlfor, setLan, setDarkMode }: SettingBtnProps) {
  const onCheck = () => {};

  return (
    <>
      <div>
        <input id={htmlfor} type="radio" name={htmlfor} />
        <label htmlFor={htmlfor}>
          <p>{value}</p>
        </label>
      </div>
      <style jsx>
        {`
          div {
            padding: 3px 0px;
            display: flex;
          }
          input {
            padding-right: 2px;
            box-shadow: 0px 1px 2px rgb(0, 0, 0, 0.1);
          }
          p {
            padding-left: 4px;
          }
        `}
      </style>
    </>
  );
}
