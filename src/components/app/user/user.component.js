import React, { useState } from 'react'
import { StyledUserWrapper } from './user.style';

const User = () => {
  const [user, setUser] = useState("login")
  return (
    <StyledUserWrapper>
      <h1>User</h1>
      <h1>User</h1>
    </StyledUserWrapper>
  )
}

export default User;
