import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const { id, picture, price, title, free_shipping, condition } = item;

  const navigate = useNavigate();

  const redirectToDetail = () => {
    navigate(id);
  };

  return (
    <div className="card" onClick={redirectToDetail}>
      <div className="image-container">
        <img src={picture} alt="Product" />
      </div>

      <div>
        <p>{price?.decimals}</p>
        <p>{title}</p>
        <p>{condition === "new" ? "Nuevo" : "Usado"}</p>
      </div>

      <div>
        <p>{free_shipping ? "Envío gratis" : "Con costo de envío"}</p>
      </div>
    </div>
  );
};

export default Card;
