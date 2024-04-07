import { createContext } from 'react';
import { AppProps } from 'next/app';
import App from '@/entites/user/App';
import UserStore from "../user/userStore";


export const Context = createContext(null);

const MyApp = ({ Component, pageProps }) => {
  return (
    <Context.Provider value={{
      user: new UserStore(),
    }}>
      <Component {...pageProps} />
    </Context.Provider>
  );
};

export default MyApp;
