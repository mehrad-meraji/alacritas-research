import styled from 'styled-components';

export const variables = {
  siteWidth: '778px'
}
export const SectionContainer = styled.section`
  max-width: ${variables.siteWidth};
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  padding: 24px 50px;
  margin: 12px auto;
  p {
    line-height: 1.666
  }
  li {
    margin-bottom: 16px;
  }
  h4 {
    color: #665602;
    font-size: 20px;
    margin-bottom: 0;
  }
  h3 {
    margin-top: 42px;
  }
  h1 {
    font-size: 36px;
    font-weight: 500;
    margin-top: 0;
  }
`
export const LinkButton = styled.a`
  color: #423100;
  width: 139px;
  height: 40px;
  font-size: 16px;
  border: 1px solid #423100;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const StyledResourceContainer = styled.section`
  width: 100%;
  margin-top: 40px;
`
