
import React from 'react'

import { Link } from 'react-router-dom'

function MHome() {
  return (
    <div>
      <h1>Home</h1>
      <Link to={'/admin/login'}>admin login</Link>
      <Link to={'/admin/home'}>admin page</Link>
    </div>
  )
}

export default MHome
