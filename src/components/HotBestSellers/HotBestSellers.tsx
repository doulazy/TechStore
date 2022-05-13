import React from 'react'
import './HotBestSellers.css'
import Rating from '@mui/material/Rating'
import Image from '../../images/phone.png'

const HotBestSellers = () => {
  return (
    <section className="hotBestSection">
      <div className="hotBestContainer">
        <div className="hotBestTitle">
          <h3>Hot Best Sellers</h3>
          <hr />
        </div>

        <div className="hotBestItemsContainer">
          <div className="hotBestItem">
            <div className="hotBestItemImg">
              <img src={Image} alt="" />
            </div>
            <div className="hotBestItemInfo">
              <span className="category">Headphone</span>
              <span className="productName">Xiaomi Redmi Note 4</span>
              <div className="rating">
                <Rating name="read-only" value={4} readOnly />
              </div>
              <div className="prices">
                <span className="oldPrice">$300</span>
                <span className="newPrice">$255</span>
              </div>
            </div>
          </div>
          <div className="hotBestItem">
            <div className="hotBestItemImg">
              <img src={Image} alt="" />
            </div>
            <div className="hotBestItemInfo">
              <span className="category">Headphone</span>
              <span className="productName">Xiaomi Redmi Note 4</span>
              <div className="rating">
                <Rating name="read-only" value={4} readOnly />
              </div>
              <div className="prices">
                <span className="oldPrice">$300</span>
                <span className="newPrice">$255</span>
              </div>
            </div>
          </div>
          <div className="hotBestItem">
            <div className="hotBestItemImg">
              <img src={Image} alt="" />
            </div>
            <div className="hotBestItemInfo">
              <span className="category">Headphone</span>
              <span className="productName">Xiaomi Redmi Note 4</span>
              <div className="rating">
                <Rating name="read-only" value={4} readOnly />
              </div>
              <div className="prices">
                <span className="oldPrice">$300</span>
                <span className="newPrice">$255</span>
              </div>
            </div>
          </div>
          <div className="hotBestItem">
            <div className="hotBestItemImg">
              <img src={Image} alt="" />
            </div>
            <div className="hotBestItemInfo">
              <span className="category">Headphone</span>
              <span className="productName">Xiaomi Redmi Note 4</span>
              <div className="rating">
                <Rating name="read-only" value={4} readOnly />
              </div>
              <div className="prices">
                <span className="oldPrice">$300</span>
                <span className="newPrice">$255</span>
              </div>
            </div>
          </div>
          <div className="hotBestItem">
            <div className="hotBestItemImg">
              <img src={Image} alt="" />
            </div>
            <div className="hotBestItemInfo">
              <span className="category">Headphone</span>
              <span className="productName">Xiaomi Redmi Note 4</span>
              <div className="rating">
                <Rating name="read-only" value={4} readOnly />
              </div>
              <div className="prices">
                <span className="oldPrice">$300</span>
                <span className="newPrice">$255</span>
              </div>
            </div>
          </div>
          <div className="hotBestItem">
            <div className="hotBestItemImg">
              <img src={Image} alt="" />
            </div>
            <div className="hotBestItemInfo">
              <span className="category">Headphone</span>
              <span className="productName">Xiaomi Redmi Note 4</span>
              <div className="rating">
                <Rating name="read-only" value={4} readOnly />
              </div>
              <div className="prices">
                <span className="oldPrice">$300</span>
                <span className="newPrice">$255</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HotBestSellers