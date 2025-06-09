import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Josh',
          from_email: form.email,
          to_email: 'ajosh22.aj@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

        <div className="contact-container bg-gray-900 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h3 className="head-text text-3xl text-white font-bold text-center">Let's talk</h3>
          <p className="text-lg text-gray-300 mt-3 text-center">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>
          <div className="flex flex-col items-center space-y-4 mt-6">
            <div className="flex items-center space-x-3">
              <img src="/assets/email-icon.png" alt="email-icon" className="w-6 h-6" />
              <span className="text-lg text-white">joshuaakinbode61@gmail.com</span>
            </div>
            <p className="text-sm text-gray-400">Send me a text directly.</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Jorshstar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-white hover:text-gray-600 transition-colors"
              >
                <SiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/akinbodejoshua"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-white hover:text-blue-500 transition-colors"
              >
                <SiLinkedin />
              </a>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={(e) => {
              console.log('Form submitted');
              handleSubmit(e);
            }}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label text-gray-300">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => {
                  console.log('Name changed:', e.target.value);
                  handleChange(e);
                }}
                required
                className="field-input bg-gray-800 text-white border border-gray-700 rounded-lg p-3 w-full"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label text-gray-300">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => {
                  console.log('Email changed:', e.target.value);
                  handleChange(e);
                }}
                required
                className="field-input bg-gray-800 text-white border border-gray-700 rounded-lg p-3 w-full"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label text-gray-300">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={(e) => {
                  console.log('Message changed:', e.target.value);
                  handleChange(e);
                }}
                required
                rows={5}
                className="field-input bg-gray-800 text-white border border-gray-700 rounded-lg p-3 w-full"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button
              className="field-btn bg-blue-600 text-white rounded-lg p-3 hover:bg-blue-700 transition-colors w-full"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;