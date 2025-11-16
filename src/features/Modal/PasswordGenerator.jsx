function PasswordGenerator({
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
  isGenerateButtonDisabled,
}) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-green-800">Генератор паролей</h3>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-green-700">
          Длина пароля: {passwordSize}
        </label>
        <input
          type="range"
          min="4"
          max="32"
          value={passwordSize}
          onChange={(e) => setPasswordSize(parseInt(e.target.value))}
          className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div
            className={`p-3 bg-white rounded-lg border border-green-200 shadow-sm transition-all duration-200 ${
              useCustomChars ? "opacity-50" : "hover:shadow-md"
            }`}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                id="includeChars"
                checked={includeChars}
                onChange={(e) => setIncludeChars(e.target.checked)}
                disabled={useCustomChars}
                className="w-4 h-4 rounded border-green-300 text-green-600 focus:ring-green-500 disabled:bg-green-100"
              />
              <label
                htmlFor="includeChars"
                className={`ml-3 text-sm font-medium ${
                  useCustomChars ? "text-green-400" : "text-green-700"
                }`}
              >
                Использовать буквы
              </label>
            </div>

            {includeChars && (
              <div className="mt-2 ml-7">
                <label className="block text-xs font-medium text-green-600 mb-1">
                  Регистр букв:
                </label>
                <div className="space-y-1">
                  <label className="flex items-center text-xs cursor-pointer">
                    <input
                      type="radio"
                      name="letterCase"
                      value="lower"
                      checked={letterCase === "lower"}
                      onChange={(e) => setLetterCase(e.target.value)}
                      disabled={useCustomChars}
                      className="w-3 h-3 text-green-600 focus:ring-green-500"
                    />
                    <span
                      className={`ml-2 ${
                        useCustomChars ? "text-green-400" : "text-green-700"
                      }`}
                    >
                      Нижний регистр
                    </span>
                  </label>
                  <label className="flex items-center text-xs cursor-pointer">
                    <input
                      type="radio"
                      name="letterCase"
                      value="upper"
                      checked={letterCase === "upper"}
                      onChange={(e) => setLetterCase(e.target.value)}
                      disabled={useCustomChars}
                      className="w-3 h-3 text-green-600 focus:ring-green-500"
                    />
                    <span
                      className={`ml-2 ${
                        useCustomChars ? "text-green-400" : "text-green-700"
                      }`}
                    >
                      Верхний регистр
                    </span>
                  </label>
                  <label className="flex items-center text-xs cursor-pointer">
                    <input
                      type="radio"
                      name="letterCase"
                      value="random"
                      checked={letterCase === "random"}
                      onChange={(e) => setLetterCase(e.target.value)}
                      disabled={useCustomChars}
                      className="w-3 h-3 text-green-600 focus:ring-green-500"
                    />
                    <span
                      className={`ml-2 ${
                        useCustomChars ? "text-green-400" : "text-green-700"
                      }`}
                    >
                      Случайный регистр
                    </span>
                  </label>
                </div>
              </div>
            )}
          </div>

          <div
            className={`p-3 bg-white rounded-lg border border-green-200 shadow-sm transition-all duration-200 ${
              useCustomChars ? "opacity-50" : "hover:shadow-md"
            }`}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                id="includeNumbers"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                disabled={useCustomChars}
                className="w-4 h-4 rounded border-green-300 text-green-600 focus:ring-green-500 disabled:bg-green-100"
              />
              <label
                htmlFor="includeNumbers"
                className={`ml-3 text-sm font-medium ${
                  useCustomChars ? "text-green-400" : "text-green-700"
                }`}
              >
                Использовать цифры
              </label>
            </div>
          </div>

          <div
            className={`p-3 bg-white rounded-lg border border-green-200 shadow-sm transition-all duration-200 w-full col-span-2 ${
              useCustomChars ? "opacity-50" : "hover:shadow-md"
            }`}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                id="includeSymbols"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                disabled={useCustomChars}
                className="w-4 h-4 rounded border-green-300 text-green-600 focus:ring-green-500 disabled:bg-green-100"
              />
              <label
                htmlFor="includeSymbols"
                className={`ml-3 text-sm font-medium ${
                  useCustomChars ? "text-green-400" : "text-green-700"
                }`}
              >
                Использовать специальные символы
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center p-3 bg-white rounded-lg border border-green-200 shadow-sm w-full transition-all duration-200 hover:shadow-md">
        <input
          type="checkbox"
          id="useCustomChars"
          checked={useCustomChars}
          onChange={(e) => setUseCustomChars(e.target.checked)}
          className="w-4 h-4 rounded border-green-300 text-green-600 focus:ring-green-500"
        />
        <label
          htmlFor="useCustomChars"
          className="ml-3 text-sm font-medium text-green-700"
        >
          Использовать собственный набор символов
        </label>
      </div>

      {useCustomChars && (
        <div>
          <input
            type="text"
            value={customChars}
            onChange={(e) => setCustomChars(e.target.value)}
            placeholder="Введите символы для генерации"
            className="w-full rounded-md border border-green-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
          />
          <p className="mt-1 text-xs text-green-600">
            Пароль будет сгенерирован только из этих символов
          </p>
        </div>
      )}

      <div className="flex justify-center">
        <button
          type="button"
          onClick={createPassword}
          disabled={isGenerateButtonDisabled}
          className={`border-2 font-medium py-2 px-6 rounded-md transition-all duration-200 shadow-sm ${
            isGenerateButtonDisabled
              ? "border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed"
              : "border-[#56ab2f] bg-transparent text-[#56ab2f] hover:bg-[#56ab2f] hover:text-white hover:shadow-md hover:scale-105 transform"
          }`}
        >
          Сгенерировать пароль
        </button>
      </div>
    </div>
  );
}

export default PasswordGenerator;
