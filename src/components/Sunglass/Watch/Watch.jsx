import './watch.css'
const Watch = ({watch}) => {
        const {name,price}=watch;
    
    return (
        <div className="watch">
            <h2>Watch:{name}</h2>
            <p>price:{price}</p>
        </div>
    );
}

export default Watch;