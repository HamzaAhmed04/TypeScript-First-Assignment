function car_info(manufacturer: string, model: string, ...options: any[]): any {
  let car: any = {
    manufacturer: manufacturer,
    model: model
  };

  for (let option of options) {
    let [key, value] = option;
    car[key] = value;
  }

  return car;
}

let car = car_info('Toyota', 'Camry', ['color', 'blue'], ['year', 2022], ['sunroof', true]);

console.log(car);