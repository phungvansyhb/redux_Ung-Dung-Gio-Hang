import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Message from './Message';
import Cart from './Cart/Cart';
import ProductContainer from '../Container/ProductContainer';

function App() {
  return (
    <div className="hidden-sn animated deep-purple-skin">
            <Header/>
        <main id="mainContainer">
            <div className="container">
                {/* <!-- Products --> */}
                    <ProductContainer/>
                {/* <!-- Message --> */}
                    <Message/>
                {/* <!-- Cart --> */}
                    <Cart/>
            </div>
        </main>
        {/* <!-- Footer --> */}
        <Footer/>
    </div>
  );
}

export default App;
