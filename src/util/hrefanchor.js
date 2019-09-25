import React from 'react'

const HrefAnchor = props => {
    return (
      <a {...props}>{ props.children }</a>
    );
  }

  export default HrefAnchor