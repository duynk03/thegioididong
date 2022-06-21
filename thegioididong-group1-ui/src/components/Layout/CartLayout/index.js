import Header from '../MainLayout/Header';

function CartLayout({ children }) {
   return (
      <div>
         <Header />
         <div className="main-container">{children}</div>
      </div>
   );
}

export default CartLayout;
