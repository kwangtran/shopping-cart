import React from 'react';
import Header from './Header';
import Products from './Products';
import ProductsContainer from '../containers/ProductsContainer';
import Message from './Message';
import Cart from './Cart';
import Footer from './Footer';
import CartContainer from '../containers/CartContainer';
import MessageContainer from '../containers/MessageContainer';

function App() {
  return (
    <div>
      <Header />
      <main id="mainContainer">
        <div className="container">
          <ProductsContainer />
          <MessageContainer />
          <CartContainer />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
