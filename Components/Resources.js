import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
const StyledLink = styled.a`
  color: #0070f3;
  text-decoration: underline;
  display: flex;
  width: 100%;
  align-items: center;
  &:hover {
    color: #0b4c98;
  }
`
const StyledListItem = styled.li`
  margin-bottom: 16px;
  font-size: 18px;
  list-style: none;
  border: 1px solid #423100;
  display: flex;
`
const StyledUnorderedList = styled.ul`
  padding: 0;
  margin: 0;
`
const StyledLogoContainer = styled.div`
  border-right: 1px solid #423100;
  padding: 10px 14px 5px;
  width: 160px;
  flex-shrink: 0;
`
const StyledOxLogoContainer = styled.div`
  border-right: 1px solid #423100;
  width: 160px;
  flex-shrink: 0;
`
const StyledContent = styled.div`
  padding: 8px 14px;
  width: 100%;
`
function Resources(props) {
  return (
    <section>
      <StyledUnorderedList>
        <StyledListItem>
          <StyledLink target="_blank" href={'https://www.energy.cam.ac.uk/energy-research/research-themes'}>
            <StyledLogoContainer>
              <Image src={"/university_of_cambridge_logotype.png"} alt={"University of Cambridge logo"} width={"155"} height={"32"}/>
            </StyledLogoContainer>
            <StyledContent>Cambridge</StyledContent>
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink target="_blank" href={"https://www.energy.ox.ac.uk/research/"}>
            <StyledOxLogoContainer>
              <Image src={"/university_of_oxford.png"} alt={"University of Oxford logo"} width={"150"} height={"50"}/>
            </StyledOxLogoContainer>
            <StyledContent>Oxford</StyledContent>
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink target="_blank" href={'https://energy.stanford.edu/research/renewable-energy'}>
            <StyledLogoContainer>
              <Image src={"/stanford_university.png"} alt={"Stanford University logo"} width={"96"} height={"32"}/>
            </StyledLogoContainer>
            <StyledContent>Stanford University</StyledContent>
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink target="_blank" href={'https://gtep.technion.ac.il/renewable-energy-sources/#:~:text=Technion%20researchers%20are%20Israeli%20pioneers,for%20an%20external%20power%20source.'}>
            <StyledLogoContainer>
              <Image src={"/technion_university.png"} alt={"Technion"} width={"119"} height={"32"}/>
            </StyledLogoContainer>
            <StyledContent>TechnionStyledContent</StyledContent>
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink target="_blank" href={'https://www.eia.gov/'}>
            <StyledLogoContainer>
              <div style={{ margin: "-14px -10px"}}>
                <Image src={"/eia-logo.gif"} alt={"EIA"} width={"60"} height={"60"}/>
              </div>
            </StyledLogoContainer>
            <StyledContent>Homepage - U.S. Energy Information Administration (EIA)</StyledContent>
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink target="_blank" href={'https://www.eia.gov/tools/a-z/index.php?id=E'}>
            <StyledLogoContainer>
              <div style={{ margin: "-14px -10px"}}>
                <Image src={"/eia-logo.gif"} alt={"EIA"} width={"60"} height={"60"}/>
              </div>
            </StyledLogoContainer>
            <StyledContent>A-Z Index - U.S. Energy Information Administration (EIA)</StyledContent>
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink target="_blank" href={'https://www.energy.gov/science-innovation/energy-efficiency'}>
            <StyledLogoContainer>
              <div style={{ margin: "-14px -10px"}}>
                <Image src={"/eia-logo.gif"} alt={"EIA"} width={"60"} height={"60"}/>
              </div>
            </StyledLogoContainer>
            <StyledContent>Energy Efficiency | Department of Energy</StyledContent>
          </StyledLink>
        </StyledListItem>
      </StyledUnorderedList>
    </section>
  );
}

export default Resources;
