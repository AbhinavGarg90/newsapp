import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl } = this.props
        return (
            <div className='my-3'>
                <div className="card" >
                    <img src={imageUrl ? imageUrl: "https://scx2.b-cdn.net/gfx/news/2023/a-worm-inspired-robot.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}
