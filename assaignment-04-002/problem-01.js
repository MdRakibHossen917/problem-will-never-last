function calculateVAT(price) {
  if (typeof price !== "number" || price <= 0) {
    return "Invalid";
  } else {
    price = (price * 7.5) / 100;
    return price;
  }
}

const netPrice = calculateVAT("foo");
console.log(netPrice);
