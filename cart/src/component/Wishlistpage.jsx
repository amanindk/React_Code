function Wishlistpage() {
  const wishlistItems = ["Item 1", "Item 2", "Item 3"];
  return (
    <div>
      <h2>Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlistItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Wishlistpage;
