import React from 'react';
import './Reviews.css';

class Reviews extends React.Component{
    render(){
        let {reviews} = this.props;
        return (
            <div>
                <div className="review-stars">
                    <i className="material-icons review-star">
                    star_rate
                    </i>
                    <i className="material-icons review-star">
                    star_rate
                    </i>
                    <i className="material-icons review-star">
                    star_rate
                    </i>
                    <i className="material-icons review-star">
                    star_rate
                    </i>
                    <i className="material-icons review-star">
                    star_rate
                    </i>
                    <span className="review-proof">
                        ({reviews.length})
                    </span>
                </div>
                <div>
                    {reviews.map((review) => {
                        return (
                            <div className="review">
                                <h5 className="review-band-name">
                                    {review.name}
                                </h5>
                                <div className="review-text">
                                    "{review.review}"
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
} 

export default Reviews;