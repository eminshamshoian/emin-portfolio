import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Layout from './Layouts/Main';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
