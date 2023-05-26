import OptimizedImage from "./OptimizedImage";

const sevenDays = 7 * 24 * 60 * 60 * 1000;

type CardProps = {
  href: string;
  date: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  category: string;
};

export default function Card(props: CardProps) {
  const currentTime = new Date();
  const timeDiff = currentTime.getTime() - new Date(props.date).getTime();
  const breaking = timeDiff <= sevenDays;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <OptimizedImage
          src={props.image}
          alt={props.imageAlt}
          className="object-cover"
        />
      </figure>
      <a href={props.href}>
        <div className="card-body">
          <h2 className="card-title">
            {props.title}
            <div
              className={`badge ${
                breaking ? "badge-primary" : "badge-secondary"
              }`}
            >
              {breaking ? "NEW" : "ARCHIVED"}
            </div>
          </h2>
          <p>{props.description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{props.category}</div>
          </div>
        </div>
      </a>
    </div>
  );
}
