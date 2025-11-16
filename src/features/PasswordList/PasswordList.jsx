import PasswordListHeader from "./PasswordListHeader";
import PasswordItem from "./PasswordItem";

function PasswordList({ passwords, onDelete, onCopy, loading }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-white/20">
      <PasswordListHeader />

      <div className="divide-y divide-white/20">
        {passwords.map((password) => (
          <PasswordItem
            key={password.id}
            password={password}
            onCopy={onCopy}
            onDelete={onDelete}
            loading={loading}
          />
        ))}
      </div>
    </div>
  );
}

export default PasswordList;
