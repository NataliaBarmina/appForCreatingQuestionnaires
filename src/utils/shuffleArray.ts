export const shuffleArray = (array: string[]) => {
  const result = [...array];

  let currentIndex = result.length - 1;

  for (; currentIndex > 0; currentIndex--) {
    const randomIndex = Math.floor(Math.random() * (currentIndex + 1));

    // Обмен местами с помощью деструктуризации
    [result[currentIndex], result[randomIndex]] = [
      result[randomIndex],
      result[currentIndex],
    ];
  }

  return result;
};
