export const simulateRequest = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;
      if (isSuccess) {
        resolve({
          success: true,
          message: "Пароль успешно сохранен!",
          data,
        });
      } else {
        reject({
          success: false,
          message: "Ошибка сервера. Попробуйте заново!",
        });
      }
    }, 1000);
  });
};
