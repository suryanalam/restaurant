import React from 'react'
import FeatureCard from '../feature-cards/FeatureCard'

import './Features.css'

const Features = () => {
  return (
    <section className='features-bg'>
        <h3>Things that make us special !!</h3>
        <div className='features-div'>
          <FeatureCard />
        </div>
    </section>
  )
}

export default Features
