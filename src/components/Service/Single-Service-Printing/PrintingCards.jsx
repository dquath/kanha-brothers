import React from 'react'
import ServiceCard from '../../common/Service-Card/ServiceCard'
import "./PrintingCards.css"

const PrintingCards = () => {
  return (
    <div className='our-services'>
      <div className="all-printing-cards">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  )
}

export default PrintingCards
