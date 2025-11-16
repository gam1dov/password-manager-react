import Input from "../../components/shared/Input";

function ServicePasswordInputs({
  service,
  setService,
  password,
  setPassword,
  loading,
}) {
  return (
    <>
      <Input
        label="Сервис"
        value={service}
        onChange={(e) => setService(e.target.value)}
        placeholder="Введите название сервиса"
        disabled={loading}
        required
      />

      <Input
        label="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Введите пароль или сгенерируйте его ниже"
        disabled={loading}
        required
      />
    </>
  );
}

export default ServicePasswordInputs;
