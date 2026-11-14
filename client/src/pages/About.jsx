
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Network,
  Globe,
  RadioTower,
  Activity,
  Wifi,
} from "lucide-react";

const About = () => {
  return (
    <div className="overflow-hidden bg-white">

      {/* HERO */}
      <section className="relative min-h-[560px] overflow-hidden bg-[#070D1C] px-4 py-16 sm:min-h-[620px] sm:px-8 sm:py-20 lg:px-20 lg:py-24">

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">

          <div data-reveal="left" className="min-w-0">
            <p className="mb-6 text-sm font-bold uppercase tracking-[4px] text-cyan-400">
              About NAS Internet
            </p>

            <h1 className="text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl md:text-6xl lg:text-6xl">
              Powering the Backbone of

              <span className="block text-blue-500">
                Modern Connectivity

              </span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-slate-400">
              NAS Internet provides carrier-grade internet and network connectivity, focused on performance, uptime, and dedicated support for the businesses that rely on us.


            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-500"
              >
                Let's Connect <ArrowRight size={18} />
              </Link>

              <Link
                to="/services"
                className="flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Our Services <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          {/* NETWORK VISUAL */}
          <div data-reveal="zoom" className="relative mx-auto flex h-[340px] w-full max-w-[450px] min-w-0 items-center justify-center sm:h-[420px]">

            <div className="absolute h-[280px] w-[280px] rounded-full border border-blue-400/20 sm:h-[350px] sm:w-[350px]" />
            <div className="absolute h-[220px] w-[220px] rounded-full border border-dashed border-cyan-400/30 sm:h-[280px] sm:w-[280px]" />
            <div className="absolute h-[165px] w-[165px] rounded-full border border-blue-400/30 sm:h-[210px] sm:w-[210px]" />

            <div className="absolute h-60 w-60 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-[35px] border border-cyan-300/30 bg-gradient-to-br from-blue-600 to-cyan-400 shadow-[0_0_70px_rgba(37,99,235,0.4)]">
              <Network size={65} className="text-white" />
            </div>

            <div className="absolute left-8 top-12 rounded-2xl border border-white/10 bg-[#111D35] p-4 text-cyan-400 shadow-xl">
              <Globe size={28} />
            </div>

            <div className="absolute right-5 top-20 rounded-2xl border border-white/10 bg-[#111D35] p-4 text-blue-400 shadow-xl">
              <RadioTower size={28} />
            </div>

            <div className="absolute bottom-12 left-8 rounded-2xl border border-white/10 bg-[#111D35] p-4 text-cyan-400 shadow-xl">
              <Wifi size={28} />
            </div>

            <div className="absolute bottom-8 right-8 rounded-2xl border border-white/10 bg-[#111D35] p-4 text-blue-400 shadow-xl">
              <Activity size={28} />
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="px-4 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-16">

          <div data-reveal="left" className="relative min-w-0">
            <div className="rounded-[30px] bg-[#0B1530] p-6 text-white sm:p-8 lg:p-12">

              {/* <span className="text-sm font-bold tracking-[3px] text-cyan-400">
                OUR STORY
              </span> */}

              <h2 className="mt-8 text-4xl font-bold leading-tight sm:text-5xl">
                Connectivity is
                <span className="block text-blue-400">
                  Our Foundation.
                </span>
              </h2>

              <p className="mt-7 leading-8 text-slate-300">
                We work closely with LCOs, businesses, and organizations that require absolutely stable and scalable connectivity to keep their operations running smoothly without interruption.
              </p>

              {/* <div className="mt-8 flex flex-col items-start gap-3 border-t border-white/10 pt-6 sm:mt-10 sm:flex-row sm:items-center sm:gap-4 sm:pt-7">
                <ShieldCheck size={35} className="shrink-0 text-cyan-400" />
                <div className="min-w-0">
                  <h3 className="font-bold">Built Around Reliability</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Connectivity for demanding business needs.
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          <div data-reveal="right" className="min-w-0">
            <p className="text-sm font-bold uppercase tracking-[3px] text-blue-600">
              Who We Are
            </p>

            {/* <h2 className="mt-5 text-4xl font-extrabold leading-tight text-[#0B1224] sm:text-5xl">
              More Than Just
              <span className="block text-blue-600">
                Internet Connectivity
              </span>
            </h2> */}

            {/* {/* <p className="mt-7 leading-8 text-slate-600">
              We understand that businesses need more than just
              an internet connection. They need stable networks,
              scalable bandwidth and responsive technical support.
            </p> */}

            {/* <p className="mt-5 leading-8 text-slate-600">
            Our infrastructure is designed from the ground up to handle high-demand environments. Whether you're an ISP, enterprise, or institution, you need reliable bandwidth and low-latency links.
            </p>  */}

            <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-9 sm:gap-6">

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-2xl font-extrabold text-[#0B1224]">
                  99.9%
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Uptime SLA
                </p>
              </div>

              <div className="border-l-4 border-sky-500 pl-4">
                <h3 className="text-2xl font-extrabold text-[#0B1224]">
                  24/7

                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Support

                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-2xl font-extrabold text-[#0B1224]">
                  10G+
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Backbone
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-2xl font-extrabold text-[#0B1224]">
                  500+
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  LCO Partners
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* OUR EXPERTISE */}
      {/* <section className="bg-[#F4F7FC] px-4 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[3px] text-blue-600">
                What Drives Us
              </p>

              <h2 className="mt-4 text-4xl font-extrabold text-[#0B1224] sm:text-5xl">
                Our Core Strengths
              </h2>
            </div>

            <p className="max-w-md leading-7 text-slate-500">
              Technology, infrastructure and support come together
              to deliver dependable connectivity solutions.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">

            {[
              {
                icon: Network,
                title: "Advanced Network",
                text: "Scalable network connectivity designed for high-demand environments.",
              },
              {
                icon: ShieldCheck,
                title: "Reliable Infrastructure",
                text: "Infrastructure focused on network stability and consistent performance.",
              },
              {
                icon: Zap,
                title: "Responsive Support",
                text: "Dedicated technical support to help keep your network running.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-8 text-xl font-bold text-[#0B1224]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-500">
                    {item.text}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-sm font-bold text-blue-600">
                    Explore More <ArrowUpRight size={17} />
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="bg-[#070D1C] px-4 py-16 text-center sm:px-8 sm:py-20 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-3xl min-w-0">

          <p className="text-sm font-bold uppercase tracking-[3px] text-cyan-400">
            Let's Build Together
          </p>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Connect Your Business?
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Talk to our team about your connectivity requirements.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 font-bold text-white transition hover:bg-blue-500 sm:mt-9 sm:px-8 sm:py-4"
          >
            Contact Us <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
};

export default About;