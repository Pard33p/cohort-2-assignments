/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let amountMap = {};
  for (let i = 0; i < transactions.length; i++) {
    let obj = transactions[i];
    let {category,price} = obj;
    amountMap[category] = amountMap[category] || 0;
    amountMap[category] += price;
  }
  let output = [];
  Object.entries(amountMap).forEach(([key, value]) => {
    output.push({category: key, totalSpent: value});
  })
  return output;
}

module.exports = calculateTotalSpentByCategory;
