import { Products } from"./component-card";
 

import "./Card.css";


const Card =() =>{
    return(
        <div className="main">
        {Products.map((val)=>{
        return(
            <>
{
<div className="card">

    <div className="card-image">
        <img className="valueimage" src={val.image} alt={val.category}></img>
       <button className="btn-card">Add To Cart</button>
       
    </div>
    <div className="card-content">
       <p className="title-name">{val.title}</p>
       <p className="category-name">{val.category}</p>
       <large>price:{val.price}</large>
       <br></br>
       <small>Rate:{val.rating}⭐</small>
    </div>
    
   
</div>



}
            
            </>
        );
    })}
    </div>
    )
};
export default Card;       
        
       





























