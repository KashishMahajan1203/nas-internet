
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Headset,
  Globe,
  Users,
  Network,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: ShieldCheck,
      value: "99.9%",
      label: "UPTIME SLA",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: Headset,
      value: "24/7",
      label: "SUPPORT",
      color: "text-cyan-500",
      bg: "bg-cyan-50",
    },
    {
      icon: Globe,
      value: "10G+",
      label: "BACKBONE",
      color: "text-purple-500",
      bg: "bg-purple-50",
    },
    {
      icon: Users,
      value: "500+",
      label: "LCO PARTNERS",
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
  ];

  const industries = [
    "ISPs",
    "LCOs",
    "Corporates",
    "Institutions",
    "Data Centers",
  ];

  const features = [
    {
      icon: Network,
      title: "Enterprise Connectivity",
      description:
        "High-performance connectivity solutions built for demanding business environments.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Infrastructure",
      description:
        "Our network infrastructure focuses on uptime, stability and consistent performance.",
    },
    {
      icon: Zap,
      title: "Dedicated Support",
      description:
        "Proactive monitoring and a responsive support team to keep your network running.",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-white">

      {/* ================= HERO SECTION ================= */}

      <section className="relative flex min-h-[365px] items-center justify-center overflow-hidden bg-[#080E20] px-5 py-20 text-center">

        {/* Network background effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="spin-slow absolute -left-20 top-10 h-96 w-96 rounded-full border border-dashed border-blue-400/30" />
          <div className="float-slow absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full border border-cyan-400/20" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.2),transparent_65%)]" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#080E20]/50 via-[#080E20]/75 to-[#080E20]/95" />

        <div className="relative z-10 mx-auto max-w-5xl">

          <span data-reveal className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold tracking-wider text-cyan-400 backdrop-blur-md">
            OUR STORY
          </span>

          <h1 data-reveal style={{ "--d": "100ms" }} className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Powering the Backbone of
            <span className="gradient-pan block bg-gradient-to-r from-sky-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent">
              Modern Connectivity
            </span>
          </h1>

          <p data-reveal style={{ "--d": "200ms" }} className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-300 sm:text-lg">
            NAS Internet provides carrier-grade internet and network
            connectivity, focused on performance, uptime, and dedicated
            support for the businesses that rely on us.
          </p>

        </div>
      </section>


      {/* ================= ENTERPRISE RELIABILITY ================= */}

      <section className="bg-white px-5 py-16 sm:px-10 lg:px-20 lg:py-20">

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <div data-reveal="left">

            <h2 className="text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">
              Enterprise-Grade Reliability
            </h2>

            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-sky-400 to-blue-600" />

            <p className="mt-6 text-base leading-7 text-slate-600">
              Our infrastructure is designed from the ground up to
              handle high-demand environments. Whether you're an ISP,
              enterprise, or institution, you need reliable bandwidth
              and low-latency links.
            </p>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Every link we provision comes with strict SLAs, proactive
              monitoring, and a support team that responds — not just
              acknowledges. We work closely with LCOs, businesses, and
              organizations that require absolutely stable and scalable
              connectivity to keep their operations running smoothly
              without interruption.
            </p>

            {/* Industry tags */}

            <div className="mt-7 flex flex-wrap gap-3">

              {industries.map((item, index) => (
                <span
                  key={index}
                  className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>


          {/* RIGHT VISUAL */}

          <div data-reveal="zoom" style={{ "--d": "150ms" }} className="relative flex min-h-[340px] items-center justify-center">

            {/* Central network illustration */}

            <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 via-white to-indigo-50">

              <div className="spin-slow absolute inset-5 rounded-full border border-dashed border-blue-200" />
              <div className="absolute inset-10 rounded-full border border-blue-100" />

              <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-sky-400 shadow-2xl shadow-blue-300/50">
                <span className="pulse-ring absolute inset-0 rounded-3xl ring-2 ring-blue-400/60" />
                <Network size={45} className="text-white" />
              </div>

              <div className="absolute left-2 top-14 h-3 w-3 rounded-full bg-blue-400" />
              <div className="absolute right-5 top-16 h-3 w-3 rounded-full bg-cyan-400" />
              <div className="absolute bottom-8 left-16 h-3 w-3 rounded-full bg-indigo-400" />

            </div>

            {/* Floating statistics */}

            <div className="float absolute left-0 top-5 rounded-2xl bg-white px-5 py-4 shadow-xl shadow-slate-200/70">
              <h3 className="text-3xl font-extrabold text-blue-600">
                100%
              </h3>
              <p className="text-xs font-bold tracking-wide text-slate-500">
                DEDICATED SUPPORT
              </p>
            </div>

            <div className="float-slow absolute bottom-5 right-0 rounded-2xl bg-white px-5 py-4 shadow-xl shadow-slate-200/70">
              <h3 className="text-3xl font-extrabold text-blue-600">
                0%
              </h3>
              <p className="text-xs font-bold tracking-wide text-slate-500">
                DOWNTIME TOLERANCE
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= COMPANY STATISTICS ================= */}

      <section className="bg-[#F7FAFF] px-5 py-20 sm:px-10 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <div data-reveal className="mx-auto mb-12 max-w-2xl text-center">

            <h2 className="text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">
              The Numbers That Define Us
            </h2>

            <p className="mt-4 text-base leading-6 text-slate-600">
              Our commitment to excellence is reflected in the metrics
              that matter most to your business.
            </p>

          </div>

          {/* Statistics cards */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  data-reveal
                  style={{ "--d": `${index * 100}ms` }}
                  className="group flex min-h-[205px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
                >

                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg} transition duration-300 group-hover:scale-110`}>
                    <Icon size={28} className={item.color} />
                  </div>

                  <h3 className={`mt-5 text-4xl font-extrabold ${item.color}`}>
                    {item.value}
                  </h3>

                  <p className="mt-1 text-xs font-bold tracking-wide text-slate-600">
                    {item.label}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* ================= WHY CHOOSE NAS ================= */}

      <section className="bg-white px-5 py-20 sm:px-10 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <div data-reveal className="mx-auto mb-12 max-w-2xl text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Why NAS Internet
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#111827] sm:text-4xl">
              Connectivity You Can Depend On
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              We combine reliable infrastructure, network expertise
              and dedicated support to deliver dependable connectivity.
            </p>

          </div>

          <div className="grid gap-7 md:grid-cols-3">

            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  data-reveal
                  style={{ "--d": `${index * 120}ms` }}
                  className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#111827]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* ================= CTA SECTION ================= */}

      <section className="bg-[#F7FAFF] px-5 py-16 sm:px-10 lg:px-20">

        <div data-reveal="zoom" className="gradient-pan mx-auto max-w-7xl rounded-[22px] bg-gradient-to-r from-blue-600 via-sky-400 to-blue-600 px-6 py-16 text-center text-white shadow-2xl shadow-blue-200/60 sm:px-12">

          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to upgrade your infrastructure?
          </h2>

          <p className="mt-4 text-base text-white/90">
            Let's design a custom connectivity solution for your exact needs.
          </p>

          <Link
            to="/contact"
            className="shine relative overflow-hidden mt-8 inline-flex items-center gap-3 rounded-full bg-white px-9 py-3.5 font-bold text-blue-600 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
          >
            Contact Our Team
            <ArrowRight size={19} />
          </Link>

        </div>

      </section>

    </div>
  );
};

export default About;
