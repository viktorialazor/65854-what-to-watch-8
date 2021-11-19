import React, {useState} from 'react';
import {RATING_STAR_AMOUNT} from '../../const';
import AddReviewRatingStar from '../add-review-rating-star/add-review-rating-star';

function AddReviewForm(): JSX.Element {
  const [formData, setFormData] = useState({rating: '', text: ''});
  const [starChecked, setStarChecked] = useState(8);

  const ratingStarts = new Array(RATING_STAR_AMOUNT).fill(null);

  const handleRatingChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setStarChecked(Number(evt.target.value));
    setFormData({
      ...formData,
      rating: evt.target.value,
    });
  };

  const handleTextChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      text: evt.target.value,
    });
  };

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {
            ratingStarts.map((item, index) => <AddReviewRatingStar  key={item} id={RATING_STAR_AMOUNT - index} isChecked={starChecked === RATING_STAR_AMOUNT - index} handleRatingChange={handleRatingChange}/>)
          }
        </div>
      </div>

      <div className="add-review__text">
        <textarea onChange={handleTextChange} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default AddReviewForm;
