import { getBooksFromStore, getLoggedInUser } from "./api-service";
import "./App.css";
import Book from "./components/book/book";

const App = () => {
  const userName = getLoggedInUser();
  const listOfBooks = getBooksFromStore();

  return (
    <div className="app-wrapper">
      <h1>Welcome to the bookstore, {userName}!</h1>

      {listOfBooks.map((book) => (
        <Book
          key={book.id}
          name={book.name}
          author={book.author}
          reviews={book.reviews}
        />
      ))}
    </div>
  );
};

export default App;
