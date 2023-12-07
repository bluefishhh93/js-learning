const catsAPI = 'https://api.thecatapi.com/v1/breeds'


//Read the cats api and find the average weight of cat in metric unit.
fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    const averageWeights = {};

    data.forEach(cat => {
      const { name, weight } = cat;
      const [minWeight, maxWeight] = weight.metric.split(' - ').map(parseFloat);
      const averageWeight = (minWeight + maxWeight) / 2;

      averageWeights[name] = averageWeight;
    });

    console.log('Average weights:', averageWeights);
  })
  .catch(error => console.log(error));
