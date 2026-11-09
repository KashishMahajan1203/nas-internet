
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Globe,
  Headphones,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // Temporary frontend submission.
    // We will connect this form to MongoDB later.

    setTimeout(() => {
      alert("Thank you! Your message has been submitted.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setLoading(false);
    }, 800);
  };

  const contactDetails = [
    {
      icon: Phone,
      title: "Call Us",
      detail: "8800059059",
      description: "Mon - Sat, 9:00 AM - 6:00 PM",
      link: "tel:8800059059",
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "info@nasinternet.com",
      description: "We usually respond within 24 hours",
      link: "mailto:info@nasinternet.com",
    },
    {
      icon: MapPin,
      title: "Our Location",
      detail: "NAS Internet",
      description: "Contact us for our office address",
      link: null,
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-white">

      {/* HERO SECTION */}
      <section className="relative bg-[#07152D] px-5 py-24 text-white sm:px-10 lg:px-20">

        <div className="float absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="float-slow absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl">

          <div data-reveal className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[3px] text-blue-400">
            <span className="h-[2px] w-8 bg-blue-400"></span>
            Contact Us
          </div>

          <h1 data-reveal style={{ "--d": "100ms" }} className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Let's Connect Your
            <span className="block text-blue-400">
              Business With Us.
            </span>
          </h1>

          <p data-reveal style={{ "--d": "200ms" }} className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Have questions about our internet connectivity solutions?
            Need assistance with your business network? Get in touch
            with our team. We're always ready to help you.
          </p>

          <div data-reveal style={{ "--d": "300ms" }} className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact-form"
              className="shine relative overflow-hidden rounded-lg bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Get In Touch
            </a>

            <a
              href="tel:8800059059"
              className="flex items-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 font-semibold transition hover:bg-white/10"
            >
              <Phone size={18} />
              Call Us
            </a>
          </div>

        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="bg-[#F5F8FC] px-5 py-20 sm:px-10 lg:px-20">

        <div className="mx-auto max-w-7xl">

          {/* SECTION HEADING */}
          <div data-reveal className="mb-14 text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-blue-600">
              We're Here For You
            </p>

            <h2 className="text-3xl font-bold text-[#07152D] sm:text-4xl">
              We'd Love To Hear From You
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-500">
              Whether you have a question, need technical support,
              or want to explore our services, our team is just a
              message away.
            </p>

          </div>

          <div className="grid items-start gap-10 lg:grid-cols-5">

            {/* LEFT CONTACT DETAILS */}
            <div data-reveal="left" className="space-y-6 lg:col-span-2">

              <div className="rounded-2xl bg-[#07152D] p-8 text-white shadow-xl">

                <h3 className="text-2xl font-bold">
                  Contact Information
                </h3>

                <p className="mt-3 leading-7 text-gray-300">
                  Reach out to us through any of the following
                  channels. We're happy to assist you.
                </p>

                <div className="mt-9 space-y-8">

                  {contactDetails.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div key={index} className="group flex gap-4">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 transition duration-300 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white">
                          <Icon size={22} />
                        </div>

                        <div>
                          <h4 className="font-semibold">
                            {item.title}
                          </h4>

                          {item.link ? (
                            <a
                              href={item.link}
                              className="mt-1 block break-all text-sm text-blue-300 hover:text-white"
                            >
                              {item.detail}
                            </a>
                          ) : (
                            <p className="mt-1 text-sm text-blue-300">
                              {item.detail}
                            </p>
                          )}

                          <p className="mt-1 text-sm text-gray-400">
                            {item.description}
                          </p>
                        </div>

                      </div>
                    );
                  })}

                </div>

                <div className="mt-10 border-t border-white/10 pt-7">

                  <div className="flex items-center gap-3 text-blue-400">
                    <Headphones size={22} />
                    <span className="font-semibold">
                      Need Assistance?
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    Our support team is here to help with your
                    connectivity and service-related queries.
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT CONTACT FORM */}
            <div
              id="contact-form"
              data-reveal="right"
              style={{ "--d": "150ms" }}
              className="scroll-mt-24 rounded-2xl bg-white p-6 shadow-lg shadow-gray-200/60 sm:p-10 lg:col-span-3"
            >

              <div className="mb-8">

                <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                  Send A Message
                </span>

                <h3 className="mt-2 text-3xl font-bold text-[#07152D]">
                  Get In Touch With Us
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Fill out the form below and our team will get
                  back to you as soon as possible.
                </p>

              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                </div>

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Phone Number *
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9+\-\s]{10,15}"
                      title="Enter a valid phone number"
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Subject *
                    </label>

                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    >
                      <option value="">Select Subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Internet Services">Internet Services</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Business Partnership">Business Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                </div>

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Your Message *
                  </label>

                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />

                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="shine relative overflow-hidden flex w-full items-center justify-center gap-3 rounded-lg bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* BOTTOM CTA */}
      <section className="bg-white px-5 py-16 sm:px-10 lg:px-20">

        <div data-reveal="zoom" className="gradient-pan mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-[#07152D] via-[#123F78] to-[#07152D] px-8 py-12 text-center text-white md:flex-row md:text-left lg:px-14">

          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Ready to Connect With Us?
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-300">
              Let's find the right connectivity solution for your business.
            </p>
          </div>

          <a
            href="mailto:info@nasinternet.com"
            className="flex shrink-0 items-center gap-2 rounded-lg bg-white px-7 transition hover:-translate-y-0.5 py-3.5 font-semibold text-[#07152D] transition hover:bg-blue-100"
          >
            <MessageCircle size={19} />
            Contact Our Team
          </a>

        </div>

      </section>

    </div>
  );
};

export default Contact;
