
import React from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  Network,
  ShieldCheck,
  Headset,
  Zap,
  Building2,
  Server,
  GraduationCap,
  Cable,
  Globe2,
  CheckCircle2,
  Activity,
} from "lucide-react";

import NetworkGlobe from "../components/NetworkGlobe";

// SERVICES DATA
const services = [
  {
    number: "01",
    title: "Internet Leased Line (Direct Drop / DIA)",
    description:
      "Dedicated, symmetric internet access with guaranteed bandwidth and low latency for mission-critical workloads.",
    icon: Network,
    link: "/services/1",
  },
  {
    number: "02",
    title: "Mix Bandwidth",
    description:
      "Blend of multiple upstream providers for better routing, redundancy and performance across regions and applications..",
    icon: Activity,
    link: "/services/2",
  },
  {
    number: "03",
    title: "Point to Point (NLD / Local Loop)",
    description:
      "Private, secure P2P connectivity between offices, POPs and data centres over national long distance and local loop.",
    icon: Cable,
    link: "/services/3",
  },
  {
    number: "04",
    title: "LCO / Partner Solutions",
    description:
      "Backhaul and aggregation solutions designed specifically for Local Cable Operators and ISP partners.",
    icon: Building2,
    link: "/services/4",
  },
  {
    number: "05",
    title: "Dark Fibre",
    description:
      "Scalable dark fibre routes for customers needing full control over optical equipment and capacity planning.",
    icon: Zap,
    link: "/services/5",
  },
];

// WHY CHOOSE US DATA
const benefits = [
  {
    icon: ShieldCheck,
    title: "Reliable Infrastructure",
    description:
      "Dependable network infrastructure designed to support business operations.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description:
      "Connectivity solutions designed for demanding digital environments.",
  },
  {
    icon: Headset,
    title: "Technical Support",
    description:
      "Dedicated technical assistance for your connectivity requirements.",
  },
  {
    icon: Network,
    title: "Scalable Solutions",
    description:
      "Flexible network solutions that can grow alongside your business.",
  },
];

// INDUSTRIES DATA
const industries = [
  {
    name: "Internet Service Providers",
    icon: Globe2,
  },
  {
    name: "Local Cable Operators",
    icon: Cable,
  },
  {
    name: "Corporate Offices",
    icon: Building2,
  },
  {
    name: "Educational Institutions",
    icon: GraduationCap,
  },
  {
    name: "Data Centers",
    icon: Server,
  },
];

// SECTION LABEL COMPONENT
function SectionLabel({ children, light = false }) {
  return (
    <div
      className={`mb-5 inline-flex max-w-full items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold tracking-[0.16em] ${light
        ? "border-blue-200 bg-blue-50 text-blue-700"
        : "border-blue-400/20 bg-blue-500/10 text-sky-400"
        }`}
    >
      <span className="h-2 w-2 rounded-full bg-sky-400" />
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">

      {/* =====================================
          1. HERO SECTION - DARK THEME
      ====================================== */}

      <section className="relative min-h-[560px] overflow-hidden bg-[#020617] text-white sm:min-h-[680px] lg:min-h-[760px]">

        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,rgba(37,99,235,0.20),transparent_45%)]" />

        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:gap-6 sm:px-8 sm:py-20 lg:grid-cols-2 lg:px-10 lg:py-24">

          {/* Hero Content */}
          <div className="relative z-10 min-w-0">

            <SectionLabel>
              High-speed connectivity for businesses & LCOs

            </SectionLabel>

            <h1 className="max-w-xl text-3xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">

              Reliable Internet &

              <span className="block bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                Network Solutions
              </span>
              <span className="block">
                for Your Business.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">

              NAS Internet delivers dedicated leased lines, mix bandwidth and point-to-point links with enterprise-grade reliability and responsive support.

            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                to="/services"
                className="group inline-flex items-center gap-3 rounded-lg bg-blue-600 px-7 py-4 font-semibold text-white transition duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Explore Our Services

                <ArrowUpRight
                  size={19}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-lg border border-slate-700 px-7 py-4 font-semibold text-white transition duration-300 hover:border-sky-400 hover:bg-sky-400/10"
              >
                Talk to Our Experts

                <ArrowRight size={18} />
              </Link>

            </div>

            {/* Hero Features */}
            {/* <div className="mt-12 flex flex-wrap gap-8 border-t border-slate-800 pt-7"> */}

            {/* <div>
                <p className="text-xl font-bold text-white">
                  Business
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Connectivity Solutions
                </p>
              </div>

              <div>
                <p className="text-xl font-bold text-white">
                  Scalable
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Network Infrastructure
                </p>
              </div> */}

            {/* </div> */}

          </div>

          {/* 3D GLOBE */}
          <div className="relative flex min-w-0 items-center justify-center">

            <NetworkGlobe />

            {/* Floating Card */}
            <div className="absolute left-0 top-[20%] hidden rounded-xl border border-sky-400/20 bg-slate-900/80 p-4 shadow-xl backdrop-blur-xl sm:block">

              <div className="flex items-center gap-2 text-sm font-semibold">

                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                Network Connectivity

              </div>

              <p className="mt-1 text-xs text-slate-400">
                Built for business
              </p>

            </div>

            <div className="absolute bottom-[15%] right-0 hidden rounded-xl border border-blue-400/20 bg-slate-900/80 p-4 shadow-xl backdrop-blur-xl sm:block">

              <p className="text-xs text-slate-400">
                Connectivity Solutions
              </p>

              <p className="mt-1 text-lg font-bold text-sky-400">
                Enterprise Grade
              </p>

            </div>

          </div>

        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      </section>


      {/* =====================================
          2. STATISTICS - DARK THEME
      ====================================== */}

      {/* <section className="border-y border-slate-800 bg-[#080f22]">

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-12 sm:grid-cols-4 sm:px-8 lg:px-10">

          {[
            {
              // value: "01",
              label: "Reliable Connectivity",
            },
            {
              // value: "02",
              label: "Network Solutions",
            },
            {
              // value: "03",
              label: "Business Focus",
            },
            {
              // value: "04",
              label: "Technical Support",
            },
          ].map((item) => (

            <div
              key={item.value}
              className="group text-center"
            >

              {/* <h3 className="text-3xl font-bold text-sky-400 transition group-hover:text-blue-400">
                {item.value}
              </h3> */}

      {/* <p className="mt-2 text-xl font-semibold text-slate-400">
                {item.label}
              </p>

            </div>

          ))}

        </div> */}

      {/* </section> */}


      {/* =====================================
          3. ABOUT SECTION - LIGHT THEME
      ====================================== */}

      <section className="bg-[#f8fafc] py-16 text-slate-900 sm:py-20 lg:py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-14 sm:px-8 lg:grid-cols-2 lg:px-10">

          {/* Visual */}
          <div className="relative flex min-h-[300px] min-w-0 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#07152e] via-[#0b2450] to-[#123b83] p-5 sm:min-h-[390px] sm:p-8">

            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(#60a5fa 1px, transparent 1px)",
                backgroundSize: "25px 25px",
              }}
            />

            <div className="relative z-10 text-center">

              <Network
                size={64}
                className="mx-auto text-sky-400 sm:h-[90px] sm:w-[90px]"
              />

              <h3 className="mt-7 text-3xl font-bold text-white">
                Connected for Growth
              </h3>

              <p className="mt-3 text-slate-300">
                Building dependable network infrastructure.
              </p>

            </div>

            <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full border border-sky-400/30" />

            <div className="absolute -bottom-10 -right-0 h-48 w-48 rounded-full border border-sky-400/20" />

          </div>


          {/* About Content */}
          <div>

            <SectionLabel light>
              ABOUT NAS INTERNET
            </SectionLabel>

            <h2 className="text-3xl font-bold leading-tight sm:text-5xl">

              Connecting Businesses to a

              <span className="text-blue-600">
                {" "}Better Future.
              </span>

            </h2>

            <p className="mt-7 leading-8 text-slate-600">

              NAS Internet provides carrier-grade internet and network connectivity, focused on performance, uptime and dedicated support. We work closely with LCOs, businesses and organisations that require stable and scalable connectivity.

            </p>

            <div className="mt-7 space-y-4">

              {[
                "Enterprise connectivity solutions",
                "Scalable network infrastructure",
                "Dedicated technical support",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    className="shrink-0 text-blue-600"
                    size={21}
                  />

                  <span className="font-medium text-slate-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-3 rounded-lg bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
            >

              Discover Our Company

              <ArrowRight size={19} />

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================
          4. SERVICES SECTION - DARK THEME
      ====================================== */}

      <section className="bg-[#020617] py-16 text-white sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-2xl text-center">

            <SectionLabel>
              OUR CORE OFFERINGS
            </SectionLabel>

            <h2 className="text-3xl font-bold sm:text-5xl">

              Connectivity Solutions

              <span className="text-sky-400">
                {" "}That Work.
              </span>

            </h2>

            <p className="mt-5 leading-7 text-slate-400">

              Explore some of our core offerings designed for high-demand environments.

            </p>

          </div>


          {/* Service Cards */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => {

              const Icon = service.icon;

              return (

                <Link
                  to={service.link}
                  key={service.number}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0b1428] p-8 transition duration-300 hover:-translate-y-2 hover:border-sky-400/60 hover:bg-[#101f3b]"
                >

                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-600/10 blur-3xl transition group-hover:bg-blue-500/25" />

                  <div className="relative flex items-center justify-between">

                    <div className="rounded-xl border border-blue-400/20 bg-blue-500/10 p-4 text-sky-400 transition group-hover:bg-blue-500/20">

                      <Icon size={30} />

                    </div>

                    <span className="text-4xl font-bold text-slate-800">
                      {service.number}
                    </span>

                  </div>

                  <h3 className="relative mt-9 text-l font-bold text-white">

                    {service.title}

                  </h3>

                  <p className="relative mt-4 min-h-[72px] leading-7 text-slate-400">

                    {service.description}

                  </p>

                  <div className="relative mt-7 flex items-center justify-between border-t border-slate-800 pt-5 font-semibold text-sky-400">

                    <span>Explore Service</span>

                    <ArrowUpRight
                      size={21}
                      className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />

                  </div>

                </Link>

              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================
          5. WHY CHOOSE US - LIGHT THEME
      ====================================== */}

      <section className="bg-[#f8fafc] py-16 text-slate-900 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>

              <SectionLabel light>
                WHY CHOOSE NAS
              </SectionLabel>

              <h2 className="text-3xl font-bold leading-tight sm:text-5xl">

                More Than Connectivity.

                <span className="text-blue-600">
                  {" "}A Network You Can Depend On.
                </span>

              </h2>

              {/* <p className="mt-6 leading-8 text-slate-600">

                The right network infrastructure makes a
                difference. We focus on providing connectivity
                solutions that support business performance
                and future growth.

              </p> */}

              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 font-bold text-blue-600 transition hover:gap-4"
              >

                Learn More About Us

                <ArrowRight size={19} />

              </Link>

            </div>


            {/* Benefit Cards */}
            <div className="grid gap-5 sm:grid-cols-2">

              {benefits.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
                  >

                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">

                      <Icon size={28} />

                    </div>

                    <h3 className="mt-5 font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>

                  </div>

                );

              })}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          6. INDUSTRIES - LIGHT THEME
      ====================================== */}

      <section className="bg-white py-16 text-slate-900 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="text-center">

            <SectionLabel light>
              WHO WE SERVE
            </SectionLabel>

            <h2 className="text-3xl font-bold sm:text-5xl">

              Connectivity Across Industries

            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-500">

              Supporting organizations that depend on reliable
              and scalable network infrastructure.

            </p>

          </div>


          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

            {industries.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.name}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
                >

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">

                    <Icon size={30} />

                  </div>

                  <h3 className="mt-5 font-bold text-slate-800">
                    {item.name}
                  </h3>

                </div>

              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================
          7. CONTACT CTA - DARK THEME
      ====================================== */}

      <section className="relative overflow-hidden bg-[#07152e] py-16 text-white sm:py-20 lg:py-24">

        {/* Background Glow */}
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 text-center sm:px-8 lg:px-10">

          <SectionLabel>
            LET'S CONNECT
          </SectionLabel>
          <h2 className="max-w-4xl text-2xl font-bold leading-tight sm:text-5xl lg:text-5xl">

            Ready to Build Your

            <span className="text-sky-400">
              <br /> Next-Generation Network?
            </span>

          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-slate-400">

            Share your requirement and our team will suggest the right product or combination for your infrastructure.

          </p>

          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-lg bg-blue-600 px-9 py-4 font-semibold text-white transition hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25"
          >

            Get in Touch

            <ArrowRight size={20} />

          </Link>

        </div>

      </section>

    </main>
  );
}
