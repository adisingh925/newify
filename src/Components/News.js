import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 10,
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalItems: 0
        }

        document.title = `Newsify - ${this.props.category[0].toUpperCase() + this.props.category.substring(1)}`
    }

    componentDidMount() {
        this.fetchData(0)
    }

    fetchData = async (operation) => {
        console.log(this.state.page)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d56ab885e81741e191851cc013eb2c5f&page=${this.state.page + operation}&pagesize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({ articles: parsedData.articles, totalItems: parsedData.totalResults, page: this.state.page + operation, loading: false })
    }

    fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d56ab885e81741e191851cc013eb2c5f&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({ articles: this.state.articles.concat(parsedData.articles), page: this.state.page + 1 })
    };

    render() {
        return (
            <>
                <h2 className="text-center">
                    Newsify - Top Headlines
                </h2>

                {this.state.loading && <Spinner/>}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length < this.state.totalItems}
                    loader={<Spinner />}>
                    <div className="container">
                        <div className='row'>
                            {this.state.articles.map((element) => {
                                return <div className='col-md-4' key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} time={element.publishedAt} author={element.author ? element.author : "unknown"} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default News