export default function Button (props) {
    return(
        <div>
            <input 
                type="button"
                className={props.classname}
                onClick={props.onclick}
                disabled={props.disabled} 
                value={props.value}/>
        </div>
    );
}