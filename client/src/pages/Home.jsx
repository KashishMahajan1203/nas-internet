
import {
  ArrowRight,
  Globe,
  Network,
  RadioTower,
  ShieldCheck,
  Clock,
  Building2,
} from "lucide-react";

import { Link } from "react-router-dom";

import { Mail, Phone } from "lucide-react";


import leasedLine from "../assets/services/internet-leased-line.png";
import mixBandwidth from "../assets/services/mix-bandwidth.png";
import pointToPoint from "../assets/services/p2p-networks.png";
import lcoPartner from "../assets/services/lco.png";
import darkFibre from "../assets/services/dark-fibre.png";
const services = [
  {
    id: 1,
    image: leasedLine,
    title: "Internet Leased Line - Direct Drop / DIA",
    subtitle: "Internet Leased Line (Direct Drop / DIA)",
    description:
      "Dedicated, symmetric internet access with guaranteed bandwidth and low latency for mission-critical workloads.",
  },
  {
    id: 2,
    image: mixBandwidth,
    title: "Mix Bandwidth - multiple upstream providers",
    subtitle: "Mix Bandwidth",
    description:
      "Blend of multiple upstream providers for better routing, redundancy and performance across regions and applications.",
  },
  {
    id: 3,
    image: pointToPoint,
    title: "Point to Point networks - NLD / Local Loop",
    subtitle: "Point to Point (NLD / Local Loop)",
    description:
      "Private, secure P2P connectivity between offices, POPs and data centres over national long distance and local loop.",
  },
  {
    id: 4,
    image: lcoPartner,
    title: "LCO Partner Solutions - backhaul & aggregation",
    subtitle: "LCO / Partner Solutions",
    description:
      "Backhaul and aggregation solutions designed specifically for Local Cable Operators and ISP partners.",
  },
  {
    id: 5,
    image: darkFibre,
    title: "Dark Fibre - scalable routes and capacity planning",
    subtitle: "Dark Fibre",
    description:
      "Scalable dark fibre routes for customers needing full control over optical equipment and capacity planning.",
  },
];

const audiences = [
  "Internet Service Providers",
  "Local Cable Operators",
  "Corporates",
  "Institutions",
  "Data Centers",
];

function Home() {
  return (
    <main className="overflow-hidden bg-white">

      {/* HERO SECTION */}
      <section className="relative bg-[#f5f9ff]">
        <div className="mx-auto grid min-h-[570px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">

          <div>
            <span data-reveal className="mb-6 inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              High-speed connectivity for businesses & LCOs
            </span>

            <h1 data-reveal style={{ "--d": "100ms" }} className="max-w-2xl text-4xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[58px]">
              Reliable Internet &
              <span className="block text-blue-600">
                Network Solutions
              </span>
              for Your Business.
            </h1>

            <p data-reveal style={{ "--d": "200ms" }} className="mt-7 max-w-xl text-base leading-8 text-slate-600">
              NAS Internet delivers dedicated leased lines, mix bandwidth
              and point-to-point links with enterprise-grade reliability
              and responsive support.
            </p>

            <div data-reveal style={{ "--d": "300ms" }} className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="shine group relative inline-flex items-center gap-3 overflow-hidden rounded-lg bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Talk to Our Team
                <ArrowRight size={19} className="transition group-hover:translate-x-1" />
              </Link>

              <Link
                to="/services"
                className="rounded-lg border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-600 hover:text-blue-600"
              >
                View All Services
              </Link>
            </div>

            <div data-reveal style={{ "--d": "400ms" }} className="mt-12 grid grid-cols-3 gap-5 border-t border-slate-200 pt-7">
              <div>
                <Globe className="mb-3 text-blue-600" size={25} />
                <p className="text-sm font-bold text-slate-800">
                  Internet Leased Line
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Direct Drop / DIA
                </p>
              </div>

              <div>
                <Network className="mb-3 text-blue-600" size={25} />
                <p className="text-sm font-bold text-slate-800">
                  Point to Point
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  NLD / Local Loop
                </p>
              </div>

              <div>
                <RadioTower className="mb-3 text-blue-600" size={25} />
                <p className="text-sm font-bold text-slate-800">
                  Partners
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  LCOs & Enterprises
                </p>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div data-reveal="right" style={{ "--d": "200ms" }} className="relative mx-auto w-full max-w-[550px]">
            <div className="float absolute -left-8 -top-8 h-40 w-40 rounded-full bg-blue-200/50 blur-3xl" />
            <div className="float-slow absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-sky-200/60 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-[#0d2850] p-8 shadow-2xl sm:p-12">
              <div className="spin-slow absolute -right-20 -top-20 h-64 w-64 rounded-full border border-dashed border-blue-400/30" />
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-blue-400/30" />

              <div className="relative flex flex-col items-center py-8 text-center">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-500/20 text-sky-300">
                  <span className="pulse-ring absolute inset-0 rounded-3xl ring-2 ring-sky-400/50" />
                  <Globe size={58} strokeWidth={1.4} className="spin-slow" />
                </div>

                <h2 className="mt-8 text-3xl font-bold text-white">
                  Need a customised solution or pin-based plan?
                </h2>

                <p className="mt-4 max-w-sm leading-7 text-blue-100">
                  Call 8800059059 or email info@nasinternet.com
                </p>

                {/* <div className="mt-10 grid w-full grid-cols-2 gap-4">
                  <div className="rounded-xl border border-white/10 bg-white/10 p-5">
                    <ShieldCheck className="mx-auto text-sky-300" size={30} />
                    <p className="mt-3 font-semibold text-white">
                      99.9%
                    </p>
                    <p className="mt-1 text-xs text-blue-100">Uptime</p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/10 p-5">
                    <Headphones className="mx-auto text-sky-300" size={30} />
                    <p className="mt-3 font-semibold text-white">
                      24/7
                    </p>
                    <p className="mt-1 text-xs text-blue-100">Support</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div data-reveal="left">
            <span className="text-sm font-bold uppercase tracking-[3px] text-blue-600">
              Company Overview
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              About NAS Internet
            </h2>

            <p className="mt-7 leading-8 text-slate-600">
              NAS Internet provides carrier-grade internet and network
              connectivity, focused on performance, uptime and dedicated
              support. We work closely with LCOs, businesses and
              organisations that require stable and scalable connectivity.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-bold text-blue-600 transition-all hover:gap-4"
            >
              Learn More <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div data-reveal="zoom" style={{ "--d": "100ms" }} className="rounded-2xl bg-blue-50 p-8 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-blue-100">
              <ShieldCheck size={38} className="text-blue-600" />
              <h3 className="mt-5 text-2xl font-bold text-slate-900">99.9%</h3>
              <p className="mt-2 text-sm text-slate-600">Uptime</p>
            </div>

            <div data-reveal="zoom" style={{ "--d": "250ms" }} className="mt-10 rounded-2xl bg-slate-50 p-8 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-slate-200">
              <Clock size={38} className="text-blue-600" />
              <h3 className="mt-5 text-2xl font-bold text-slate-900">24/7</h3>
              <p className="mt-2 text-sm text-slate-600">Support</p>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-[#020617] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div data-reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[3px] text-[#38BDF8]">
              Core Offerings
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              What We Provide
            </h2>

            <p className="mt-5 leading-6 text-[#94A3B8]">
              Explore some of our core offerings designed for high-demand environments.
            </p>
          </div>

          <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <div
                key={service.title}
                data-reveal
                style={{ "--d": `${(i % 3) * 120}ms` }}
                className="group rounded-2xl border border-slate-200 bg-[#020617] p-8 transition duration-300 hover:-translate-y-2 border-s hover:shadow-[#38BDF8] hover:shadow-xl"
              >
                <div className="mb-5 flex h-15  overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full rounded-xl object-cover"
                  />
                </div>
                <h3 className="mt-3 text-xl font-bold text-[#94A3B8]">
                  {service.title}
                </h3>
                <p className="mt-7 text-xs font-bold uppercase tracking-wider text-[#FFFFFF]">
                  {service.subtitle}
                </p>



                <p className="mt-4 text-sm leading-7 text-[#CBD5E1]">
                  {service.description}
                </p>

                <Link
                  to={`/services/${service.id}`}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#38BDF8] transition-all hover:gap-3"
                >
                  Read More <ArrowRight size={17} />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHO WE SERVE */}
      {/* <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">

          <span className="text-sm font-bold uppercase tracking-[3px] text-blue-600">
            Our Network
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Who We Serve
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Reliable connectivity solutions for organisations
            across different industries.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-4">
            {audiences.map((audience) => (
              <div
                key={audience}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition hover:border-blue-300 hover:shadow-md"
              >
                <Building2 size={22} className="text-blue-600" />
                <span className="font-semibold text-slate-700">
                  {audience}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section> */}

      {/* CONTACT CTA */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          {/* LEFT SECTION */}
          <div data-reveal="left">
            <h2 className="text-3xl font-extrabold text-[#0F172A] sm:text-4xl">
              Get in Touch
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-[#64748A]">
              Share your requirement and our team will suggest the right product or combination for your infrastructure.
            </p>

            <div className="mt-10 space-y-7">

              {/* Email */}
              <div className="flex items-center gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF]">
                  <Mail size={24} className="text-[#0F172A]" />
                </div>

                <div>
                  <p className="text-sm font-bold tracking-[2px] text-[#64748A]">
                    EMAIL US
                  </p>
                  <a
                    href="mailto:info@nasinternet.com"
                    className="text-xl font-bold text-[#0F172A]"
                  >
                    info@nasinternet.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF]">
                  <Phone size={24} className="fill-[#0F172A] text-[#0F172A]" />
                </div>

                <div>
                  <p className="text-sm font-bold tracking-[2px] text-[#64748A]">
                    CALL US
                  </p>
                  <a
                    href="tel:8800059059"
                    className="text-xl font-bold text-[#0F172A]"
                  >
                    8800059059
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SECTION */}
          <div data-reveal="right" style={{ "--d": "150ms" }} className="flex flex-col justify-center rounded-3xl bg-[#080f35] p-7 text-white shadow-xl md:p-10 lg:p-12">

            <h2 className="mb-5 text-xl font-bold md:text-2xl">
              Who We Serve
            </h2>

            <div className="mb-10 flex flex-wrap gap-2.5">
              {audiences.map((audience) => (
                <span
                  key={audience}
                  className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3.5 py-1.5 text-sm font-medium text-gray-100 transition hover:bg-blue-500/30"
                >
                  {audience}
                </span>
              ))}
            </div>

            <Link
              to="/contact"
              className="shine relative overflow-hidden flex min-h-14 w-full items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-700 px-5 py-4 text-center font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:from-sky-400 hover:to-blue-600"
            >
              Send an Inquiry
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Home;
