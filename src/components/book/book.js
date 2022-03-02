import { useState } from "react";
import { Button } from "react-bootstrap";
import AddReview from "./add-review";

const Book = ({ name, author, reviews }) => {
  const [isBookReviewVisible, setBookReviewVisible] = useState(false);

  const [bookReviews, setBookReviews] = useState(reviews);

  const closeReviewModal = () => {
    setBookReviewVisible(false);
  };
  const openReviewModal = () => {
    setBookReviewVisible(true);
  };

  const saveReview = (review) => {
    const updatedBookReviews = [...bookReviews, review];
    setBookReviews(updatedBookReviews);

    closeReviewModal();
  };

  return (
    <div className="book-wrapper">
      <b>{name}</b>
      <div>{author}</div>

      {bookReviews.length > 0 && (
        <div className="reviews-wrapper">
          <h6 className="review-title">Reviews:</h6>
          <ul>
            {bookReviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
        </div>
      )}

      <Button
        className="add-review-button"
        variant="secondary"
        onClick={openReviewModal}
      >
        Add Review
      </Button>

      {isBookReviewVisible && (
        <AddReview
          onCloseReviewModal={closeReviewModal}
          onSaveReview={saveReview}
        />
      )}
    </div>
  );
};
export default Book;
