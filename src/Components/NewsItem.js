import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {

        let { title, description, imageUrl, newsUrl, author, time, source } = this.props

        return (
            <div><div className="card my-3" >
                <img src={imageUrl?imageUrl:"https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"} className="card-img-top" alt="..." />
                <div className="card-body" >
                    <span class="badge rounded-pill text-bg-primary mb-3">{source}</span>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    <p class="card-text mt-3"><small class="text-body-secondary">By {author} on {new Date(time).toGMTString()}</small></p>
                </div>
            </div></div>
        )
    }
}

export default NewsItem