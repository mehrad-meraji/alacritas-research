import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: #0070f3;
  text-decoration: underline;
  &:hover {
    color: #0b4c98;
  }
`
const StyledListItem = styled.li`
  margin-bottom: 16px;
  font-size: 18px;
`
function Resources(props) {
  return (
    <section>
      <ul>
        <StyledListItem><StyledLink target="_blank" href={'https://www.energy.cam.ac.uk/energy-research/research-themes'}>Cambridge</StyledLink></StyledListItem>
        <StyledListItem><StyledLink target="_blank" href={"https://www.energy.ox.ac.uk/research/"}>Oxford</StyledLink></StyledListItem>
        <StyledListItem><StyledLink target="_blank" href={'https://energy.stanford.edu/research/renewable-energy'}>Stanford University</StyledLink></StyledListItem>
        <StyledListItem><StyledLink target="_blank" href={'https://gtep.technion.ac.il/renewable-energy-sources/#:~:text=Technion%20researchers%20are%20Israeli%20pioneers,for%20an%20external%20power%20source.'}>Technion</StyledLink></StyledListItem>
        <StyledListItem><StyledLink target="_blank" href={'https://www.eia.gov/'}>Homepage - U.S. Energy Information Administration (EIA)</StyledLink></StyledListItem>
        <StyledListItem><StyledLink target="_blank" href={'https://www.eia.gov/tools/a-z/index.php?id=E'}>A-Z Index - U.S. Energy Information Administration (EIA)</StyledLink></StyledListItem>
        <StyledListItem><StyledLink target="_blank" href={'https://www.energy.gov/science-innovation/energy-efficiency'}>Energy Efficiency | Department of Energy</StyledLink></StyledListItem>
      </ul>
    </section>
  );
}

export default Resources;
