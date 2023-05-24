type CardProps = {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  category: string;
};

export default function Card(props: CardProps) {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={props.image} alt={props.imageAlt} className="object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {props.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{props.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{props.category}</div>
        </div>
      </div>
    </div>
  );
}
