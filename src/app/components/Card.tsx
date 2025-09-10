type CardProps = {
  image?: string;
  title: string;
  price: string;
};

export default function Card({ image, title, price }: CardProps) {
  return (
    <div className="card bg-white p-4 rounded-2xl shadow-md
    transform transition duration-300
    hover:scale-105 hover:shadow-xl"
    
    >
      {/* Solo muestra la imagen si existe y no está vacía */}
      {image && image.trim() !== "" && (
        <img src={image} alt={title} className="card-img" />
      )}

      <h3 className="card-title">{title}</h3>
      <p className="card-price">{price}</p>
    </div>
  );
}
