import React, { Component } from 'react'

export class NewsItem extends Component {

    constructor() {
        super();
    }

    render() {

        let { title, description, imageUrl, newsUrl } = this.props

        return (
            <div><div className="card my-3" >
                <img src={imageUrl?imageUrl:"https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div></div>
        )
    }
}

export default NewsItem