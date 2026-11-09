import { Link } from "react-router-dom";
import {
  Building2,
  Radio,
  Network,
  Check,
  ArrowRight,
  Phone,
  Sparkles,
  MapPin,
  Gauge,
  ShieldCheck,
} from "lucide-react";

import leasedLine from "../assets/services/internet-leased-line.png";
import mixBandwidth from "../assets/services/mix-bandwidth.png";
import pointToPoint from "../assets/services/p2p-networks.png";
import lcoPartner from "../assets/services/lco.png";
import darkFibre from "../assets/services/dark-fibre.png";

const audiences = [
  { icon: Building2, title: "Enterprises & corporate offices" },
  { icon: Radio, title: "LCOs & last-mile partners" },
  { icon: Network, title: "Data centres & POP locations" },
];

const services = [
  {
    id: 1,
    image: leasedLine,
    title: "Internet Leased Line",
    tag: "Direct Drop / DIA",
    description:
      "Dedicated, symmetric internet access with guaranteed bandwidth and low latency for mission-critical workloads.",
  },
  {
    id: 2,
    image: mixBandwidth,
    title: "Mix Bandwidth",
    tag: "Multiple upstreams",
    description:
      "Blend of multiple upstream providers for better routing, redundancy and performance across regions and applications.",
  },
  {
    id: 3,
    image: pointToPoint,
    title: "Point to Point",
    tag: "NLD / Local Loop",
    description:
      "Private, secure P2P connectivity between offices, POPs and data centres over national long distance and local loop.",
  },
  {
    id: 4,
    image: lcoPartner,
    title: "LCO / Partner Solutions",
    tag: "Backhaul & aggregation",
    description:
      "Backhaul and aggregation solutions designed specifically for Local Cable Operators and ISP partners.",
  },
  {
    id: 5,
    image: darkFibre,
    title: "Dark Fibre",
    tag: "Full optical control",
    description:
      "Scalable dark fibre routes for customers needing full control over optical equipment and capacity planning.",
  },
];

const customPoints = [
  { icon: MapPin, text: "Any location" },
  { icon: Gauge, text: "Any bandwidth" },
  { icon: ShieldCheck, text: "Built-in redundancy" },
];

const benefits = [
  "Multi-site and multi-city network architecture",
  "Redundant links and failover planning",
  "Integration with your existing routers, firewalls and MPLS/VPN setups",
];

const steps = [
  { title: "Share your needs", text: "Locations, bandwidth and services required." },
  { title: "We design", text: "Routes, redundancy and a clear proposal." },
  { title: "Go live", text: "Deployment with ongoing support and monitoring." },
];

const Services = () => {
  return (
    <div className="w-full overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="relative bg-[#f5f9ff] px-5 py-20 text-center sm:py-24">
        <div className="float-slow pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />
        <div className="float pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <span
            data-reveal
            className="inline-flex rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700"
          >
            Services & Products
          </span>

          <h1
            data-reveal
            style={{ "--d": "100ms" }}
            className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl"
          >
            Connectivity for
            <span className="gradient-pan block bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              ISPs, LCOs & Enterprises
            </span>
          </h1>

          <p
            data-reveal
            style={{ "--d": "200ms" }}
            className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600"
          >
            From dedicated leased lines to dark fibre and partner-friendly
            backhaul, NAS Internet delivers carrier-grade connectivity built
            for uptime and scale.
          </p>

          <div data-reveal style={{ "--d": "300ms" }}>
            <Link
              to="/contact"
              className="shine group relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-lg bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Discuss Your Requirement
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Who it's for */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {audiences.map(({ icon: Icon, title }, i) => (
              <span
                key={title}
                data-reveal="zoom"
                style={{ "--d": `${400 + i * 100}ms` }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:border-blue-300"
              >
                <Icon size={16} className="text-blue-600" />
                {title}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="px-5 py-20 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Core Connectivity Portfolio</h2>
            <p className="mt-3 text-slate-500">
              Focused products for high-performance, always-online environments.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <div
                key={service.title}
                data-reveal
                style={{ "--d": `${(i % 3) * 120}ms` }}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/70"
              >
                <img
                  src={service.image}
                  alt=""
                  className="h-14 w-14 rounded-xl object-cover transition duration-300 group-hover:scale-110"
                />

                <h3 className="mt-5 text-lg font-bold">{service.title}</h3>
                <p className="mt-1 text-sm font-medium text-blue-600">{service.tag}</p>

                <p className="mt-3 flex-grow leading-7 text-slate-600">{service.description}</p>

                 <Link
                  to={`/services/${service.id}`}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#38BDF8] transition-all hover:gap-3"
                >
                  Read More <ArrowRight size={17} />
                </Link>
              </div>
            ))}

            {/* Custom requirement card */}
            <div
              data-reveal
              style={{ "--d": "240ms" }}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-[#0b1f4d] via-[#123a8a] to-blue-600 p-7 text-white shadow-xl shadow-blue-900/20 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-600/30"
            >
              {/* decorative glow + rings */}
              <div className="float pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-sky-400/30 blur-2xl" />
              <div className="spin-slow pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full border border-dashed border-white/20" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:18px_18px]" />

              <div className="relative flex-grow">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/30 backdrop-blur">
                  <span className="pulse-ring absolute inset-0 rounded-xl ring-2 ring-sky-300/60" />
                  <Sparkles size={22} className="text-sky-200" />
                </div>

                <h3 className="mt-5 text-xl font-bold">Need something custom?</h3>
                <p className="mt-2 text-sm leading-6 text-blue-100/90">
                  Tell us your locations and bandwidth needs. We'll design the
                  right mix for you.
                </p>

                <ul className="mt-5 space-y-2.5">
                  {customPoints.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-2.5 text-sm font-medium">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
                        <Icon size={15} className="text-sky-200" />
                      </span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className="shine relative mt-6 flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-700 shadow-lg transition hover:bg-sky-50"
              >
                Talk to us
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM NETWORK DESIGN */}
      <section className="bg-[#f5f9ff] px-5 py-20 sm:px-10">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div data-reveal="left">
            <h2 className="text-3xl font-bold sm:text-4xl">Custom Network Design</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Every network is different. We help design connectivity that
              matches your application, redundancy and growth needs.
            </p>

            <ul className="mt-6 space-y-4">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <ol className="relative space-y-4">
            {/* connecting line behind the step numbers */}
            <span className="absolute bottom-10 left-[38px] top-10 w-px bg-blue-200" />
            {steps.map((step, i) => (
              <li
                key={step.title}
                data-reveal="right"
                style={{ "--d": `${i * 150}ms` }}
                className="relative flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 hover:border-blue-300 hover:shadow-md"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-md shadow-blue-600/30">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:px-10">
        <div
          data-reveal="zoom"
          className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl bg-slate-900 px-8 py-12 text-center text-white md:flex-row md:px-12 md:text-left"
        >
          <div className="float-slow pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-blue-600/40 blur-3xl" />

          <div className="relative">
            <h2 className="text-2xl font-bold sm:text-3xl">Need a Proposal?</h2>
            <p className="mt-3 max-w-xl text-slate-300">
              Share your locations, expected bandwidth and services you're
              interested in. Our team will come back with options.
            </p>
          </div>

          <Link
            to="/contact"
            className="shine relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-lg bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
          >
            <Phone size={18} />
            Request a Call Back
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
