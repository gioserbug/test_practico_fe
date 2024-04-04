import { useNavigate } from "react-router-dom";
import image_shipping from "../../public/assets/ic_Shipping.png";

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
        <h3>
          <span>$ {price?.decimals}</span>

          {free_shipping && (
            <div className="image-shipping">
              <img src={image_shipping} alt="image shipping" />
              <div className="tooltip">Envío gratis</div>
            </div>
          )}
        </h3>
        <br />
        <p>{title}</p>
      </div>

      <div>
        <p className="text-small"> {condition === "new" && "Nuevo"}</p>
      </div>
    </div>
  );
};

export default Card;
