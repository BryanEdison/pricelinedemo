import React from 'react';
import { RatingBadge, Stamp, Icon, Button } from 'pcln-design-system';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { cartAddition } from '../store';


export const Market = (props) => {
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
        <Button size='small' ml={6} onClick={() => props.addToTheCart({key: Math.floor(Math.random() * 100)})}>
          Add to cart
          </Button>

      </div>

      <div className="image-item">
        <Link to='/product'>
          <RatingBadge>8.6</RatingBadge>
          <img className="image" alt="travel" src={'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2017/02/Positano-Italien-von-Tamara-Prutsch-@carriepr.jpg'} />
        </Link>
        <Button size='small' ml={6} onClick={() => props.addToTheCart({key: Math.floor(Math.random() * 100)})}>
        Add to cart
        </Button>
      </div>
      <div className="image-item">
        <Link to='/product'>
          <RatingBadge>9.2</RatingBadge>
          <Stamp color='purple'>
            <Icon name='trendingUp' size={16} mr={1} /> most discounted
</Stamp>
          <img className="image" alt="travel" src={'https://static5.businessinsider.com/image/59956729d0302003be47a2f6-840-420/100-trips-everyone-should-take-in-their-lifetime-according-to-the-worlds-top-travel-experts.jpg'} />
        </Link>
        <Button size='small' ml={6} onClick={() => props.addToTheCart({key: Math.floor(Math.random() * 100)})}>
        Add to cart
        </Button>
      </div>
      <div className="image-item">
        <Link to='/product'>
          <RatingBadge>9.1</RatingBadge>
          <Stamp color='purple'>
            <Icon name='trendingUp' size={16} mr={1} /> most recommended
      </Stamp>
          <img className="image" alt="travel" src={'https://www.backpackerguide.nz/wp-content/uploads/2017/10/new-zealand-1882703_1280.jpg'} />
        </Link>
        <Button size='small' ml={6} onClick={() => props.addToTheCart({key: Math.floor(Math.random() * 100)})}>
        Add to cart
        </Button>
      </div>
      <div className="image-item">
        <Link to='/product'>
          <RatingBadge>9.8</RatingBadge>
          <img className="image" alt="travel" src={'https://www.travelex.com.au/media/2572/16083767_ml.jpg'} />
        </Link>
        <Button size='small' ml={6} onClick={() => props.addToTheCart({key: Math.floor(Math.random() * 100)})}>
        Add to cart
        </Button>
      </div>
      <div className="image-item">
        <Link to='/product'>
          <RatingBadge>8.9</RatingBadge>
          <Stamp color='purple'>
            <Icon name='trendingUp' size={16} mr={1} /> top booked trip for couples
          </Stamp>
          <img className="image" alt="travel" src={'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2017/02/Positano-Italien-von-Tamara-Prutsch-@carriepr.jpg'} />
        </Link>
        <Button size='small' ml={6} onClick={() => props.addToTheCart({key: Math.floor(Math.random() * 100)})}>
        Add to cart
        </Button>
      </div>

    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addToTheCart: (product) => {
    dispatch(cartAddition(product))
  }
})


export default connect(null, mapDispatchToProps)(Market);
