import 'antd/dist/antd.css';
import '../styles/globals.css';
import {UserProvider} from "../context/user";
function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp
