import { FETCH_ARTICLES, INPUT_VALUE_CHANGE, SET_IS_LOADING } from "../actions/types"

const initialState = {
   isLoading: false,
   inputValue: '',
   totalResults: 0,
   articles: [
      {
         source: {
            id: null,
            name: ''
         },
         author: '',
         title: '',
         description: '',
         url: '',
         urlToImage: '',
         publishedAt: '',
         content: ''
      },
   ],
}

export const globalNewsReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case FETCH_ARTICLES:
         return {
            ...state,
            articles: payload.articles,
            totalResults: payload.totalResults  
         }
      case SET_IS_LOADING:
         return {
            ...state,
            isLoading: payload
         }
      default:
         return state
   }
}
