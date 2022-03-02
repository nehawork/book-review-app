import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AddBookReview from "./add-book-review";
import "./style.css";

const AddReview = ({ onCloseReviewModal, onSaveReview }) => {
  const [reviewText, setReviewText] = useState("");

  const onSubmit = () => {
    onSaveReview(reviewText);
  };

  return (
    <Modal
      show="show"
      onHide={onCloseReviewModal}
      dialogClassName="review-modal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Review</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <AddBookReview reviewText={reviewText} setReviewText={setReviewText} />
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onSubmit}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddReview;
