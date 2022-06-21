import Footer from './Footer';
import Header from './Header';

function MainLayout({ children }) {
   return (
      <div>
         <Header />
         <div className="main-container">{children}</div>
         <Footer />
      </div>
   );
}

export default MainLayout;
