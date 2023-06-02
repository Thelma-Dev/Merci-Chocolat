import'./style/index.css';
import bannerImage from './media/banner.jpg';
import Header from './components/Header';
import Banner from './components/Banner';

function App() {
  let pageTitle = 'Merci';
  let businessName = 'Merci Chocolat';
  let businessSlang = 'A bite is all you need to leave you wanting more';
  let isOrder = true;

  
    return (
      <>
        <Header
          title = {pageTitle}
        />
        <main>
          <div className="container">
          <Banner
          businessName = {businessName}
          businessSlang = {businessSlang}
          banner = {bannerImage}
          isOrder = {isOrder}
          />
          </div>
        </main>
      </>
      
    );
}

export default App;
