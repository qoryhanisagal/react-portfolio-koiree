import React from 'react';
import KoireeImage from '../../assets/img/developer_koiree.png';

export default function HeroContent() {
  return (
    <section className="section max-width flex flex-col-reverse md:flex-row items-center justify-center gap-8 motion-preset-slide-right motion-duration-1000">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-3">
        <h1 className="text-3xl md:text-6xl font-bold">
          Hi <span role="img" aria-label="waving hand" className="inline-block motion-rotate-in-45 motion-ease-spring-bouncy motion-infinite">👋</span>,
        </h1>
        <h2 className="text-4xl md:text-2xl font-semibold">My name is</h2>
        <h2 className="text-transparent text-5xl md:text-7xl font-bold text-gradient">Koiree Descoteaux</h2>
        <p className="text-xl md:text-2xl font-medium text-gray-700">
          I turn ideas into seamless digital experiences through thoughtful design and full stack development.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center md:mt-6">
        <div className="rounded-full p-[4px] bg-gradient">
          <img
            src={KoireeImage}
            alt="Koiree Descoteaux"
            className="rounded-full w-80 h-80 object-cover border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
}