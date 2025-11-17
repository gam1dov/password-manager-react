import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getPasswords = () => {
  const stored =
    localStorage.getItem("passwords") ||
    sessionStorage.getItem("passwords") ||
    cookies.get("passwords");

  return stored ? JSON.parse(stored) : [];
};

export const setPasswords = (passwords) => {
  const passwordsJSON = JSON.stringify(passwords);

  localStorage.setItem("passwords", passwordsJSON);
  sessionStorage.setItem("passwords", passwordsJSON);

  cookies.set("passwords", passwordsJSON, {
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
    sameSite: "strict",
  });
};

export const addPassword = (service, password) => {
  const passwords = getPasswords();

  const newPassword = {
    id: String(Date.now()),
    service,
    password,
  };
  passwords.push(newPassword);
  setPasswords(passwords);

  return newPassword;
};

export const deletePassword = (id) => {
  const passwords = getPasswords();
  const filtered = passwords.filter((p) => p.id !== id);

  setPasswords(filtered);
};
