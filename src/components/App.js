import React from 'react';
import Header from './Header';
import Products from './Products';
import Message from './Message';
import Cart from './Cart';
import Footer from './Footer';

function App() {      
  return (
    <div>      
      <Header />
      <main id="mainContainer">
        <div className="container">
          <Products />      
          <Message />        
          <Cart/>
        </div>
      </main>
      <Footer/>
     </div>
  );
}

export default App;
