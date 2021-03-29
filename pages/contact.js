import React from 'react';
import Head from "next/head";
import {SectionContainer} from "../styles/global-style-variables";

function Contact(props) {
  return (
    <>
      <Head>
        <title>Alacritas Research</title>
      </Head>
      <SectionContainer>
        <h1>Contact</h1>
        <section>
          <p>HOWARD SCHIPPER  B.A. M.A. Cantab</p>
          <p>
            <a href={'tel:14164817391'}>+1.416.481.7391</a>
          </p>
          <p>
            <a href={'mailto:principal@alacritasresearch.com'}>principal@alacritasresearch.com</a>
          </p>
          <br />
          <p>ALACRITAS RESEARCH</p>
          <p>
            <a href={"mailto:info@alacritasresearch.com"}>info@alacritasresearch.com</a>
          </p>
          <p>
            <a href={"https://www.alacritasresearch.com"}>www.alacritasresearch.com</a>
          </p>
        </section>
      </SectionContainer>
    </>
  );
}

export default Contact;
