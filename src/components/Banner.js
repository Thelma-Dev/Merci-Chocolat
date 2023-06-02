import Button from "./Button"

function Banner(props) {
  return (
    <section className="page-banner">
        <div className="banner">
            <div className="hero-text">
                <h2>{props.businessName}</h2>
                <p>{props.businessSlang}</p>
                <Button primary = {props.primary}
                />
                <Button primary = {!props.primary}
                />
            </div>
            <div className="banner-image">
                <img src={props.banner} alt={props.bannerAltText}/>
            </div>
        </div>
    </section>
  );
}

export default Banner