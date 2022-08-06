import Footer from './Footer';
import Header from './Header';

function MainLayout({ children }) {
    return (
        <div style={{ backgroundColor: '#fff' }}>
            <Header />
            <div className="main__container">{children}</div>
            <Footer />
        </div>
    );
}

export default MainLayout;
