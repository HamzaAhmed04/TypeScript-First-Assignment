function population_size(population: number): string {
  if (population > 1000000000) {
    return 'large';
  } else if (population > 1000000) {
    return 'medium';
  } else {
    return 'small';
  }
}

function describe_country(country: string, population: number, capital: string) {
  let size = population_size(population);
  console.log(`${country} has a population of ${population} and its capital is ${capital}. It is a ${size} country.`);
}

describe_country('China', 1403500365, 'Beijing');
describe_country('Australia', 25649909, 'Canberra');
describe_country('Germany', 83149300, 'Berlin');