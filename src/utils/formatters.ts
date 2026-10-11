export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("ar-EG", {
    style: "currency",
    currency: "EGP",
    maximumFractionDigits: 0,
  }).format(amount);
};

export const DiscountCalc = (
  currentPrice: number,
  originalPrice: number,
  locale: string = "ar-EG",
) => {
  if (!originalPrice || originalPrice <= currentPrice) return "";
  const discount = (originalPrice - currentPrice) / originalPrice;
  const format = new Intl.NumberFormat(locale, {
    style: "percent",
    maximumFractionDigits: 0,
  }).format(discount);
  return format;
};
