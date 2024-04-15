const fetchJson = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const fetchAll = async (pokemonURLArray) => {
  const allData = await Promise.all(
    pokemonURLArray.map((url) => fetchJson(url)),
  );
  return allData;
};

const getRandIntInclusive = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

const createRandIntArray = (num) => {
  let outputArray = [];
  while (outputArray.length < num) {
    let randInt = getRandIntInclusive(1, 151);
    if (!outputArray.includes(randInt)) {
      outputArray.push(randInt);
    }
  }
  return outputArray;
};

const capitalizeFirst = (input) => {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

const randomizeArrayOrder = (inputArr) => {
  let outputArr = [];
  while (inputArr.length > 0) {
    let randIndex = getRandIntInclusive(0, inputArr.length - 1);
    outputArr.push(inputArr[randIndex]);
    inputArr.splice(randIndex, 1);
  }
  return outputArr;
}

export { fetchAll, createRandIntArray, capitalizeFirst, randomizeArrayOrder };
