export const formatPrice = (number) => {
  return new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "RUB",
  }).format(number);
};
