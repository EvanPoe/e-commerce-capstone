// "give me the categories array, and reduce over it"
// instead of a snapshot, we are going to get the actual category object
// we no longer need to fetch off of the data, because it's already the data
export const selectCategoriesMap = (state) =>
  state.categories.categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
