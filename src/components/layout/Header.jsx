function Header({ passwordsCount, onAddPassword, loading }) {
  return (
    <header className="text-center mb-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Шкатулка паролей</h1>
        <p className="text-green-100 text-lg">
          Вы доверяете нам? Если нет, то мы идем к Вам!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8">
        <div className="bg-white/20 rounded-xl px-6 py-3">
          <p className="text-white font-medium">
            {passwordsCount === 0
              ? "НЕТ СОХРАНЕННЫХ ПАРОЛЕЙ"
              : `ВСЕГО ПАРОЛЕЙ: ${passwordsCount}`}
          </p>
        </div>

        <button
          className="group bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold text-lg py-4 px-10 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2 border-yellow-300/50 relative overflow-hidden"
          onClick={onAddPassword}
          disabled={loading}
        >
          <div className="relative flex items-center gap-3">
            <span className="font-bold tracking-wide drop-shadow-sm">
              НОВЫЙ ПАРОЛЬ
            </span>
          </div>
        </button>
      </div>
    </header>
  );
}

export default Header;
