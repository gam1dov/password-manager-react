export const getPasswords = () => {
  const stored =
    localStorage.getItem("passwords") || sessionStorage.getItem("passwords");

  return stored ? JSON.parse(stored) : [];
};

export const setPasswords = (passwords) => {
  const passwordsJSON = JSON.stringify(passwords);
  localStorage.setItem("passwords", passwordsJSON);
  sessionStorage.setItem("passwords", passwordsJSON);
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
