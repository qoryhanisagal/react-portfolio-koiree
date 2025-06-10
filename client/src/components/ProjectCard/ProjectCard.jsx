export default function ProjectCard({ title, image, description, tech, previewLink, codeLink }) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={image} alt={title} className="object-cover h-48 w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p className="text-xs text-neutral-content">{tech}</p>
        <div className="card-actions justify-end">
          <a
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline flex items-center gap-1"
          >
            <i className="fas fa-link"></i> Live Preview
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline flex items-center gap-1"
          >
            <i className="fab fa-github"></i> View Code
          </a>
        </div>
      </div>
    </div>
  );
}
