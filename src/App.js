import React from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import ProductContainer from './Container/ProductContainer';
import CartContainer from './Container/CartContainer';
import MessageContainer from './Container/MessageContainer';

function App() {
  return (
    <div className="hidden-sn animated deep-purple-skin">
            <Header/>
        <main id="mainContainer">
            <div className="container">
                {/* <!-- Products --> */}
                    <ProductContainer/>
                {/* <!-- Message --> */}
                    <MessageContainer/>
                {/* <!-- Cart --> */}
                    <CartContainer/>
            </div>
        </main>
        {/* <!-- Footer --> */}
        <Footer/>
    </div>
  );
}

export default App;
