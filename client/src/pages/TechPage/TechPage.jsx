import html from '../../assets/img/html.png';
import css from '../../assets/img/css.png';
import javascript from '../../assets/img/javascript.png';
import react from '../../assets/img/react.png';
import python from '../../assets/img/python.png';
import vscode from '../../assets/img/vscode.png';
import github from '../../assets/img/github.png';
import azure from '../../assets/img/azure.png';
import itil from '../../assets/img/itil.png';

const techStack = [
  { name: 'HTML', image: html },
  { name: 'CSS', image: css },
  { name: 'JavaScript', image: javascript },
  { name: 'React', image: react },
  { name: 'Python', image: python },
  { name: 'VS Code', image: vscode },
  { name: 'GitHub', image: github },
  { name: 'Azure', image: azure },
  { name: 'ITIL', image: itil },
];

export default function TechPage() {
  return (
    <section className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">My Tech Stack</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center gap-2 transition-transform transform hover:scale-105"
          >
            <img src={tech.image} alt={tech.name} className="w-16 h-16 object-contain" />
            <span className="text-sm font-medium text-base-content">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
