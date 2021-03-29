import React from 'react';
import styled from "styled-components";
import Link from 'next/link'

export const StyledLinkButton = styled.a`
    color: #423100;
    width: 139px;
    height: 40px;
    font-size: 16px;
    border: 1px solid #423100;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
function LinkButton({href, children}) {
  return (
    <Link href={href}>
      <StyledLinkButton>{children}</StyledLinkButton>
    </Link>
  );
}

export default LinkButton;
