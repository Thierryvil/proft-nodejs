/* eslint-disable guard-for-in */
/* eslint-disable require-jsdoc */
export function organizeSalesBySeller(sales, date) {
  const organized = {};
  sales.map((sale) => {
    const {date, seller, sold} = sale;
    if (!(seller in organized)) {
      organized[seller] = [];
    }
    organized[seller].push({date, seller, sold});
  });

  const allSalesBySeller = [];
  for (const seller in organized) {
    const count = organized[seller].length;
    const allSold = organized[seller].map(
        (sale) => sale.sold).reduce((total, amount) => total + amount);
    allSalesBySeller.push({
      date: date,
      seller,
      sold: allSold,
      sales: count,
    });
  }
  return allSalesBySeller;
}
