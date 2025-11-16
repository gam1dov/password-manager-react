import { useState, useRef, useEffect } from "react";
import { simulateRequest } from "../../utils/api";
import { usePasswordGenerator } from "../../hooks/usePasswordGenerator";
import ModalHeader from "./ModalHeader";
import ServicePasswordInputs from "./ServicePasswordInputs";
import PasswordGenerator from "./PasswordGenerator";
import ModalButtons from "./ModalButtons";

function PasswordModal({ onClose, onSave }) {
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const modalRef = useRef(null);

  const {
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
  } = usePasswordGenerator();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        if (!loading) {
          onClose();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, loading]);

  useEffect(() => {
    if (generatedPassword) {
      setPassword(generatedPassword);
    }
  }, [generatedPassword]);

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!service.trim() || !password.trim()) {
      setError("Заполните все обязательные поля");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await simulateRequest({ service, password });
      onSave(service, password);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const hasSelectedChars = includeChars || includeNumbers || includeSymbols;

  const isGenerateButtonDisabled =
    (useCustomChars && !customChars.trim()) ||
    (!useCustomChars && !hasSelectedChars);

  return (
    <div className="fixed inset-0 bg-green-900/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div
        ref={modalRef}
        className="bg-green-50 rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col border border-green-200"
      >
        <ModalHeader onClose={onClose} loading={loading} />

        <div className="flex-1 overflow-y-auto">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <ServicePasswordInputs
              service={service}
              setService={setService}
              password={password}
              setPassword={setPassword}
              loading={loading}
            />

            <PasswordGenerator
              passwordSize={passwordSize}
              setPasswordSize={setPasswordSize}
              useCustomChars={useCustomChars}
              setUseCustomChars={setUseCustomChars}
              customChars={customChars}
              setCustomChars={setCustomChars}
              includeChars={includeChars}
              setIncludeChars={setIncludeChars}
              includeNumbers={includeNumbers}
              setIncludeNumbers={setIncludeNumbers}
              includeSymbols={includeSymbols}
              setIncludeSymbols={setIncludeSymbols}
              letterCase={letterCase}
              setLetterCase={setLetterCase}
              createPassword={createPassword}
              isGenerateButtonDisabled={isGenerateButtonDisabled}
            />

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                {error}
              </div>
            )}
          </form>
        </div>

        <ModalButtons
          onClose={onClose}
          handleSubmit={handleSubmit}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default PasswordModal;
