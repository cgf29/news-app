import axios from 'axios'
import { FETCH_ARTICLES, INPUT_VALUE_CHANGE, SET_IS_LOADING } from './types'

export const changeInputValue = (text) => ({
   type: INPUT_VALUE_CHANGE,
   payload: text,
})

export const setIsLoading = (bool) => ({
   type: SET_IS_LOADING,
   payload: bool,
})

export const fetchArticles = (q, country, category, page = 1, isLoading) => (dispatch) => {
   isLoading && dispatch(setIsLoading(true))
   let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&apiKey=bd410d366cd849469075baf8ca51b855`;
   if(q && country && category){
      url = `https://newsapi.org/v2/top-headlines?q=${q}&country=${country}&category=${category}&page=${page}&apiKey=bd410d366cd849469075baf8ca51b855`
   } else if (q && country){
      url = `https://newsapi.org/v2/top-headlines?q=${q}&country=${country}&page=${page}&apiKey=bd410d366cd849469075baf8ca51b855`
   } else if (q && category){
      url = `https://newsapi.org/v2/top-headlines?q=${q}&category=${category}&page=${page}&apiKey=bd410d366cd849469075baf8ca51b855`
   } else if (q && !country && !category) {
      url = `https://newsapi.org/v2/top-headlines?q=${q}&page=${page}&apiKey=bd410d366cd849469075baf8ca51b855`
   } else if (country && !category && !q) {
      url = `https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&apiKey=bd410d366cd849469075baf8ca51b855`
   } else if (category && !country && !q) {
      url = `https://newsapi.org/v2/top-headlines?category=${category}&page=${page}&apiKey=bd410d366cd849469075baf8ca51b855`
   }
   axios
      .get(
         url
         // q && `https://newsapi.org/v2/top-headlines?q=${q}&page=${page}&apiKey=6993e34a005343a8ae848187ee950744`
         // (country && category && `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&apiKey=6993e34a005343a8ae848187ee950744`)
         // q
         //    ? country && category
         //       ?  `https://newsapi.org/v2/top-headlines?q=${q}&country=${country}&category=${category}&page=${page}&apiKey=6993e34a005343a8ae848187ee950744`
         //       : (country ? `https://newsapi.org/v2/top-headlines?q=${q}&country=${country}&page=${page}&apiKey=6993e34a005343a8ae848187ee950744` : `https://newsapi.org/v2/top-headlines?q=${q}&category=${category}&page=${page}&apiKey=6993e34a005343a8ae848187ee950744` )
         //       : `https://newsapi.org/v2/top-headlines?q=${q}&page=${page}&apiKey=6993e34a005343a8ae848187ee950744`
         //    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&apiKey=6993e34a005343a8ae848187ee950744`,
      )
      .then((res) => {
         dispatch({
            type: FETCH_ARTICLES,
            payload: {
               articles: res.data.articles,
               totalResults: res.data.totalResults,
               newTopic: page > 1 ? false : true
            },
         })
         console.log(res)
         isLoading && dispatch(setIsLoading(false))
      })
}
