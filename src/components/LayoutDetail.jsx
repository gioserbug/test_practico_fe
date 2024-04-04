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

        <br />
        <br />

        <h2>Descripción del producto</h2>

        <br />

        <p className="description">{description}</p>

        <br />
      </div>

      <div>
        <p className="text-small">
          {condition === "new" ? "Nuevo" : "Usado"} -{" "}
          {`${sold_quantity} Vendidos`}
        </p>

        <br />

        <h3>{title}</h3>

        <br />

        <p className="text-price">$ {price?.decimals}</p>

        <p className="text-small">{free_shipping && "Envío gratis"}</p>

        <br />

        <button className="btn-comprar">Comprar</button>
      </div>
    </div>
  );
};

export default LayoutDetail;
