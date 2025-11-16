function PasswordItemContent({ service, password }) {
  return (
    <div className="flex-1 flex items-center gap-4">
      <h3 className="text-lg font-medium text-white whitespace-nowrap">
        {service}
      </h3>
      <div className="inline-block">
        <p className="text-sm text-white font-mono bg-white/20 px-3 py-2 rounded-lg border border-white/20 break-all">
          {password}
        </p>
      </div>
    </div>
  );
}

export default PasswordItemContent;
