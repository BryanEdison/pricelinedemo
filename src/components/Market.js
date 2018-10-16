import React, { Component } from 'react';
import { RatingBadge, Stamp, Icon } from 'pcln-design-system';
import { Link } from 'react-router-dom';

export default class Market extends Component {
  render() {
    return (
      <div className="images">
        <div className="image-item">
          <Link to='/product'>
            <RatingBadge>9.5</RatingBadge>
            <Stamp color='purple'>
              <Icon name='trendingUp' size={16} mr={1} /> most popular
</Stamp>
            <img className="image" alt="travel" src={'https://www.travelex.com.au/media/2572/16083767_ml.jpg'} />
          </Link>
        </div>

        <div className="image-item">
          <Link to='/product'>
            <RatingBadge>8.6</RatingBadge>
            <img className="image" alt="travel" src={'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2017/02/Positano-Italien-von-Tamara-Prutsch-@carriepr.jpg'} />
          </Link>
        </div>
        <div className="image-item">
          <Link to='/product'>
            <RatingBadge>9.2</RatingBadge>
            <Stamp color='purple'>
              <Icon name='trendingUp' size={16} mr={1} /> most discounted
</Stamp>
            <img className="image" alt="travel" src={'https://static5.businessinsider.com/image/59956729d0302003be47a2f6-840-420/100-trips-everyone-should-take-in-their-lifetime-according-to-the-worlds-top-travel-experts.jpg'} />
          </Link>
        </div>
        <div className="image-item">
          <Link to='/product'>
            <RatingBadge>9.1</RatingBadge>
            <img className="image" alt="travel" src={'https://www.backpackerguide.nz/wp-content/uploads/2017/10/new-zealand-1882703_1280.jpg'} />
            <Stamp color='purple'>
              <Icon name='trendingUp' size={16} mr={1} /> most recommended
      </Stamp>
          </Link>
        </div>
        <div className="image-item">
          <Link to='/product'>
            <RatingBadge>9.8</RatingBadge>
            <img className="image" alt="travel" src={'https://www.travelex.com.au/media/2572/16083767_ml.jpg'} />
          </Link>
        </div>
        <div className="image-item">
          <Link to='/product'>
            <RatingBadge>8.9</RatingBadge>
            <img className="image" alt="travel" src={'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2017/02/Positano-Italien-von-Tamara-Prutsch-@carriepr.jpg'} />
            <Stamp color='purple'>
              <Icon name='trendingUp' size={16} mr={1} /> top booked trip for couples
</Stamp>
          </Link>
        </div>

      </div>
    )
  }
}
