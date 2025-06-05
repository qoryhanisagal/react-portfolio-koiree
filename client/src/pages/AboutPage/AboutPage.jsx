import profileImage from '../../assets/img/developer_koiree.png';

export default function AboutPage() {
  return (
    <section className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">
        About Me
      </h1>

      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-secondary mb-2">
            Koiree Descoteaux
          </h2>
          <h3 className="text-xl text-base-content font-medium mb-4">
            Full Stack Developer
          </h3>
          <p className="mb-6 text-base leading-relaxed max-w-prose mx-auto md:mx-0">
            I'm a passionate developer focused on building thoughtful,
            human-centered web experiences. I specialize in responsive interfaces,
            seamless integration between client and server logic, and creating apps
            that reflect care, clarity, and intention. With a strong foundation in
            React, Django, and modern CSS, I’m on a journey to bring ideas to life—
            clean, accessible, and with a little flair.
          </p>

          <h4 className="text-lg font-semibold mb-2">Skills:</h4>
          <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
            <li className="badge badge-outline">JavaScript</li>
            <li className="badge badge-outline">React</li>
            <li className="badge badge-outline">Tailwind CSS</li>
            <li className="badge badge-outline">Django</li>
            <li className="badge badge-outline">Python</li>
            <li className="badge badge-outline">Node.js</li>
            <li className="badge badge-outline">Git</li>
            <li className="badge badge-outline">Firebase</li>
          </ul>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0 w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary shadow-lg">
          <img
            src={profileImage}
            alt="Koiree Descoteaux"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}