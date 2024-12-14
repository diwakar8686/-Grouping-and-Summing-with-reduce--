const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
const categoryCount = categories.reduce((acc, category) => {
  acc[category] = (acc[category] || 0) + 1;
  return acc;
}, {});

console.log(categoryCount);
const sortedCategories = Object.entries(categoryCount)
  .sort((a, b) => b[1] - a[1])
  .map(([category, count]) => ({ category, count }));

console.log(sortedCategories);
