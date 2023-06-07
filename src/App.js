import'./style/index.css';
import bannerImage from './media/banner-copy.png';
import companyLogo from './media/companyLogo.png';
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
  let businessSlang = 'A bite is all you need to leave you wanting more. Melts in your mouth, not in your hand';
  let subheading = 'Gallery';
  let subheadingText = 'Crispety, crunchety, peanut buttery Butterfinger';
  let footerAltText = "Company logo";
  let facebookLogo = <i className="fa-brands fa-facebook"></i>;
  let instagramLogo = <i className="fa-brands fa-instagram"></i>;
  let twitterLogo = <i className="fa-brands fa-twitter"></i>;
  let developer = 'Thelma Osifo';
  let state = true;

  
  const galleryImages = [
    {
      //Photo by Elli from Pexels: https://www.pexels.com/photo/milk-chocolates-1854664/
      id: 1,
      url:galleryImage1,
      altText: 'image1'
    },
    {
      // Photo by Valeria Boltneva from Pexels: https://www.pexels.com/photo/frappe-with-pretzels-and-chocolate-cones-1028419/
      id: 2,
      url:galleryImage2,
      altText: 'image2'
    },
    {
      // Photo by flat hito from Pexels: https://www.pexels.com/photo/bake-pastry-on-short-stem-cake-tray-863006/
      id: 3,
      url:galleryImage3,
      altText: 'image3'
    },
    {
      // Photo by Polina Tankilevitch: https://www.pexels.com/photo/photo-of-chocolate-cake-on-wooden-plate-4109998/
      id:4,
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
          primary = {state}
          />
          </div>
          <Gallery
          subheading = {subheading}
          subheadingText = {subheadingText}
          images = {galleryImages}
          />
          <Footer
          url = {companyLogo}
          altText = {footerAltText}
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
