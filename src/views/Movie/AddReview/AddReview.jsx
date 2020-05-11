import React, {useState} from "react";

import Button from "../../../components/Button";
import SingleReview from "../../../components/SingleReview";

import "./AddReview.scss";

const AddReview = ({
    onCancelReview,
    onAddingReview
  }) => {

  const [inputText, setInputText] = useState('');

  const resetReview = () => {
    onCancelReview();
  }

  const updateInputText = (event) => {
    const { value } = event.target;
    setInputText(value);
  }

  const addingReview = (contentData) => {
    onAddingReview(contentData);
  }

  return (
    <form
      className="add-review"
    >
      <textarea
        className="add-review-textarea"
        placeholder="Start typing..."
        rows="1"
        value = {inputText}
        onChange = {updateInputText}
      />
      <div className="add-review-actions">
        <Button
          onClick={() => resetReview()}
          type="reset"
          secondary
        >
          Cancel
        </Button>
        <Button 
          onClick={() => {
            addingReview(inputText)
            resetReview()}
          }
          type="submit" active>
          Add review
        </Button>
      </div>
      {inputText.length > 0 && (
          <SingleReview preview content={inputText}  />
        )
      }
    </form>
  );
};

export default AddReview;
