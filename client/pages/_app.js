import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"

function MyApp({ Component, pageProps }) {
  console.log('demo auto deploy!')
  return <Component {...pageProps} />
}

export default MyApp
