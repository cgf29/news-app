import React from 'react'
import './Article.css'

const Article = ({
   sourceId,
   sourceName,
   author,
   title,
   description,
   url,
   urlToImage,
   publishedAt,
   content,
}) => {
   return (
      <div className='article'>
         <div className='article__title'>{title}</div>
         <div className='article__details'>
            {sourceName && (
               <div className='article__sourceName'>
                  Source name: {sourceName}
               </div>
            )}
            {author && <div className='article__author'>Author: {author}</div>}
            {publishedAt && (
               <div className='article__publishedAt'>
                  Published at: {publishedAt.slice(0,10)} {publishedAt.slice(11,19)}
               </div>
            )}
         </div>
         <div className='article__description'>{description}</div>
         <div className='article__main'>
            <div className='article__img'>
               <img src={urlToImage} />
            </div>
            <a href={url} className='article__read-more' target='blank'>
               Read more
            </a>
         </div>
      </div>
   )
}

export default Article
