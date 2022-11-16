import React from 'react'
import newsImage from '../../Assets/news.jpeg'
import newsImage2 from '../../Assets/sick.jpeg'
import newsImage3 from '../../Assets/vegenews.jpeg'
import { FcGlobe } from 'react-icons/fc'
import { AiOutlineCalendar } from 'react-icons/ai'

const New = () => {
    const newsData = [
        {
            newsImg: newsImage,
            heading: "Get Healthy Tips for Your Plants to icrease your yields",
            author: "By name of author",
            date: "September 26, 2022",
            description: "Turpis nunc eget lorem dolor. Pretium quam vulputate dignissim suspendisse in est ante. Varius duis at consectetur lorem donec. Praesent sempe..."
        },
        {
            newsImg: newsImage2,
            heading: "Rising plant disease afecting tomatoes",
            author: "By name of author",
            date: "September 26, 2022",
            description: "Turpis nunc eget lorem dolor. Pretium quam vulputate dignissim suspendisse in est ante. Varius duis at consectetur lorem donec. Praesent sempe..."
        },
        {
            newsImg: newsImage3,
            heading: "The new technologies being employed in vegetable growing",
            author: "By name of author",
            date: "September 26, 2022",
            description: "Turpis nunc eget lorem dolor. Pretium quam vulputate dignissim suspendisse in est ante. Varius duis at consectetur lorem donec. Praesent sempe..."
        }
    ];
  return (
    newsData.map((newData, i) =>(
        <div className="news-item" key={i}>
            <div className="news-image" style={{backgroundImage:`url(${newData.newsImg})`}}>
                <div className="background-color"></div>
            </div>
            <div className="authors">
                <p className="author-name"><FcGlobe />{newData.author}</p>
                <div className="divider"></div>
                <p className="author-date"><AiOutlineCalendar className='calender'/>{newData.date}</p>
            </div>
            <div className="news-desc" style={{padding: " 0 0.5rem", textTransform: "capitalize"}}>
                <h2 className="news-heading">{newData.heading}</h2>
                <p className="news-info" style={{fontSize: "14px"}}>{newData.description}</p>
            </div>
            <div className="read-more">
                <button>Read more</button>
            </div>
        </div>
    ))
  )
}

export default New