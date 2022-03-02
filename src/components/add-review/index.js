import { Button, Modal } from "react-bootstrap";
import "./style.css";

const AddReview = ({ onCloseReviewModal, onSaveReview }) => {
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

      <Modal.Body></Modal.Body>

      <Modal.Footer>
        <Button>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddReview;
