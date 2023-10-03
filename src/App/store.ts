import { configureStore } from '@reduxjs/toolkit'
import FavoriteReducer from '../Feature/Favorite/favoriteSlice';
import CartReducer from '../Feature/Cart/cartSlice'
export const store = configureStore({
  reducer: {
    favorite: FavoriteReducer,
    cart:CartReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch