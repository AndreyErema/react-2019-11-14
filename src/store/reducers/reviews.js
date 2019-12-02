import {normalizedReviews} from '../../fixtures'

const initialState = normalizedReviews.reduce((reviews, review, userId) => {
  return {
    ...reviews,
    [review.id]: review,
    [review.userId]: userId,
  }
}, {})

export const reviewsReducer = (reviewsState = initialState, action) => {
  return reviewsState
}
