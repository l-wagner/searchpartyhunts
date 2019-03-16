import React from 'react'
export default ({ open }) => (
  <div className={`container ` + (open ? 'change' : '')}>
    <div className="bar1" />
    <div className="bar2" />
    <div className="bar3" />
  </div>
)
