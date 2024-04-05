const LayoutDetail = ({ item }) => {
  if (!item) return null;

  const {
    title,
    price,
    picture,
    condition,
    free_shipping,
    sold_quantity,
    description,
  } = item;

  return (
    <div className="card-detail">
      <div>
        <img src={picture} alt="Product" width="100%" />

        <p className="title-description">Descripción del producto</p>

        <p className="description">{description}</p>
      </div>

      <div>
        <p className="text-small">
          {condition === "new" ? "Nuevo" : "Usado"} -{" "}
          {`${sold_quantity} Vendidos`}
        </p>

        <p className="text-title">{title}</p>

        <p className="text-small">{free_shipping && "Envío gratis"}</p>

        <p className="text-price">$ {price?.decimals}</p>

        <button className="btn-comprar">Comprar</button>
      </div>
    </div>
  );
};

export default LayoutDetail;
