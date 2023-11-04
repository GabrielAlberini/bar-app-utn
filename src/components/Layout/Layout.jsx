import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export { Layout };
