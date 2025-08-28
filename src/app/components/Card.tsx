type CardProps = {
  image?: string;
  title: string;
  price: string;
};

export default function Card({ image, title, price }: CardProps) {
  return (
    <div className="card">
      {/* Solo muestra la imagen si existe y no está vacía */}
      {image && image.trim() !== "" && (
        <img src={image} alt={title} className="card-img" />
      )}

      <h3 className="card-title">{title}</h3>
      <p className="card-price">{price}</p>
    </div>
  );
}
