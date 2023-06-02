function Button(props) {
    
    return(
        <button className={`${props.state == 'order' ? "order" : "contact" }`} >
            {props.state == 'order' ? "Place Order": "Contact Us"}
        </button>
    );
    
}


export default Button;