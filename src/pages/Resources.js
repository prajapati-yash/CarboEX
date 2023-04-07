import React from 'react'
import ResourcesHero from '../components/resources/ResourcesHero'
import ResourcesWIC from '../components/resources/ResourcesWIC'
import ResourcesHCW from '../components/resources/ResourcesHCW'
import ResourcesCalComp from '../components/resources/ResourcesCalComp'
import ResourcesROP from '../components/resources/ResourcesROP'

function Resources() {
  return (
    <div>
      <ResourcesHero />
      <ResourcesWIC />
      <ResourcesHCW />
      <ResourcesCalComp />
      <ResourcesROP />
    </div>
  )
}

export default Resources