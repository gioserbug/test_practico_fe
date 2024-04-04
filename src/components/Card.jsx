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
        <h3>
          <span>$ {price?.decimals}</span>
          <span className={`chip ${condition === "new" ? "new" : "used"}`}>
            {condition === "new" ? "Nuevo" : "Usado"}
          </span>
        </h3>
        <br />
        <p>{title}</p>
      </div>

      <div>
        <p className="text-small">{free_shipping && "Envío gratis"}</p>
      </div>
    </div>
  );
};

export default Card;
