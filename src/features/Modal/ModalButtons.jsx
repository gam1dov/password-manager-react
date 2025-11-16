function ModalButtons({ onClose, handleSubmit, loading }) {
  return (
    <div className="border-t border-green-200 bg-green-100 p-6">
      <div className="flex gap-3">
        <button
          type="button"
          onClick={onClose}
          disabled={loading}
          className="flex-1 border-2 border-red-400 bg-transparent text-red-600 hover:bg-red-500 hover:text-white font-medium py-3 px-4 rounded-md transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-50"
        >
          Отмена
        </button>
        <button
          type="submit"
          disabled={loading}
          onClick={handleSubmit}
          className="flex-1 bg-[#56ab2f] hover:bg-[#478c26] text-white font-medium py-3 px-4 rounded-md transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-50"
        >
          {loading ? "Сохранение..." : "Сохранить"}
        </button>
      </div>
    </div>
  );
}

export default ModalButtons;
