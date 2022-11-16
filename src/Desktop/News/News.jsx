import React from 'react'
import'./News.css'
import New from './New'

const News = () => {
  return (
    <div className='news'>
        <h2 className="news-title">Latest News</h2>
        <p className="news-text">Lorem ipsum dolor sit amet conse</p>
        <div className="news-items">
            <New />
        </div>
    </div>
  )
}

export default News