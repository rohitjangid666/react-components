const ContactUs = () => {
  return (
    <section className='py-16 px-4'>
      <div className='max-w-3xl mx-auto text-center'>
        <h2 className='text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4'>Contact Us</h2>
        <p className='text-lg text-gray-600 dark:text-gray-300 mb-8'>
          We’d love to hear from you! Whether you have a question, feedback, or need support, our team is here to assist
          you. Feel free to reach out, and we’ll get back to you as soon as possible.
        </p>

        <form className='space-y-6'>
          <div className='flex flex-col md:flex-row md:space-x-4'>
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              className='w-full md:w-1/2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300'
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              className='w-full md:w-1/2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300'
              required
            />
          </div>

          <textarea
            name='message'
            placeholder='Your Message'
            rows={4}
            className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300'
            required
          />

          <button
            type='submit'
            className='w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition duration-300'
          >
            Send Message
          </button>
        </form>

        <div className='mt-8 text-gray-600 dark:text-gray-300'>
          <p>If you prefer, you can also email us directly at</p>
          <a href='mailto:support@example.com' className='text-blue-500 hover:underline dark:text-blue-400'>
            support@example.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
