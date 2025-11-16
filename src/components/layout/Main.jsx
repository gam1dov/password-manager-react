import SearchBar from "../../features/SearchBar/SearchBar";
import PasswordList from "../../features/PasswordList/PasswordList";

function Main({
  passwords,
  filteredPasswords,
  search,
  onSearchChange,
  onDelete,
  onCopy,
  loading,
}) {
  return (
    <main className="flex-1 space-y-6">
      {passwords.length > 0 && (
        <SearchBar search={search} onSearchChange={onSearchChange} />
      )}

      {passwords.length > 0 ? (
        <PasswordList
          passwords={filteredPasswords}
          onDelete={onDelete}
          onCopy={onCopy}
          loading={loading}
        />
      ) : (
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 text-center border border-white/20">
          <div className="max-w-2xl mx-auto">
            <p className="text-green-100 text-lg leading-relaxed">
              Шкатулка паролей – это удобный инструмент для управления паролями
              и хранения конфиденциальных данных, который экономит ваше время и
              делает вашу жизнь в сети комфортной.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

export default Main;
