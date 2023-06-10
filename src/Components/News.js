import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export class News extends Component {

    constructor() {
        super();

        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalItems: 0
        }
    }

    componentDidMount() {
        this.fetchData(0)
    }

    nextButtonClick = () => {
        this.fetchData(1)
    }

    prevButtonClick = () => {
        if (this.state.page > 1) {
            this.fetchData(-1)
        }
    }

    fetchData = async (operation) => {
        console.log(this.state.page)
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d56ab885e81741e191851cc013eb2c5f&page=${this.state.page + operation}&pagesize=${this.props.pageSize}`
        this.setState({ loading: true})
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({ articles: parsedData.articles, totalItems: parsedData.totalResults, page: this.state.page + operation, loading : false })
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>Newsify - Top Headlines</h2>
                {this.state.loading && <Spinner />}
                <div className='row'>
                    {!this.state.loading === true && this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} onClick={this.prevButtonClick} className="btn btn-dark mx-3 my-3">&larr; Previous</button>
                    <button type="button" disabled={(this.state.page + 1) > Math.ceil(this.state.totalItems / this.props.pageSize)} onClick={this.nextButtonClick} className="btn btn-dark mx-3 my-3">Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News