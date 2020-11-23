import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArticles } from '../../redux/actions/searchAtions'
import { getArticles, getIsLoading, getTotalResults } from '../../redux/selectors'
import Article from '../../components/Article'
import { useHistory } from 'react-router'
import loadingGif from '../../components/2.gif'
import './GlobalNews.css'

const GlobalNews = () => {
   const [selectedCountry, setSelectedCountry] = useState('ua')
   const [selectedCategory, setSelectedCategory] = useState('general')
   const [inputValue, setInputValue] = useState('')
   const [fetching, setFetching] = useState(true)
   const [currentPage, setCurrentPage] = useState(1)
   const [pages, setPages] = useState(1)
   const dispatch = useDispatch()
   const history = useHistory()

   const articles = useSelector(getArticles)
   const isLoading = useSelector(getIsLoading)
   const totalResults = useSelector(getTotalResults)

   // const scrollHandler = (e) => {
   //    if (
   //       e.target.documentElement.scrollHeight -
   //          (e.target.documentElement.scrollTop + window.innerHeight) < 100 && totalResults > articles.length
   //    ) {
   //       dispatch(fetchArticles(inputValue, selectedCountry, selectedCategory, currentPage))
   //    }
   // }

   // document.addEventListener('scroll', scrollHandler)

   useEffect(() => {
      dispatch(fetchArticles(inputValue, selectedCountry, selectedCategory, currentPage))
   }, [])

   // useEffect(() => {
   //    if (fetching ) {
   //       dispatch(fetchArticles(inputValue, selectedCountry, selectedCategory, currentPage))
   //       setCurrentPage(currentPage + 1)
   //       setFetching(false)
   //       console.log(pages ,currentPage);
         
   //    }
   // }, [fetching,])

   // useEffect(() => {
   //    document.addEventListener('scroll', scrollHandler)
   //    return () => {
   //       document.removeEventListener('scroll', scrollHandler)
   //    }
   // }, [])

   

   const searchArticles = (q, country, category) => {
      // e.prevantDefault()

      dispatch(fetchArticles(q, country, category, 1, true))
      // let url = ``
      // history.push(
         // q
         //    ? country && category
         //       ? `q=${q}&country=${country}&category=${category}`
         //       : `q=${q}`
         //    : `country=${country}&category=${category}`,
      //    url
      // )
   }

   return (
      <div className='global-news'>
         {isLoading ? (
            <div className='loading-screen'>
               <img src={loadingGif} alt='loading' />
            </div>
         ) : (
            <div>
               <div className='top'>
                  <div className='top__input'>
                     <input
                        type='text'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder='Find some news'
                     />
                  </div>
                  
                  <div className='top__select-country'>
                     <label htmlFor='select-country'>Your country:</label>
                     <select
                        id='select-country'
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        defaultValue={selectedCountry}
                     >
                        <option value='ua'>Ukraine</option>
                        <option value='us'>USA</option>
                        <option value='bg'>Bulgaria</option>
                        <option value=''>None</option>
                     </select>
                  </div>
                  <div className='select-category'>
                     <label htmlFor='select-category'>Category:</label>
                     <select
                        id='select-category'
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        defaultValue={selectedCategory}
                     >
                        <option value='business'>business</option>
                        <option value='entertainment'>entertainment</option>
                        <option value='general'>general</option>
                        <option value='health'>health</option>
                        <option value='science'>science</option>
                        <option value='sports'>sports</option>
                        <option value='technology'>technology</option>
                        <option value=''>None</option>
                     </select>
                  </div>

                  <button
                     onClick={() =>
                        searchArticles(
                           inputValue,
                           selectedCountry,
                           selectedCategory,
                        )
                     }
                  >
                     Search
                  </button>
               </div>
               <div className='main-feed'>
                  {articles.map((article, index) => (
                     <Article
                        key={index}
                        title={article.title}
                        sourceId={article.sourceId}
                        sourceName={article.sourceName}
                        author={article.author}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}
                        publishedAt={article.publishedAt}
                        content={article.content}
                     />
                  ))}
               </div>
            </div>
         )
                  }
      </div>
   
   )
               }

export default GlobalNews
