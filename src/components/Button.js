function Button(props) {
    
    return(
        <button className={`${props.primary? 'order' : 'contact'}`} >
            {props.primary? "Place Order": "Contact Us"}
        </button>
    );
    
}


export default Button;