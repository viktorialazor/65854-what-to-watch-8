import React, {useRef, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import {setFormLockType} from '../../types/films';
import {RATING_STAR_AMOUNT, RATING_BY_DEFAULT, MIN_RATING, MIN_CHARACTERS, MAX_CHARACTERS} from '../../const';
import {addCommentAction, fetchCommentsAction} from '../../store/api-actions';
import AddReviewRatingStar from '../add-review-rating-star/add-review-rating-star';
import {getFilm} from '../../store/film-data/selectors';

type AddReviewFormProps = {
  onBackToMovie: () => void;
}

function AddReviewForm({onBackToMovie}: AddReviewFormProps): JSX.Element {
  const film = useSelector(getFilm);
  const [formData, setFormData] = useState({rating: RATING_BY_DEFAULT, text: ''});
  const [starChecked, setStarChecked] = useState(RATING_BY_DEFAULT);

  const ratingStarts = new Array(RATING_STAR_AMOUNT).fill(null);

  const dispatch = useDispatch();

  const onSubmit = (id: number, comment: string, rating: number, setFormLock: setFormLockType) => {
    dispatch(addCommentAction(id,{rating, comment}, setFormLock));
    dispatch(fetchCommentsAction(id));
  };

  const handleRatingChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setStarChecked(Number(evt.target.value));
    setFormData({
      ...formData,
      rating: Number(evt.target.value),
    });
  };

  const handleTextChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      text: evt.target.value,
    });
  };

  const divRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const setFormLock = (isSend: boolean) => {
    if (isSend) {
      divRef.current?.classList.add('disabled');
      textareaRef.current?.classList.add('disabled');
    } else {
      divRef.current?.classList.remove('disabled');
      textareaRef.current?.classList.remove('disabled');
    }
  };

  const handleSubmit = () => {
    if (film?.id !== undefined && (formData.text.length > MIN_CHARACTERS && formData.text.length < MAX_CHARACTERS) && formData.rating !== MIN_RATING) {
      onSubmit(film?.id, formData.text, formData.rating, setFormLock);
      onBackToMovie();
    } else {
      toast.info('Введите комментарий (50 - 400 символов)');
    }
  };

  return (
    <form action="" className="add-review__form">
      <div className="rating">
        <div ref={divRef} className="rating__stars">
          {
            ratingStarts.map((item, index) => item = index).map((item, index) => <AddReviewRatingStar  key={item} id={RATING_STAR_AMOUNT - index} isChecked={starChecked === RATING_STAR_AMOUNT - index} handleRatingChange={handleRatingChange}/>)
          }
        </div>
      </div>

      <div className="add-review__text">
        <textarea ref={textareaRef} onChange={handleTextChange} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
        <div className="add-review__submit">
          <Link onClick={(evt) => {evt.preventDefault(); handleSubmit();}} to='/' className="add-review__btn" type="submit">Post</Link>
        </div>

      </div>
    </form>
  );
}

export default AddReviewForm;
