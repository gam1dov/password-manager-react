function PasswordItemButtons({ password, id, onCopy, onDelete, loading }) {
  return (
    <div className="flex gap-3 self-center sm:self-auto">
      <button
        onClick={() => onCopy(password)}
        className="bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 border border-white/20"
      >
        Копировать
      </button>
      <button
        onClick={() => onDelete(id)}
        disabled={loading}
        className="bg-red-500/80 hover:bg-red-600/80 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 border border-white/20 disabled:bg-gray-400/80 disabled:cursor-not-allowed"
      >
        Удалить
      </button>
    </div>
  );
}

export default PasswordItemButtons;
