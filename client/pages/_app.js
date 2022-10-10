import '../styles/globals.css'

const testApiCall = async () => {
  const dev = process.env.NODE_ENV !== 'production';
  const port = process.env.PORT || 5000;
  const server = dev ? 'http://localhost:' + port : 'https://csc301-a2-pair-36.herokuapp.com';

  let res = await fetch(server + "/api/province/taxes")
  console.log(res);
  console.log(res.json());

  res = await fetch(server + "/api/cart")
  console.log(res);
  console.log(res.json());
}

function MyApp({ Component, pageProps }) {

  testApiCall()

  return <Component {...pageProps} />
}

export default MyApp
