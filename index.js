export default function solution(content){
  const data = content.split("\n").slice(1, -1);

  const dataLength = data.length;
  console.log(`Count: ${dataLength}`);

  const cities = [...new Set(data.map(item => item.split(',')[7]).sort())];
  console.log(`Cities: ${cities.join(", ")}`);

  const minTemp = Math.min(...data.map(item => item.split(",")[3]));
  const maxTemp = Math.max(...data.map(item => item.split(",")[3]));
  console.log(`Humidity: Min: ${minTemp}, Max: ${maxTemp}`);

  const tempSort = [...data].sort((a, b) => b.split(",")[1] - a.split(",")[1])[0];
  const hottestCity = tempSort.split(',');
  console.log(`HottestDay: ${hottestCity[0]} ${hottestCity[7]}`);

  const temps = data.reduce((acc, value) => {
    const city = value.split(',');
    acc[city[7]] = [...(acc[city[7]] ?? []), city[1]];
    return acc;
  }, {});
  const averageTemps = Object.entries(temps).map(item => [item[0], item[1].reduce((acc, value) => Number(value) + acc, 0) / 4]);
  const maxAverageTemp = [...averageTemps].sort((a, b) => b[1] - a[1]);
  console.log(`HottestCity: ${maxAverageTemp[0][0]}`);
}