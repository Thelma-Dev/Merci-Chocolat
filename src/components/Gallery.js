import Image from "./Image"

function Gallery(props) {
  return (
    <section className="portfolio">
        <div className="container">
            <div className="subheading">
                <h3>{props.subheading}</h3>
                <p>{props.subheadingText}</p>
            </div>
            <div className="gallery">
                {props.images.map(image => (
                    <div className="gallery-image" key={image.id}>
                        <Image 
                        src = {image.url}
                        alt = {image.altText}
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}

export default Gallery