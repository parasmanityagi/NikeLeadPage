import React from 'react'

const MenuItem = ({name}) => {
  const css = {
    listStyleType : "none",
    fontSize : "large",
    fontWeight : "500"
  }
  return (
    <li style={css}>
        {name}
    </li>
  )
}

export default MenuItem