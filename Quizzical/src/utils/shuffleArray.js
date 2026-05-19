function shuffleArray(array) {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const randIndex = Math.floor(Math.random() * (i + 1));

    [shuffledArray[i], shuffledArray[randIndex]] = [
      shuffledArray[randIndex],
      shuffledArray[i],
    ];
  }
  return shuffledArray
}

export default shuffleArray;