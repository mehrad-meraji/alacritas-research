import '../styles/globals.css'
import Header from "../Components/Header";
import styled from 'styled-components';
import {useRouter} from "next/router";

const Container = styled.section`
  display: flex;
  flex-direction: column;
`
const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Container>
      <Header isLanding={router.pathname === '/'}/>
      <Component {...pageProps} />
    </Container>
    )
}

export default MyApp
