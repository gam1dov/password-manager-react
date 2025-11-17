import { useState, useEffect } from "react";

import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import PasswordModal from "./features/Modal/PasswordModal";
import Footer from "./components/layout/Footer";

import {
  addPassword,
  getPasswords,
  deletePassword,
} from "./utils/passwordStorage";
import { toast } from "react-toastify";

function App() {
  const [passwords, setPasswords] = useState([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPasswords(getPasswords());
  }, []);

  const filteredPasswords = passwords.filter((password) =>
    password.service.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddPassword = async (service, password) => {
    setLoading(true);

    try {
      const newPassword = addPassword(service, password);
      setPasswords((prev) => [...prev, newPassword]);
      setIsModalOpen(false);
    } catch (error) {
      toast.error(`Ошибка при сохранении пароля: ${error.message}`, {
        position: "top-right",
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePassword = async (id) => {
    setLoading(true);

    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          const isSuccess = Math.random() > 0.5;
          if (isSuccess) {
            deletePassword(id);
            setPasswords((prev) => prev.filter((p) => p.id !== id));
            resolve();
          } else {
            reject(new Error("Ошибка при удалении"));
          }
        }, 1000);
      });
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Пароль скопирован в буфер обмена!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-400 to-green-600 py-8 flex flex-col">
      <div className="max-w-4xl mx-auto px-4 flex-1 flex flex-col w-full">
        <Header
          passwordsCount={passwords.length}
          onAddPassword={() => setIsModalOpen(true)}
          loading={loading}
        />
        <Main
          passwords={passwords}
          filteredPasswords={filteredPasswords}
          search={search}
          onSearchChange={setSearch}
          onDelete={handleDeletePassword}
          onCopy={copyToClipboard}
          loading={loading}
        />
        {isModalOpen && (
          <PasswordModal
            onClose={() => setIsModalOpen(false)}
            onSave={handleAddPassword}
          />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
