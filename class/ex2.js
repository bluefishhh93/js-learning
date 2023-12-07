class Statistics {
    constructor(data) {
      this.data = data;
    }
  
    count() {
      return this.data.length;
    }
  
    sum() {
      return this.data.reduce((acc, val) => acc + val, 0);
    }
  
    min() {
      return Math.min(...this.data);
    }
  
    max() {
      return Math.max(...this.data);
    }
  
    range() {
      return this.max() - this.min();
    }
  
    mean() {
      const sum = this.sum();
      const count = this.count();
      return sum / count;
    }
  
    median() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const count = this.count();
      const middleIndex = Math.floor(count / 2);
  
      if (count % 2 === 0) {
        const medianValue = (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
        return medianValue;
      } else {
        return sortedData[middleIndex];
      }
    }
  
    mode() {
      const frequency = {};
      this.data.forEach((value) => {
        frequency[value] = frequency[value] ? frequency[value] + 1 : 1;
      });
  
      let mode = null;
      let maxCount = 0;
  
      for (const value in frequency) {
        if (frequency[value] > maxCount) {
          mode = value;
          maxCount = frequency[value];
        }
      }
  
      return { mode: Number(mode), count: maxCount };
    }
  
    var() {
      const mean = this.mean();
      const squaredDifferences = this.data.map((value) => (value - mean) ** 2);
      const variance = this.sumArray(squaredDifferences) / this.count();
      return variance;
    }
  
    std() {
      const variance = this.var();
      const standardDeviation = Math.sqrt(variance);
      return standardDeviation;
    }
  
    freqDist() {
      const frequency = {};
      this.data.forEach((value) => {
        frequency[value] = frequency[value] ? frequency[value] + 1 : 1;
      });
  
      const freqDist = [];
      for (const value in frequency) {
        freqDist.push([value, frequency[value]]);
      }
  
      freqDist.sort((a, b) => b[1] - a[1]);
      return freqDist;
    }
  
    describe() {
      const count = this.count();
      const sum = this.sum();
      const min = this.min();
      const max = this.max();
      const range = this.range();
      const mean = this.mean();
      const median = this.median();
      const mode = this.mode();
      const variance = this.var();
      const std = this.std();
      const freqDist = this.freqDist();
  
      return `
      Count: ${count}
      Sum: ${sum}
      Min: ${min}
      Max: ${max}
      Range: ${range}
      Mean: ${mean}
      Median: ${median}
      Mode: (${mode.mode}, ${mode.count})
      Variance: ${variance}
      Standard Deviation: ${std}
      Frequency Distribution: ${freqDist}`;
    }
  
    sumArray(array) {
      return array.reduce((acc, val) => acc + val, 0);
    }
  }
  
  const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
  const statistics = new Statistics(ages);
  
  console.log('Count:', statistics.count()); // Output: 25
  console.log('Sum: ', statistics.sum()); // Output: 744
  console.log('Min: ', statistics.min()); // Output: 24
  console.log('Max: ', statistics.max()); // Output: 38
  console.log('Range: ', statistics.range()); // Output: 14
  console.log('Mean: ', statistics.mean()); // Output: 30
  console.log('Median: ', statistics.median()); // Output: 29
  console.log('Mode: ', statistics.mode()); // Output: { mode: 26, count: 5 }
  console.log('Variance: ', statistics.var()); // Output: 17.5
  console.log('Standard Deviation: ', statistics.std()); // Output: 4.2
  console.log('Frequency Distribution: ', statistics.freqDist()); // Output: [[26, 5], [27, 5], [32, 4], [37, 2], [34, 2], [33, 2], [31, 2], [24, 2], [38, 1], [29, 1], [25, 1]]
  console.log(statistics.describe());
  