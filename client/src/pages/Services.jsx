
import { Link } from "react-router-dom";
import {
  Building2,
  Radio,
  Network,
  Check,
  ArrowRight,
  Phone,
  MapPin,
  Gauge,
  ShieldCheck,
  Globe,
  Wifi,
  ArrowUpRight,
  Zap,
  Activity,
} from "lucide-react";

import leasedLine from "../assets/services/internet-leased-line.png";
import mixBandwidth from "../assets/services/mix-bandwidth.png";
import pointToPoint from "../assets/services/p2p-networks.png";
import lcoPartner from "../assets/services/lco.png";
import darkFibre from "../assets/services/dark-fibre.png";

// const audiences = [
//   { icon: Building2, title: "Enterprises & Corporate Offices" },
//   { icon: Radio, title: "LCOs & Last-Mile Partners" },
//   { icon: Network, title: "Data Centres & POP Locations" },
// ];

const services = [
  {
    id: 1,
    image: leasedLine,
    title: "Internet Leased Line (Direct Drop / DIA)",
    tag: "Internet Leased Line (Direct Drop / DIA)",
    description:
      "Dedicated, symmetric internet access with guaranteed bandwidth and low latency for mission-critical workloads."
  },
  {
    id: 2,
    image: mixBandwidth,
    title: "Mix Bandwidth",
    tag: "Mix Bandwidth - multiple upstream providers",
    description:
      "Blend of multiple upstream providers for better routing, redundancy and performance across regions and applications."
  },
  {
    id: 3,
    image: pointToPoint,
    title: "Point to Point (NLD / Local Loop)",
    tag: "Point to Point networks - NLD / Local Loop",
    description:
      "Private, secure P2P connectivity between offices, POPs and data centres over national long distance and local loop."
  },
  {
    id: 4,
    image: lcoPartner,
    title: "LCO / Partner Solutions",
    tag: "LCO Partner Solutions - backhaul & aggregation",
    description:

      "Backhaul and aggregation solutions designed specifically for Local Cable Operators and ISP partners."
  },
  {
    id: 5,
    image: darkFibre,
    title: "Dark Fibre",
    tag: "Dark Fibre - scalable routes and capacity planning",
    description:
      "Scalable dark fibre routes for customers needing full control over optical equipment and capacity planning."
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
  "Integration with existing routers, firewalls and MPLS/VPN setups",
];

const steps = [
  {
    number: "01",
    title: "Share Your Needs",
    text: "Tell us your locations, bandwidth and connectivity requirements.",
  },
  {
    number: "02",
    title: "Network Planning",
    text: "We plan routes, redundancy and a suitable network solution.",
  },
  {
    number: "03",
    title: "Deployment",
    text: "Move towards deployment with ongoing support and monitoring.",
  },
];

const Services = () => {
  return (
    <div className="w-full overflow-hidden bg-white text-slate-900">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#070D1C] px-4 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-28">

        <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-blue-600/20 blur-[130px]" />
        <div className="absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">

          {/* Hero content */}
          <div data-reveal="left" className="min-w-0">

            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold tracking-[0.2em] text-cyan-400">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Services & Products

            </span>

            <h1 className="mt-8 text-3xl font-extrabold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
              Connectivity Portfolio for

              <span className="block text-blue-500">
                ISPs, LCOs & Enterprises

              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              From dedicated leased lines to dark fiber and partner-friendly backhaul, NAS Internet delivers carrier-grade connectivity built for uptime and scale.


            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Discuss Your Requirement
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Explore Solutions
                <ArrowUpRight size={18} />
              </a>
            </div>

            {/* <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/10 pt-7">
              {audiences.map(({ icon: Icon, title }) => (
                <div key={title} className="flex items-center gap-2 text-sm text-slate-300">
                  <Icon size={18} className="text-cyan-400" />
                  {title}
                </div>
              ))}
            </div> */}
          </div>

          {/* Hero visual */}
          <div
            data-reveal="zoom"
            className="relative mx-auto flex h-[320px] w-full max-w-[460px] min-w-0 items-center justify-center sm:h-[390px]"
          >
            <div className="absolute h-[260px] w-[260px] rounded-full border border-blue-400/20 sm:h-[350px] sm:w-[350px]" />
            <div className="absolute h-[210px] w-[210px] rounded-full border border-dashed border-cyan-400/30 sm:h-[280px] sm:w-[280px]" />
            <div className="absolute h-[155px] w-[155px] rounded-full border border-blue-400/30 sm:h-[205px] sm:w-[205px]" />

            <div className="absolute h-60 w-60 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-[35px] border border-cyan-300/30 bg-gradient-to-br from-blue-600 to-cyan-400 text-white shadow-[0_0_65px_rgba(37,99,235,0.4)]">
              <Network size={62} />
            </div>

            <div className="absolute left-6 top-8 rounded-2xl border border-white/10 bg-[#111D35] p-4 text-cyan-400 shadow-xl">
              <Globe size={27} />
            </div>

            <div className="absolute right-3 top-20 rounded-2xl border border-white/10 bg-[#111D35] p-4 text-blue-400 shadow-xl">
              <Radio size={27} />
            </div>

            <div className="absolute bottom-10 left-8 rounded-2xl border border-white/10 bg-[#111D35] p-4 text-cyan-400 shadow-xl">
              <Wifi size={27} />
            </div>

            <div className="absolute bottom-5 right-8 rounded-2xl border border-white/10 bg-[#111D35] p-4 text-blue-400 shadow-xl">
              <Activity size={27} />
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-[#111D35] px-5 py-2 text-xs font-semibold tracking-widest text-cyan-300">
              CONNECTIVITY REDEFINED
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE PORTFOLIO */}
      <section id="portfolio" className="px-4 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex flex-col justify-center gap-5 md:flex-row md:items-end">
            <div data-reveal="left" className="text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                What We Provide
              </span>

              <h2 className="mt-4 text-3xl font-extrabold text-[#0B1224] sm:text-5xl">
                Our Connectivity
                <span className="text-blue-600"> Portfolio.</span>
              </h2>
            </div>

          </div>

          {/* Featured service */}
          <div
            data-reveal="zoom"
            className="group relative mb-7 grid overflow-hidden rounded-[28px] bg-[#0B1530] lg:grid-cols-2"
          >
            <div className="relative flex min-h-[310px] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 to-[#102B60] p-8 sm:p-12">
              <div className="absolute h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="absolute inset-8 rounded-full border border-white/10" />
              <div className="absolute inset-16 rounded-full border border-dashed border-cyan-300/20" />

              <img
                src={services[0].image}
                alt="Internet Leased Line"
                className=" rounded-2xl relative z-10 h-48 w-48 object-contain transition duration-500 group-hover:scale-110 sm:h-60 sm:w-60"
              />

              {/* <span className="absolute left-7 top-7 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold tracking-widest text-cyan-300">
                FEATURED SOLUTION
              </span> */}
            </div>

            <div className="flex flex-col justify-center p-8 text-white sm:p-12">
              <span className="text-xs font-bold tracking-[0.2em] text-cyan-400">
                {services[0].tag}
              </span>

              <h3 className="mt-5 text-3xl font-extrabold sm:text-4xl">
                {services[0].title}
              </h3>

              <p className="mt-5 max-w-lg leading-8 text-slate-400">
                {services[0].description}
              </p>

              <Link
                to="/services/1"
                className="mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
              >
                Explore Service
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Remaining four services */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(1).map((service, index) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                data-reveal
                style={{ "--d": `${index * 100}ms` }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/60"
              >
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-[#F0F5FC]">
                  <div className="absolute h-36 w-36 rounded-full bg-blue-100 blur-2xl transition group-hover:bg-blue-200" />

                  <img
                    src={service.image}
                    alt={service.title}
                    className=" rounded-2xl relative z-10 h-32 w-32 object-contain transition duration-500 group-hover:scale-110"
                  />

                  <span className="absolute right-4 top-4 text-xs font-bold text-blue-300">
                    0{service.id}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[10px] font-bold tracking-[0.15em] text-blue-600">
                    {service.tag}
                  </span>

                  <h3 className="mt-3 text-lg font-extrabold text-[#0B1224]">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold text-blue-600">
                    View Details
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 transition group-hover:bg-blue-600 group-hover:text-white">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* CUSTOM NETWORK DESIGN */}
      <section className="relative overflow-hidden bg-[#080E20] px-4 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">

          <div data-reveal="left">
            {/* <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Beyond Standard Solutions
            </span> */}

            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Custom Network Design

            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Every network is different. We help design connectivity that matches your application, redundancy and growth needs.


            </p>

            <div className="mt-9 space-y-5">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-cyan-400">
                    <Check size={16} />
                  </span>

                  <p className="text-sm leading-7 text-slate-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-500"
            >
              Discuss Custom Solutions
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Custom solution visual */}
          <div data-reveal="zoom" className="relative rounded-[30px] border border-white/10 bg-white/[0.04] p-7 sm:p-10">

            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <p className="text-xs font-bold tracking-widest text-cyan-400">
                    NETWORK ARCHITECTURE
                  </p>
                  {/* <h3 className="mt-2 text-xl font-bold text-white">
                    Custom Connectivity
                  </h3> */}
                </div>

                <Network size={30} className="text-blue-400" />
              </div>

              <div className="relative my-10 flex items-center justify-center">
                <div className="absolute h-48 w-48 rounded-full border border-dashed border-blue-400/30" />
                <div className="absolute h-36 w-36 rounded-full border border-cyan-400/20" />

                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                  <Network size={38} />
                </div>

                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#152442] text-cyan-400">
                  <Globe size={22} />
                </div>

                <div className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#152442] text-cyan-400">
                  <Radio size={22} />
                </div>

                <div className="absolute bottom-0 left-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#152442] text-cyan-400">
                  <Wifi size={22} />
                </div>

                <div className="absolute bottom-0 right-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#152442] text-cyan-400">
                  <Zap size={22} />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
                {customPoints.map(({ icon: Icon, text }) => (
                  <div key={text} className="text-center">
                    <Icon size={22} className="mx-auto text-cyan-400" />
                    <p className="mt-3 text-xs font-medium text-slate-300">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      {/* <section className="bg-[#F5F8FD] px-5 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div data-reveal className="mb-14 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Simple Process
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#0B1224] sm:text-5xl">
              From Planning to
              <span className="text-blue-600"> Connection.</span>
            </h2>
          </div>

          <div className="relative grid gap-7 md:grid-cols-3">

            <div className="absolute left-[16%] right-[16%] top-9 hidden h-px bg-blue-200 md:block" />

            {steps.map((step, index) => (
              <div
                key={step.number}
                data-reveal
                style={{ "--d": `${index * 120}ms` }}
                className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-blue-600 text-xl font-extrabold text-white shadow-lg shadow-blue-600/20">
                  {step.number}
                </div>

                <h3 className="mt-7 text-xl font-bold text-[#0B1224]">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-500">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FINAL CTA */}
      <section className="bg-white px-5 py-20 sm:px-10 lg:px-20">
        <div
          data-reveal="zoom"
          className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0B1B3A] via-[#123B83] to-blue-700 px-8 py-14 text-center text-white md:flex-row md:px-14 md:text-left"
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full border border-white/10" />

          <div className="relative">
            {/* <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              <Sparkles size={17} />
              Let's Get Connected
            </span> */}

            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
              Need a Custom Connectivity Proposal?
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-blue-100">
              Share your locations, expected bandwidth and services
              you're interested in. Our team will come back with options.
            </p>
          </div>

          <Link
            to="/contact"
            className="group relative inline-flex w-full flex-wrap items-center justify-center gap-3 rounded-full bg-white px-5 py-4 text-center font-bold text-blue-700 shadow-xl transition hover:-translate-y-1 hover:bg-cyan-50 md:w-auto md:shrink-0 md:px-7"
          >
            <Phone size={18} />
            Request a Call Back
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;
