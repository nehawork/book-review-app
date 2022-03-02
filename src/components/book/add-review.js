import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./style.css";

const AddReview = ({
  bookName,
  bookAuthor,
  onCloseReviewModal,
  onSaveReview,
}) => {
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
        <div>
          <b>{bookName}</b>
          <div>{bookAuthor}</div>
        </div>

        <hr />

        <textarea
          placeholder="Enter book review here"
          rows={6}
          onChange={(e) => setReviewText(e.target.value)}
          value={reviewText}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onSubmit}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddReview;
