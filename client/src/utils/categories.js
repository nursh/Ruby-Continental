const categories = [
  "Breakfast",
  "Main Dish",
  "Soups",
  "Bites",
  "Rice Dishes",
  "African Hot Pot",
  "Delights",
  "Cold Starter",
  "Peppered Bites",
  "Pet Drinks",
  "Bottle Drinks",
  "Can Drinks",
  "Juice"
]

const imgSrc = (category) => category.toLowerCase().replace(/\s/g, '-');

const menuCategories = () => categories.map(cat => ({ name: cat, src: imgSrc(cat) }));

export default menuCategories;