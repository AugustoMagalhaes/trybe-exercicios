const productCost = 100;
const productSellPrice = 150;
const productProfit = productSellPrice - (1.2 * productCost);
const amountSold = 1000;

console.log(`O lucro da empresa na venda de ${amountSold} itens é de R$ ${amountSold * productProfit}.`);