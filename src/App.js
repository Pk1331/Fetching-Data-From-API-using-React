import './App.css'
function Card({title,image,price})
{
    return(
        <div className="Card">
            <img src={image} alt="no-image"/>
            <p>{title}</p>
            <p>{price}</p>
        </div>
    )
}
export default Card