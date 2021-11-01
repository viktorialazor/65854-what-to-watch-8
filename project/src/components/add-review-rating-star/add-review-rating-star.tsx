import React from 'react';

type AddReviewRatingStarProps = {
  id: number;
  handleRatingChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

function AddReviewRatingStar({id, handleRatingChange}: AddReviewRatingStarProps): JSX.Element {
  return (
    <React.Fragment>
      <input onChange={handleRatingChange} className="rating__input" id={`star-${id + 1}`} type="radio" name="rating" value={`${id + 1}`}/>
      <label className="rating__label" htmlFor={`star-${id + 1}`}>{`Rating ${id + 1}`}</label>
    </React.Fragment>
  );
}

export default AddReviewRatingStar;
