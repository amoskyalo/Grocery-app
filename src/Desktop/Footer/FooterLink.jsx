import React from 'react'

const FooterLink = () => {
    const linkDatas = [
        {title: "Help", link1: "Search", link2: "Help", link3: "Information", link4: "Privacy policy", link5: "Shopping information"},
        {title: "Help", link1: "Search", link2: "Help", link3: "Information", link4: "Privacy policy", link5: "Shopping information"},
        {title: "Help", link1: "Search", link2: "Help", link3: "Information", link4: "Privacy policy", link5: "Shopping information"}
    ]
  return (
    linkDatas.map( (linkData, i) => 
        <div className='footer-link search-links' key={i}>
            <h2>{linkData.title}</h2>
            <p>{linkData.link1}</p>
            <p>{linkData.link2}</p>
            <p>{linkData.link3}</p>
            <p>{linkData.link4}</p>
            <p>{linkData.link5}</p>
        </div>
    )
  )
}

export default FooterLink