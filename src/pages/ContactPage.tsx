

const ContactPage = () => {
  return (
      <div className="max-w-xl mx-auto p-6 space-y-4">
        <h1 className="text-4xl font-bold text-blue-700">Contact Us</h1>
        <p className="text-gray-700">
          Have questions or need help? Reach out to us!
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="w-full border p-2 rounded mt-1"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full border p-2 rounded mt-1"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full border p-2 rounded mt-1"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    
  );
}

export default ContactPage
