import React from 'react'

const Serializer = {
  marks: {
    tick: (props) => (
      <span className='tick'>{props.children}</span>
    )
  }
}
export default Serializer
