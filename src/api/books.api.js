const BOOKS = [
  {
    id: 1,
    title: "1984",
    author: "George Orwell",
    cover: "https://example.com/1984.jpg",
    rate: "4.2",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover: "https://example.com/mock.jpg",
    rate: "4.3",
  },
  {
    id: 3,
    title: "We",
    author: "Замятин",
    cover: "https://example.com/1984.jpg",
    rate: "4.2",
  },
  {
    id: 4,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover: "https://example.com/mock.jpg",
    rate: "4.3",
  },
  {
    id: 5,
    title: "Harry Potter",
    author: "J.K. Rowling",
    cover: "https://example.com/mock.jpg",
    rate: "10",
  },
];
export const getBooks = () =>
  new Promise((res) => {
    setTimeout(() => {
      res(BOOKS);
    }, 500);
  });
