// import App from 'next/app'
import AppLayout from "../components/AppLayout/AppLayout"
import "bootstrap/dist/css/bootstrap.min.css"
import { useRouter } from "next/router"
import Head from "next/head"
import { titleCase } from "title-case"

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const pageTitle = router.pathname.split("/")[1]

  return (
    <AppLayout>
      <Head>
        {pageTitle ? (
          <title>{titleCase(pageTitle)}</title>
        ) : (
          <title>Home</title>
        )}
      </Head>
      <Component {...pageProps} />
    </AppLayout>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
