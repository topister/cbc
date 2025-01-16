/* eslint-disable react/prop-types */
function Hello(props){
    return (
        <div>
            <h1>{props.message}, { props.name }!</h1>
        </div>
    );
}

export default Hello;