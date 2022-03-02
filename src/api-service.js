function getLoggedInUser() {
  // API Call will occur which will fetch loggedIn User
  // const userName = httpClient.fetchLoggedInUserInfo();

  const userName = "John";
  // const userName = undefined;
  if (userName) {
    return userName;
  } else {
    return "My Friend";
  }
}

function getBooksFromStore() {
  // API Call will occur which will fetch book User
  // const listOfBooks = httpClient.fetchBooks();
  const listOfBooks = [
    {
      id: 1,
      name: "The Alchemist",
      author: "Paulo Coelho",
      reviews: [],
    },
    {
      id: 2,
      name: "The God of Small Things",
      author: "Arundhati Roy",
      reviews: [],
    },
    {
      id: 3,
      name: "The Notebook",
      author: "Nicholas Sparks",
      reviews: [],
    },
    {
      id: 4,
      name: "Fault in our stars",
      author: "John green",
      reviews: [],
    },
    {
      id: 5,
      name: "Power of subconcious mind",
      author: "Joseph murphy",
      reviews: [],
    },
    {
      id: 6,
      name: "Think and grow rich",
      author: "Napoleon hill",
      reviews: [],
    },
    {
      id: 7,
      name: "Harry potter and the philosopher's stone",
      author: "J K rowling",
      reviews: [],
    },
  ];

  return listOfBooks;
}

export { getLoggedInUser, getBooksFromStore };
