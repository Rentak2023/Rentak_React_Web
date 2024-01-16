export function filterMinPrice(properties) {
  if (properties.length === 0) {
    return []; // Handle empty array case
  }

  let minPrice = properties[0].price;

  // Find the minimum price
  for (let i = 1; i < properties.length; i++) {
    if (properties[i].price < minPrice) {
      minPrice = properties[i].price;
    }
  }

  // Filter objects with the minimum price
  const minPriceObjects = properties.filter(product => product.price === minPrice);

  return minPrice;
}

export function filterMaxPrice(properties) {
  if (properties.length === 0) {
    return []; // Handle empty array case
  }

  let maxPrice = properties[0].price;

  // Find the minimum price
  for (let i = 1; i < properties.length; i++) {
    if (properties[i].price > maxPrice) {
      maxPrice = properties[i].price;
    }
  }

  // Filter objects with the minimum price
  const maxPriceObjects = properties.filter(product => product.price === maxPrice);

  return maxPrice;
}