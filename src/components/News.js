import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    pageSize: 10,
    country: "in",
    category: "general",
  };
  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=64fe0813b24b46f1a5f2c5aaa8e4866f&pageSize=${this.props.pageSize}`;
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = this.url;
    try {
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
      });
    } catch (e) {
      console.log("fetch failed!");
    }
  }
  handleNextClick = async () => {
    if (
      Math.ceil(this.state.totalResults / this.props.pageSize) <
      this.state.page + 1
    ) {
    } else {
      let url = `
    ${this.url}&page=${this.state.page + 1}`;
      try {
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles,
        });
      } catch (e) {
        console.log("fetch failed!");
      }
    }
  };
  handlePrevClick = async () => {
    let url = `
    ${this.url}&page=${this.state.page - 1}`;
    try {
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false,
      });
    } catch (e) {
      console.log("fetch failed!");
    }
  };
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">This is a news component</h2>
        {<Spinner /> && this.state.loading}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  {<Spinner /> && this.state.loading}
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />{" "}
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark mx-2"
            onClick={this.handlePrevClick}
          >
            &larr; Previous page
          </button>
          <button
            disabled={
              Math.ceil(this.state.totalResults / this.props.pageSize) <
              this.state.page + 1
            }
            type="button"
            className="btn btn-dark mx-2"
            onClick={this.handleNextClick}
          >
            Next page &rarr;
          </button>
        </div>
      </div>
    );
  }
}
