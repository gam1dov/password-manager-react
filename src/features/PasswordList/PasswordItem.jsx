import PasswordItemButtons from "./PasswordItemButtons";
import PasswordItemContent from "./PasswordItemContent";

function PasswordItem({ password, onCopy, onDelete, loading }) {
  return (
    <div className="px-6 py-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <PasswordItemContent
          service={password.service}
          password={password.password}
        />
        <PasswordItemButtons
          password={password.password}
          id={password.id}
          onCopy={onCopy}
          onDelete={onDelete}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default PasswordItem;
