import React from 'react';

type AddReviewRatingStarProps = {
  id: number;
  isChecked: boolean;
  handleRatingChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

function AddReviewRatingStar({id, isChecked, handleRatingChange}: AddReviewRatingStarProps): JSX.Element {
  return (
    <React.Fragment>
      <input onChange={handleRatingChange} className="rating__input" checked={isChecked} id={`star-${id}`} type="radio" name="rating" value={id}/>
      <label className="rating__label" htmlFor={`star-${id}`}>{`Rating ${id}`}</label>
    </React.Fragment>
  );
}

export default AddReviewRatingStar;
