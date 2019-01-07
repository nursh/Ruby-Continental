const imgSrc = (category) => category.toLowerCase().replace(/\s/g, '-');

const menuCategories = (categories) => {
  return categories.map(category => {
      const name = category.replace(/_/g, ' ');
      const src = imgSrc(name);
      return { name, src, category }
  });
}

export default menuCategories;