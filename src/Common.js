function calculateMean(data) {
    const sum = data.reduce((acc, value) => acc + value, 0);
    return sum / data.length;
  }
  
  function calculateMedian(data) {
    const sortedData = [...data].sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);
  
    if (sortedData.length % 2 === 0) {
      return (sortedData[middle - 1] + sortedData[middle]) / 2;
    } else {
      return sortedData[middle];
    }
  }
  
  function calculateMode(data) {
    const frequencyMap = {};
  
    for (const value of data) {
      if (!frequencyMap[value]) {
        frequencyMap[value] = 0;
      }
      frequencyMap[value]++;
    }
  
    let mode;
    let maxFrequency = 0;
  
    for (const value in frequencyMap) {
      if (frequencyMap[value] > maxFrequency) {
        mode = parseFloat(value);
        maxFrequency = frequencyMap[value];
      }
    }
  
    return mode;
}  

export function calculateStatistics(data) {
    const Statistics = {};

  for (const wine of data) {
    const alcoholClass = wine["Alcohol"];
    const flavanoids = parseFloat(wine["Flavanoids"]);

    if (!isNaN(flavanoids)) {
      if (!Statistics[alcoholClass]) {
        Statistics[alcoholClass] = [];
      }
      Statistics[alcoholClass].push(flavanoids);
    }
  }

  // Calculate statistics for each class
  for (const key in Statistics) {
    const classData = Statistics[key];
    Statistics[key] = {
      mean: calculateMean(classData),
      median: calculateMedian(classData),
      mode: calculateMode(classData),
    };
  }

  return Statistics;
  }

export  const calculateStatisticsGamma = (data) => {
    // Create an object to store class-wise statistics
    const Statistics = {};

    data.forEach((wine) => {
        const gamma = (wine.Ash * wine.Hue) / wine.Magnesium;
        const className = wine.Alcohol;

        // Initialize an array for each class if not exists
        if (!Statistics[className]) {
            Statistics[className] = [];
        }

        // Add the calculated Gamma to the class
        Statistics[className].push(gamma);
    });

    // Calculate mean, median, and mode for each class
    Object.keys(Statistics).forEach((className) => {
        const classData = Statistics[className];

        // Calculate mean
        const mean =
            classData.reduce((acc, curr) => acc + curr, 0) / classData.length;

        // Calculate median
        const sortedData = classData.slice().sort((a, b) => a - b);
        const middle = Math.floor(sortedData.length / 2);
        const median =
            sortedData.length % 2 === 0
                ? (sortedData[middle - 1] + sortedData[middle]) / 2
                : sortedData[middle];

        // Calculate mode
        const modeMap = {};
        let maxCount = 0;
        let mode = null;
        classData.forEach((value) => {
            if (!modeMap[value]) {
                modeMap[value] = 1;
            } else {
                modeMap[value]++;
            }
            if (modeMap[value] > maxCount) {
                maxCount = modeMap[value];
                mode = value;
            }
        });

        Statistics[className] = {
            Mean: mean.toFixed(3), 
            Median: median.toFixed(3), 
            Mode: mode.toFixed(3), 
        };
    });

    return Statistics;
};