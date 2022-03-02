import "./style.css";

const AddBookReview = ({ reviewText, setReviewText }) => {
  return (
    <textarea
      placeholder="Enter book review here"
      rows={6}
      onChange={(e) => setReviewText(e.target.value)}
      value={reviewText}
    />
  );
};

export default AddBookReview;
