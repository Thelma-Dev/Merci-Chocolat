function Button(props) {
    
    return(
        <button className={props.isOrder ? "order" : "contact"} >
            {props.isOrder ? "Place Order": "Contact Us"}
        </button>
    );
    
}


export default Button;