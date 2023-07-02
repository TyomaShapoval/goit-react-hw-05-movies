import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Author,
  NoReviewsText,
  Review,
  ReviewHeader,
  ReviewList,
  ReviewListItem,
  Wrapper,
} from './Reviews.styled';

import axios from 'axios';

const baseURL = 'https://api.themoviedb.org';
const API_KEY = "d6e689e53b61040192ebd16d8765557a";

const Reviews = () => {
  const { movieId } = useParams(); 
  const [reviews, setReviews] = useState([]); // додаємо стейт для відгуків

  // додаємо запит на відгуки
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await axios.get(
            `${baseURL}/3/movie/${movieId}}/reviews?api_key=${API_KEY}&language=en-US&page=1`
          );
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <Wrapper>
      <ReviewHeader>Reviews</ReviewHeader>

      {/* додаємо перевірку на наявність відгуків */}
      {reviews.length ? (
        <ReviewList className="reviews-container">
          {reviews.map(review => (
            <ReviewListItem className="review-card" key={review.id}>
              <Author>Author: {review.author}</Author>
              <Review>{review.content}</Review>
            </ReviewListItem>
          ))}
        </ReviewList>
      ) : (
        <NoReviewsText>
          We don't have any reviews for this movie yet.
        </NoReviewsText>
      )}
    </Wrapper>
  );
};
export default Reviews;
