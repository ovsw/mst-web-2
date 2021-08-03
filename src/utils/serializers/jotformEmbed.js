import React from 'react'
import JotformEmbed from 'react-jotform-embed'

const JotFormEmbed = ({jotFormUrl = ''}) => {
  return (
    <JotformEmbed src={jotFormUrl} />
  )
}

export default JotFormEmbed
