function Header() {
  const tienda = {
    nombre: "Mi Tienda Online 🛒",
    slogan: "Ofertas del dia 🔥",
    ofertas: [
      { id: 1, producto: "Termo", descuento: "20%" },
      { id: 2, producto: "Organizador", descuento: "50%" },
      { id: 3, producto: "Luces Navideñas", descuento: "30%" },
    ],
  };
  return (
    <>
      <h1>{tienda.nombre}</h1>
      <h2>{tienda.slogan}</h2>
      <ul>
        {tienda.ofertas.map((oferta) => (
          <li key={oferta.id}>
            {oferta.producto} - Descuento: {oferta.descuento}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Header;
