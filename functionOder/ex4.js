const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

const statistic = {
  data: ages,

  count: function () {
    return this.data.length;
  },

  sum: function () {
    return this.data.reduce((total, value) => (total += value), 0);
  },

  min: function () {
    return Math.min(...this.data);
  },

  max: function () {
    return Math.max(...this.data);
  },

  range: function () {
    return this.max() - this.min();
  },

  mean: function () {
    return this.sum() / this.count();
  },

  median: function () {
    const sortedData = this.data.slice().sort((a, b) => a - b);

    if (sortedData.length % 2 === 0) {
      let index = sortedData.length / 2;
      return (sortedData[index] + sortedData[index - 1]) / 2;
    } else {
      let index = (sortedData.length - 1) / 2;
      return sortedData[index];
    }
  },

  mode: function () {
    const frequency = {}; //doi tuong rong
    this.data.forEach(function (value) {
      if (frequency[value]) {
        frequency[value]++;
      } else {
        frequency[value] = 1;
      }
    });
    let mod = [];
    let maxfrequency = 0;
    for (const value in frequency) {
      if (frequency[value] > maxfrequency) {
        mode = [value];
        maxfrequency = frequency[value];
      } else if (frequency[value] === maxfrequency) {
        //truong hop 2 thang max
        modes.push(value);
      }
    }
    return {
      mode: modes,
      count: maxFrequency,
    };
  },
  /* 
        Cach 2
        mode: function () {
         const frequency = new Map();
        let maxCount = 0;
        let modes = [];

        this.data.forEach((value) => {
      if (!frequency.has(value)) {
        frequency.set(value, 0);
      }
      frequency.set(value, frequency.get(value) + 1);
      if (frequency.get(value) > maxCount) {
        maxCount = frequency.get(value);
        modes = [value];
      } else if (frequency.get(value) === maxCount) {
        modes.push(value);
      }
    });

    return { mode: modes, count: maxCount };
  },
    
    */

  var: function () {
    const mean = this.mean();
    const squaredDifferences = this.data.map((value) => (value - mean) ** 2);
    return (
      squaredDifferences.reduce((total, value) => total + value, 0) /
      this.count()
    );
  },

  std: function () {
    return Math.sqrt(this.var());
  },

  freqDist: function () {
    const frequency = new Map();
    this.data.forEach((value) => {
      if (!frequency.has(value)) {
        frequency.set(value, 0);
      }
      frequency.set(value, frequency.get(value) + 1);
    });
    return [...frequency.entries()].map(([value, count]) => [count, value]);
  },

  describe: function () {
    return `Count: ${this.count()}
    Sum: ${this.sum()}
    Min: ${this.min()}  
    Max: ${this.max()}
    Range: ${this.range()}
    Mean: ${this.mean()}
    Median: ${this.median()}
    Mode: ${JSON.stringify(this.mode())}
    Variance: ${this.var()}
    Standard Deviation: ${this.std()}
    Frequency Distribution: ${JSON.stringify(this.freqDist())}`;
  },
};
