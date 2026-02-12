export const apiRequest = () => {
  return new Promise((resolve, reject) => {
    // 1-2 second simulated delay [cite: 30]
    const delay = Math.floor(Math.random() * 1000) + 1000;

    setTimeout(() => {
      // 20% random failure rate [cite: 33]
      if (Math.random() < 0.2) {
        reject("Network Error");
      } else {
        resolve("Success");
      }
    }, delay);
  });
};