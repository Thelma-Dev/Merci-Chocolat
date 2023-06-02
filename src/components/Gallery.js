

function Gallery(props) {
  return (
    <section className="portfolio">
        <div className="subheading">
            <h3>{props.subheading}</h3>
            <p>{props.subheadingText}</p>
        </div>
        <div className="gallery">
        {props.images.map(image => (
            <div className="gallery-image">
                <img src ={image.url} alt ={image.altText}/>
            </div>
        ))}
        </div>
    </section>
  );
}

export default Gallery