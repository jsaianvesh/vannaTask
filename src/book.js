import { useNavigate } from "react-router-dom";

const Book = ({ addCount,removebook, ...props }) => {
  let navigate = useNavigate();

  //to edit product
  const editProduct = () => {
    navigate(`/form/${props.id}`);
  };

  return (
    <div className="book">
      <Image img={props.img} />
      <ProductName productName={props.productName} />
      <Description description={props.description} />
      <Price price={props.price} />
      <Rating rating={props.rating} />
      {console.log(props.rating)}
      <Category category={props.category} />
      <div>
        <button className="edit" onClick={editProduct}>
          Edit
        </button>
        <button className="addToCart" onClick={addCount}>
      Add to Cart
       </button>
        <button className="remove" onClick={() => { removebook(props.id) }}>Remove</button>
      </div>
    </div>
  );
};
//Individual components created below for each deatil included in form
const Image = (props) => {
  return (
    <img className="image" src={props.img} alt="" width={300} height={200} />
  );
};

const ProductName = (props) => {
  return (
    <h3>
      <p className="productName">
        <b>Name: </b>
        <i>{props.productName}</i>
      </p>
    </h3>
  );
};

const Price = (props) => {
  return (
    <h3>
      <p className="Price">
        <b>Price: </b>
        <i>{props.price}</i>
      </p>
    </h3>
  );
};

const Rating = (props) => {
  return (
    <h3>
      <p className="Ratings">
        <b>Ratings: </b>
        <i>{props.rating}</i>
      </p>
    </h3>
  );
};

const Category = (props) => {
  return (
    <h5 style={{ color: "617d98", fontSize: "1.2rem" }}>
      <p className="category">
        <b>Category: </b>
        <i>{props.category}</i>
      </p>
    </h5>
  );
};

const Description = (props) => {
  return (
    <h5 style={{ color: "617d98", fontSize: "1.2rem" }}>
      <p className="category">
        <b>Description: </b>
        <i>{props.description}</i>
      </p>
    </h5>
  );
};
export default Book;
