export const getBooks = async (page, limit) => {
  const resp = await fetch(`http://localhost:3000/books?_page=${page}&_per_page=${limit}`);
  const data = await resp.json();
  return data;
};

export const getFavoriteBooks = async (rating) => {
  const resp = await fetch(`http://localhost:3000/books?rate_gte=${rating}`);
  const data = await resp.json();
  return data;
};
