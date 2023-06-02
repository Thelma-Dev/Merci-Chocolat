import'./style/index.css';
import bannerImage from './media/banner.jpg';
import logo from './media/favicon.png';
import galleryImage1 from './media/gallery-image1.jpg';
import galleryImage2 from './media/gallery-image2.jpg';
import galleryImage3 from './media/gallery-image3.jpg';
import galleryImage4 from './media/gallery-image4.jpg';
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  let pageTitle = 'Merci';
  let businessName = 'Merci Chocolat';
  let businessSlang = 'A bite is all you need to leave you wanting more';
  let subheading = 'Gallery';
  let subheadingText = 'Crispety, crunchety, peanut buttery Butterfinger.'
  let altText = "logo";
  let facebookLogo = <i class="fa-brands fa-facebook"></i>;
  let instagramLogo = <i class="fa-brands fa-instagram"></i>;
  let twitterLogo = <i class="fa-brands fa-twitter"></i>;
  let developer = 'Thelma Osifo';
  let isOrder = true;

  const galleryImages = [
    {
      url:galleryImage1,
      altText: 'image1'
    },
    {
      url:galleryImage2,
      altText: 'image2'
    },
    {
      url:galleryImage3,
      altText: 'image3'
    },
    {
      url:galleryImage4,
      altText: 'image4'
    }

  ];

  
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
          <Gallery
          subheading = {subheading}
          subheadingText = {subheadingText}
          images = {galleryImages}
          />
          </div>
          <Footer
          url = {logo}
          altText = {altText}
          facebookLogo = {facebookLogo}
          instagramLogo = {instagramLogo}
          twitterLogo = {twitterLogo}
          developer = {developer}
          />
        </main>
      </>
      
    );
}

export default App;
