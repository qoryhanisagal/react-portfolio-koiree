import Card1 from '../../assets/img/CardImage1.png';
import Card2 from '../../assets/img/CardImage2.png';
import Card3 from '../../assets/img/CardImage3.png';
import Card4 from '../../assets/img/CardImage4.png';
import Card5 from '../../assets/img/CardImage5.png';
import Card6 from '../../assets/img/CardImage6.png';
import { FaLink, FaGithub } from 'react-icons/fa';

const projects = [
  { title: 'Project Title 1', image: Card1 },
  { title: 'Project Title 2', image: Card2 },
  { title: 'Project Title 3', image: Card3 },
  { title: 'Project Title 4', image: Card4 },
  { title: 'Project Title 5', image: Card5 },
  { title: 'Project Title 6', image: Card6 },
];

export default function ProjectPage() {
  return (
    <section className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-primary mb-4">Projects</h1>
      <p className="text-center mb-10 text-base-content text-lg">
        Things I’ve built so far
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-base-100 shadow-md rounded-md overflow-hidden border border-base-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-base-content mb-4">
                This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content.
              </p>
              <p className="text-xs text-neutral-content mb-4">
                Tech stack: HTML, JavaScript, TCSS, React
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  <FaLink /> Live Preview
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  <FaGithub /> View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
