import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../Components/Header";
import styled from 'styled-components';
import {variables} from "../styles/global-style-variables";
import Image from 'next/image'
import LinkButton from "../Components/LinkButton";

const SubHeading = styled.h2`
  font-size: 18px;
  font-style: italic;
  text-align: center;
  font-weight: 400;
  letter-spacing: 3.51px;
  line-height: 1.78;
  margin-top: 60px;
`
const Intro = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
const Container = styled.section`
  max-width: ${variables.siteWidth};
  width: 100%;
  margin: 0 auto;
`
export default function Home() {
  return (
    <Container>
      <Head>
        <title>Alacritas Research</title>
      </Head>

      <main className={styles.main}>
        <Intro>
          <LinkButton href={'/bio'}>Bio</LinkButton>
          <img src={"/large-logo.png"} srcSet={'/large-logo.png 1x, /large-logo@2x.png 2x, /large-logo@3x 3x'} alt="Alacritas Research Logo"/>
          <LinkButton href={'/mandate'}>Mandate</LinkButton>
        </Intro>
        <SubHeading>Independent Multi-Disciplinary Analysis of the<br/>
          Global Energy Sector</SubHeading>
      </main>
    </Container>
  )
}
