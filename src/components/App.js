import React from 'react';
import Header from './Header';
import Products from './Products';
import ProductsContainer from '../containers/ProductsContainer';
import Message from './Message';
import Cart from './Cart';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <main id="mainContainer">
        <div className="container">
          {/* <Products /> */}
          <ProductsContainer />
          <Message />
          <Cart />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
