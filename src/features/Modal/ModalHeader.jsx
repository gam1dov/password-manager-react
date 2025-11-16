import { IoClose } from "react-icons/io5";

function ModalHeader({ onClose, loading }) {
  return (
    <div className="flex items-center justify-between p-6 border-b border-green-200 bg-green-100">
      <h2 className="text-xl font-semibold text-green-800">Добавить пароль</h2>
      <button
        onClick={onClose}
        disabled={loading}
        className="text-green-600 hover:text-green-800 disabled:opacity-50 transition-colors duration-200"
      >
        <IoClose className="w-6 h-6" />
      </button>
    </div>
  );
}

export default ModalHeader;
