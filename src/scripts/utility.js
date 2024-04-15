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

export { fetchAll, createRandIntArray };