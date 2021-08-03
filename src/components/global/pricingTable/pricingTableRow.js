/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react' // eslint-disable-line
import {FaCheckSquare} from 'react-icons/fa'

const PricingTableRow = ({title, packages}) => {
  return (
    <tr>
      <td className='featureName'>{title}:</td>
      <td className='firstFeature'>{packages.includes('package1') && <FaCheckSquare />}</td>
      <td>{packages.includes('package2') && <FaCheckSquare />}</td>
      <td>{packages.includes('package3') && <FaCheckSquare />}</td>
    </tr>
  )
}

export default PricingTableRow
