export default function ContactPage() {
  return (
    <section className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">Contact Me</h1>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-base-content">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="input input-bordered w-full"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-base-content">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="input input-bordered w-full"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-base-content">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="textarea textarea-bordered w-full"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <div className="text-right">
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
