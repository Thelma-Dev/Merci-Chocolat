import Button from "./Button"

function Banner(props) {
  return (
    <section id="home">
        <div className="banner">
            <div className="hero-text">
                <h2>{props.businessName}</h2>
                <p>{props.businessSlang}</p>
                <Button state = {props.state}
                />
                <Button state = {null}
                />
            </div>
            <div className="banner-image">
                <img src={props.banner} alt={props.bannerAltText}/>
            </div>
        </div>
    </section>
  )
}

export default Banner