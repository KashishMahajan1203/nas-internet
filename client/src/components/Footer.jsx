
import { Link } from "react-router-dom";
import { Mail, Phone, ArrowUpRight } from "lucide-react";


function Footer() {
  return (
    <footer className="bg-[#091b33] px-6 pt-16 pb-8 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-4">

        <div>
          <h2 className="text-2xl font-extrabold">
            NAS <span className="text-sky-400">Internet</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400">
            Carrier-grade internet & network connectivity for LCOs, businesses, and institutions across India.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>

          <div className="mt-6 flex flex-col gap-4 text-sm text-slate-400">
            <Link to="/" className="hover:text-sky-400">Home</Link>
            <Link to="/services" className="hover:text-sky-400">Services</Link>
            <Link to="/about" className="hover:text-sky-400">About</Link>
            <Link to="/contact" className="hover:text-sky-400">Contact Us</Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold">Services</h3>

          <div className="mt-6 flex flex-col gap-4 text-sm text-slate-400">
            <Link to="/services/1">Internet Leased Line</Link>
            <Link to="/services/2">Mix Bandwidth</Link>
            <Link to="/services/3">Point to Point (NLD)</Link>
            <Link to="/services/4">LCO Partner Solutions</Link>
            <Link to="/services/5">Dark Fibre</Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold">Get In Touch</h3>

          <div className="mt-6 flex flex-col gap-5 text-sm text-slate-400">
            <a href="mailto:info@nasinternet.com"
              className="flex items-center gap-3 hover:text-sky-400">
              <Mail size={19} />
              info@nasinternet.com
            </a>

            <a href="tel:8800059059"
              className="flex items-center gap-3 hover:text-sky-400">
              <Phone size={19} />
              8800059059
            </a>
          </div>


        </div>

      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 pt-7 text-center">
        <p className="text-sm text-slate-500">
          © 2025 NAS Internet. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
