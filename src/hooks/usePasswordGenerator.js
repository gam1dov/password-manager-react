import { useState } from "react";

export const usePasswordGenerator = () => {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [passwordSize, setPasswordSize] = useState(12);
  const [useCustomChars, setUseCustomChars] = useState(false);
  const [customChars, setCustomChars] = useState("");
  const [includeChars, setIncludeChars] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [letterCase, setLetterCase] = useState("mixed");

  const createPassword = () => {
    if (useCustomChars && customChars) {
      let result = "";

      for (let i = 0; i < passwordSize; i++) {
        const randomIndex = Math.floor(Math.random() * customChars.length);
        result += customChars[randomIndex];
      }

      setGeneratedPassword(result);
      return;
    }

    let charset = "";

    if (includeChars) {
      const lowerCase = "abcdefghijklmnopqrstuvwxyz";
      const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      if (letterCase === "lower") {
        charset += lowerCase;
      } else if (letterCase === "upper") {
        charset += upperCase;
      } else {
        charset += lowerCase + upperCase;
      }
    }

    if (includeNumbers) {
      charset += "0123456789";
    }

    if (includeSymbols) {
      charset += "!@#$%^&*()_+-=[]{}|;:,.<>?/~`\"'\\";
    }

    if (!charset) {
      setGeneratedPassword("");
      return;
    }

    let result = "";

    for (let i = 0; i < passwordSize; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset[randomIndex];
    }

    if (letterCase === "random" && includeChars) {
      let randomizedResult = "";

      for (let i = 0; i < result.length; i++) {
        const char = result[i];
        const code = char.charCodeAt(0);
        const isLowerLetter = code >= 97 && code <= 122;
        const isUpperLetter = code >= 65 && code <= 90;

        if (isLowerLetter || isUpperLetter) {
          randomizedResult +=
            Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase();
        } else {
          randomizedResult += char;
        }
      }
      setGeneratedPassword(randomizedResult);
    } else {
      setGeneratedPassword(result);
    }
  };

  return {
    generatedPassword,
    passwordSize,
    setPasswordSize,
    useCustomChars,
    setUseCustomChars,
    customChars,
    setCustomChars,
    includeChars,
    setIncludeChars,
    includeNumbers,
    setIncludeNumbers,
    includeSymbols,
    setIncludeSymbols,
    letterCase,
    setLetterCase,
    createPassword,
  };
};
