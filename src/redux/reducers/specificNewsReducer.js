const initialState = {
   q: '',
   from: '0-0-0',
   to: '0-0-0',
   sortBy: 'relevancy',
   page: 1,
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

export const specificNewsReducer = (state = initialState, {type, payload}) => {
   switch (type) {
      // case:
         
   
      default:
         return state
   }
}