import { useState } from "react";

import {
  Phone,
  Mail,
  Send,
  MessageCircle,
  Headphones,
  ArrowUpRight,
  Network,
  Building2,
} from "lucide-react";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // HANDLE INPUT CHANGES
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE FORM SUBMISSION
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // Temporary frontend submission
    // Connect your existing backend API here.

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

  // CONTACT DETAILS
  const contactDetails = [
    {
      icon: Phone,
      title: "Call Us",
      detail: "8800059059",
      // description: "Mon - Sat, 9:00 AM - 6:00 PM",
      link: "tel:8800059059",
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "info@nasinternet.com",
      // description: "We usually respond within 24 hours",
      link: "mailto:info@nasinternet.com",
    },
    {
      icon: Building2,
      title: "We Serve",
      detail: "ISPs, LCOs, Corporates, Institutions",
      // description: "Contact us for our office address",
      link: null,
    },
  ];

  return (
    <main className="w-full overflow-hidden bg-[#020617]">

      {/* =====================================
          1. HERO SECTION - DARK THEME
      ====================================== */}

      <section className="relative overflow-hidden bg-[#020617] px-5 py-24 text-white sm:px-10 lg:px-20 lg:py-28">

        {/* Background Glow */}
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        {/* Decorative Grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.3) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div data-reveal>

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold tracking-wider text-sky-400">

              <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400" />

              CONTACT NAS INTERNET

            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-[1.15] sm:text-5xl lg:text-6xl">

              Let's Build a

              <span className="block bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                Better Connection.
              </span>

            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">

              Looking for reliable internet connectivity or
              enterprise networking solutions?

              Connect with our team and discover the right
              solution for your business.

            </p>

            {/* HERO BUTTONS */}
            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#contact-form"
                className="group flex items-center gap-3 rounded-lg bg-blue-600 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
              >

                Send an Enquiry

                <ArrowUpRight
                  size={19}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />

              </a>

              <a
                href="tel:8800059059"
                className="flex items-center gap-3 rounded-lg border border-slate-700 px-7 py-4 font-semibold text-white transition hover:border-sky-400 hover:bg-sky-400/10"
              >

                <Phone size={18} />

                Call Us

              </a>

            </div>

            {/* FEATURES */}
            {/* <div className="mt-12 flex flex-wrap gap-8 border-t border-slate-800 pt-7"> */}

            {/* <div className="flex items-center gap-3">

                <ShieldCheck className="text-sky-400" size={25} />

                <div>
                  <p className="font-semibold text-white">
                    Reliable Support
                  </p>
                  <p className="text-xs text-slate-500">
                    Business assistance
                  </p>
                </div>

              </div> */}

            {/* <div className="flex items-center gap-3">

                <Headphones className="text-sky-400" size={25} />

                <div>
                  <p className="font-semibold text-white">
                    Direct Assistance
                  </p>
                  <p className="text-xs text-slate-500">
                    Talk to our team
                  </p>
                </div>

              </div> */}

            {/* </div> */}

          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex min-h-[350px] items-center justify-center">

            <div className="absolute h-72 w-72 rounded-full bg-blue-600/20 blur-[90px]" />

            <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/5 sm:h-96 sm:w-96">

              <div className="absolute inset-5 rounded-full border border-sky-400/20" />

              <div className="absolute inset-12 rounded-full border border-blue-400/20" />

              <div className="absolute inset-20 rounded-full border border-sky-400/20" />

              <div className="flex h-32 w-32 items-center justify-center rounded-3xl border border-sky-400/30 bg-blue-500/10 text-sky-400 shadow-[0_0_80px_rgba(37,99,235,0.25)] sm:h-40 sm:w-40">

                <Network size={75} strokeWidth={1.2} />

              </div>

              {/* Floating dots */}
              <span className="absolute right-12 top-12 h-3 w-3 animate-pulse rounded-full bg-sky-400 shadow-[0_0_20px_#38bdf8]" />

              <span className="absolute bottom-16 left-12 h-2 w-2 animate-pulse rounded-full bg-blue-400 shadow-[0_0_20px_#2563eb]" />

              <span className="absolute bottom-12 right-20 h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_20px_#67e8f9]" />

            </div>

            {/* FLOATING CARD */}
            <div className="absolute bottom-4 right-0 rounded-xl border border-sky-400/20 bg-[#0b1428]/90 p-4 shadow-2xl backdrop-blur-xl sm:bottom-12">

              <div className="flex items-center gap-3">

                <div className="rounded-lg bg-blue-500/20 p-2 text-sky-400">
                  <MessageCircle size={22} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Let's Connect
                  </p>
                  <p className="text-xs text-slate-400">
                    We're ready to help
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          2. CONTACT DETAILS + FORM
      ====================================== */}

      <section className="bg-[#f8fafc] px-5 py-24 sm:px-10 lg:px-20">

        <div className="mx-auto max-w-7xl">

          {/* SECTION HEADING */}
          <div data-reveal className="mx-auto mb-16 max-w-2xl text-center">

            <span className="text-sm font-bold uppercase tracking-[3px] text-blue-600">
              WE'RE HERE FOR YOU
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#07152D] sm:text-4xl">

              Fill in the details below and we’ll get back to you.


            </h2>

            {/* <p className="mt-5 leading-8 text-slate-500">

              Fill in the details below and we’ll get back to you.


            </p> */}

          </div>


          <div className="grid items-stretch gap-8 lg:grid-cols-5">

            {/* LEFT CONTACT INFORMATION */}
            <div data-reveal="left" className="lg:col-span-2">

              <div className="relative h-full overflow-hidden rounded-3xl bg-[#07152D] p-8 text-white shadow-xl sm:p-10">

                {/* Background Glow */}
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-[90px]" />

                <div className="relative">

                  <span className="text-sm font-bold uppercase tracking-widest text-WHITE-400">
                    CONTACT INFORMATION
                  </span>

                  {/* <h3 className="mt-4 text-3xl font-bold">
                    Let's Start a Conversation.
                  </h3> */}

                  {/* <p className="mt-5 leading-7 text-slate-400">
                    Reach out to us through your preferred
                    communication channel. We're happy to
                    assist with your business connectivity needs.
                  </p> */}

                  {/* CONTACT ITEMS */}
                  <div className="mt-10 space-y-9">

                    {contactDetails.map((item, index) => {

                      const Icon = item.icon;

                      return (

                        <div
                          key={index}
                          className="group flex gap-4"
                        >

                          <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-sky-400 transition duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">

                            <Icon size={23} />

                          </div>

                          <div className="min-w-0">

                            <h4 className="font-semibold text-white">
                              {item.title}
                            </h4>

                            {item.link ? (

                              <a
                                href={item.link}
                                className="mt-2 block break-all text-sm font-medium text-sky-400 transition hover:text-white"
                              >
                                {item.detail}
                              </a>

                            ) : (

                              <p className="mt-2 text-sm font-medium text-sky-400">
                                {item.detail}
                              </p>

                            )}

                            <p className="mt-2 text-sm leading-6 text-slate-400">
                              {item.description}
                            </p>

                          </div>

                        </div>

                      );

                    })}

                  </div>


                  {/* SUPPORT BOX */}
                  <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">

                    <div className="flex items-center gap-3">

                      <Headphones className="text-sky-400" size={25} />

                      <h4 className="font-bold text-white">
                        Need Assistance?
                      </h4>

                    </div>

                    <p className="mt-3 text-sm leading-7 text-slate-400">

                      Our team is available to help you
                      with service enquiries and connectivity
                      requirements.

                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* RIGHT CONTACT FORM */}
            <div
              id="contact-form"
              data-reveal="right"
              className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-10 lg:col-span-3"
            >

              <div className="mb-9">

                <span className="text-sm font-bold uppercase tracking-[2px] text-blue-600">
                  SEND AN ENQUIRY
                </span>

                {/* <h3 className="mt-3 text-3xl font-bold text-[#07152D]">
                  Get In Touch With Us
                </h3> */}

                {/* <p className="mt-4 leading-7 text-slate-500">
                  Fill out the form below with your details
                  and requirements.
                </p> */}

              </div>


              <form onSubmit={handleSubmit} className="space-y-6">

                {/* NAME + EMAIL */}
                <div className="grid gap-6 sm:grid-cols-2">

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      FULL NAME *
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />

                  </div>


                  <div>

                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      EMAIL *
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />

                  </div>
                  <div>

                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      COMPANY *
                    </label>

                    <input
                      type="text"
                      name="company"
                      placeholder="Enter your company name"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />

                  </div>

                </div>


                {/* PHONE + SUBJECT */}
                <div className="grid gap-6 sm:grid-cols-2">

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      PHONE *
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9+\\-\\s]{10,15}"
                      title="Enter a valid phone number"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />

                  </div>


                  <div>

                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      SERVICE *
                    </label>

                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    >

                      <option value="">Select Service</option>
                      <option value="Internet Leased Line (Direct Drop / DIA)">
                        Internet Leased Line (Direct Drop / DIA)
                      </option>

                      <option value="Mix Bandwidth">
                        Mix Bandwidth
                      </option>

                      <option value="Point to Point (NLD / Local Loop)">
                        Point to Point (NLD / Local Loop)
                      </option>

                      <option value="LCO / partner Solutions">
                        LCO / partner Solutions
                      </option>

                      <option value="Dark Fibre">
                        Dark Fibre
                      </option>

                    </select>

                  </div>

                </div>


                {/* MESSAGE */}
                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    MESSAGE *
                  </label>

                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />

                </div>


                {/* SUBMIT BUTTON */}
                <div className="pt-2">

                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-600/30 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >

                    {loading ? "Sending..." : "Send Message"}

                    <Send
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />

                  </button>

                </div>

                {/* <p className="text-xs leading-6 text-slate-400">
                  By submitting this form, you agree to be
                  contacted regarding your enquiry.
                </p> */}

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          3. BOTTOM CTA - DARK THEME
      ====================================== */}

      {/* <section className="bg-white px-5 py-20 sm:px-10 lg:px-20">

        <div
          data-reveal="zoom"
          className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl bg-gradient-to-r from-[#07152D] via-[#123F78] to-[#07152D] px-8 py-14 text-center text-white shadow-xl md:flex-row md:text-left lg:px-14"
        >

          {/* Background Glow */}
      {/* <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-400/20 blur-[100px]" />

          <div className="relative">

            <span className="text-sm font-bold uppercase tracking-widest text-sky-400">
              HAVE A PROJECT IN MIND?
            </span>

            <h2 className="mt-4 text-2xl font-bold sm:text-4xl">
              Ready to Connect With Us?
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              Let's find the right connectivity solution
              for your business.
            </p>

          </div>


          <a
            href="mailto:info@nasinternet.com"
            className="relative flex shrink-0 items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-[#07152D] transition hover:-translate-y-1 hover:bg-sky-100"
          >

            <MessageCircle size={19} />

            Contact Our Team

            <ArrowRight size={18} />

          </a>

        </div> */}

      {/* </section> */}

    </main>
  );
};

export default Contact;
