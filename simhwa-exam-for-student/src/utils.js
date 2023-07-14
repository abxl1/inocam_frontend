// 2초 지연 함수
export const waitTwoSeconds = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
