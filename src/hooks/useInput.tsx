import { ChangeEvent, useState} from "react";

type InputType = [inputValue: string| number, handleChange: (e: ChangeEvent<HTMLInputElement>) => void, alertButton: () => void]

const useInput = (initialValue:string|number): InputType => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const alertButton = () => {
    if (typeof inputValue === "string" && inputValue.length !== 0) {
      setInputValue("");
      return alert(inputValue);
    } else if (typeof inputValue === "number" && inputValue !== 0) {
      setInputValue("");
      return alert(inputValue.toString());
    }
    alert("빈값 ㅋ");
  };

  return [inputValue, handleChange, alertButton];
};

export default useInput;
