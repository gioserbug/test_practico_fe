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
        <p>
          {condition === "new" ? "Nuevo" : "Usado"} -
          {`${sold_quantity} Vendidos`}
        </p>

        <p>{title}</p>
        <p>$ {price?.decimals}</p>

        <p>{free_shipping ? "Envío gratis" : "Con costo de envío"}</p>
        <button>Comprar</button>
      </div>
    </div>
  );
};

export default LayoutDetail;
