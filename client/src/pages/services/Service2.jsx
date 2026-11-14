
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Check,
    Zap,
    Laptop,
    Phone,
    CloudUpload,
    ArrowLeft,
    PhoneCall,
} from "lucide-react";

import mixBandwidth from "../../assets/services/mix-bandwidth.png";

const Service2 = () => {
    const [bandwidth, setBandwidth] = useState(100);

    // Dynamic estimator values
    const devices = Math.max(20, Math.round(bandwidth / 5));
    const calls = Math.round(bandwidth * 2);
    const backup =
        bandwidth >= 1000
            ? "High Performance"
            : bandwidth >= 500
                ? "Advanced"
                : "Standard";

    const features = [
        "Multi-Homed Routing via Multiple Top-Tier Upstreams",
        "Automatic BGP Path Optimisation & Instant Sub-second Failover",
        "Reduced Latency Across Regions by Eliminating Routing Bottlenecks",
        "Highly Scalable Port Capacity to Absorb Traffic Spikes",
        "Comprehensive Real-Time Bandwidth Utilization Graphs",
    ];

    const specifications = [
        ["Routing Protocol", "Dynamic BGPv4 Routing"],
        ["✓ Multi-carrier Uplinks (Carrier-Neutral aggregation)"],
        ["Failover Type", "Automated Path Rerouting (Sub-500ms)"],
        ["Interface Speed", "Up to 10 Gbps Ethernet Ports"],
        ["Uptime Target", "99.85% Network Availability"],
    ];

    return (
        <div className="bg-[#f8fbff] text-[#101a31]">

            {/* Breadcrumb */}
            <div className="border-b border-blue-100 bg-white px-6 py-3 lg:px-20">
                <div className="mx-auto max-w-7xl text-sm text-slate-500">
                    <Link to="/" className="hover:text-blue-600">Home</Link>
                    <span className="mx-3">/</span>
                    <Link to="/services" className="hover:text-blue-600">Services</Link>
                    <span className="mx-3">/</span>
                    <span className="font-semibold text-slate-900">
                        Mix Bandwidth
                    </span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="border-b border-blue-50 bg-gradient-to-br from-white via-white to-blue-50 px-6 py-16 lg:px-20 lg:py-20">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">

                    <div>
                        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-blue-600">
                            Mix Bandwidth - multiple upstream providers
                        </span>

                        <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#101a31] sm:text-5xl lg:text-[50px]">
                            Mix Bandwidth
                            {/* <span className="block">(Direct Drop / DIA)</span> */}
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                            Blend of multiple upstream providers for better routing, redundancy and performance across regions and applications.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                to="/contact"
                                className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                            >
                                Request a Quote
                            </Link>

                            <Link
                                to="/services"
                                className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-600 px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
                            >
                                <ArrowLeft size={17} />
                                Back to Services
                            </Link>
                        </div>
                    </div>

                    {/* Hero Image Card */}
                    <div className="rounded-[28px] border border-blue-100 bg-white p-5 shadow-xl shadow-blue-100/50">
                        <div className="relative overflow-hidden rounded-2xl">
                            <img
                                src={mixBandwidth}
                                alt="mixbandwidth connectivity"
                                className="h-60 w-full object-cover"
                            />

                            <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-orange-500 shadow-lg">
                                <Zap size={25} fill="currentColor" />
                            </div>
                        </div>

                        <div className="mt-5 grid grid-cols-2 divide-x divide-slate-200 rounded-2xl border border-slate-200 bg-slate-50 py-5 text-center">
                            <div>
                                <h3 className="text-2xl font-extrabold text-slate-900">
                                    99.9%
                                </h3>
                                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                                    Uptime SLA
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-extrabold text-slate-900">
                                    &lt; 1ms
                                </h3>
                                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                                    Core Latency
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features and Specifications */}
            <section className="px-6 py-16 lg:px-20">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_0.9fr]">

                    {/* Features */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
                        <h2 className="text-2xl font-bold text-slate-900">
                            Key Features & Core Benefits
                        </h2>

                        <p className="mt-2 text-slate-500">
                            Engineered to support always-on productivity, this service provides high-performance parameters
                        </p>

                        <div className="mt-7 space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                        <Check size={17} />
                                    </span>

                                    <p className="text-base leading-6 text-slate-800">
                                        {feature}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side Cards */}
                    <div className="space-y-6">

                        {/* Technical Specifications */}
                        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                            <h2 className="text-xl font-bold text-slate-900">
                                Technical Specifications
                            </h2>

                            <div className="mt-5 space-y-4">
                                {specifications.map(([label, value]) => (
                                    <div
                                        key={label}
                                        className="flex flex-col gap-1 border-b border-dashed border-slate-200 pb-4 last:border-0 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
                                    >
                                        <span className="text-sm text-slate-500">
                                            {label}
                                        </span>
                                        <span className="max-w-full break-words text-left text-sm font-semibold text-slate-900 sm:max-w-[60%] sm:text-right">
                                            {value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Designed For */}
                        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                            <h2 className="text-xl font-bold text-slate-900">
                                Designed Specifically For
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-slate-600">
                                E-commerce portals, streaming platforms, CDN operators, and cloud-heavy mid-sized businesses seeking redundancy without extreme costs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bandwidth Estimator */}
            <section className="px-6 pb-16 lg:px-20">
                <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-blue-100 bg-white shadow-sm">

                    <div className="border-b border-slate-100 px-7 py-7 sm:px-9">
                        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                            Bandwidth & Performance Estimator
                        </h2>

                        <p className="mt-2 text-slate-500">
                            Drag the slider to select your desired speeds and check what
                            benefits it delivers to your setup.
                        </p>
                    </div>

                    <div className="grid gap-12 px-7 py-10 sm:px-9 lg:grid-cols-2">

                        {/* Slider */}
                        <div className="flex flex-col justify-center">
                            <div className="flex items-center justify-between gap-3">
                                <h3 className="font-bold text-slate-800">
                                    Connection Bandwidth
                                </h3>

                                <span className="text-xl font-extrabold text-blue-600">
                                    {bandwidth >= 1000
                                        ? `${(bandwidth / 1000).toFixed(1)} Gbps`
                                        : `${bandwidth} Mbps`}
                                </span>
                            </div>

                            <input
                                type="range"
                                min="50"
                                max="2000"
                                step="50"
                                value={bandwidth}
                                onChange={(e) => setBandwidth(Number(e.target.value))}
                                className="mt-8 h-2 w-full cursor-pointer accent-blue-600"
                            />

                            <div className="mt-4 flex justify-between text-xs font-semibold text-slate-400">
                                <span>50 Mbps</span>
                                <span>1.0 Gbps</span>
                                <span>2.0 Gbps</span>
                            </div>
                        </div>

                        {/* Dynamic Results */}
                        <div className="space-y-6">

                            <div className="flex items-center gap-5">
                                <div className="rounded-xl bg-slate-100 p-3">
                                    <Laptop size={28} />
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                                        Active Devices Supported
                                    </p>
                                    <h3 className="text-xl font-extrabold text-slate-900">
                                        ~ {devices} devices
                                    </h3>
                                    <p className="text-xs text-slate-400">
                                        Assuming average enterprise usage
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5">
                                <div className="rounded-xl bg-slate-100 p-3">
                                    <Phone size={28} />
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                                        Concurrent VoIP Calls
                                    </p>
                                    <h3 className="text-xl font-extrabold text-slate-900">
                                        {calls} channels
                                    </h3>
                                    <p className="text-xs text-slate-400">
                                        Crystal-clear voice streams
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5">
                                <div className="rounded-xl bg-slate-100 p-3">
                                    <CloudUpload size={28} />
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                                        Cloud Backup & Sync
                                    </p>
                                    <h3 className="text-xl font-extrabold text-slate-900">
                                        {backup}
                                    </h3>
                                    <p className="text-xs text-slate-400">
                                        Database and raw image transfer rate
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-100 bg-slate-50 px-7 py-6 text-sm text-slate-600 sm:px-10">
                        <strong>Configured Capabilities:</strong>{" "}
                        {bandwidth < 500
                            ? "Great for Standard Office Collaboration, shared Emails, and basic Web Applications."
                            : bandwidth < 1000
                                ? "Suitable for Business Applications, Video Conferencing, and Cloud Workloads."
                                : "Ideal for Enterprise Operations, Heavy Cloud Workloads, and High-Demand Networks."}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 pb-16 lg:px-20">
                <div className="mx-auto max-w-7xl rounded-[26px] bg-gradient-to-r from-[#101a31] to-[#202d45] px-8 py-12 text-white sm:px-12 sm:py-14">

                    <h2 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
                        Let's build the backbone of your digital operation.
                    </h2>

                    <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                        Get in touch with our network engineering team to receive
                        a tailor-made proposal, site-feasibility audit, and dedicated
                        pricing list.
                    </p>

                    <div className="mt-7 flex flex-wrap items-center gap-6">
                        <Link
                            to="/contact"
                            className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                        >
                            Discuss Connection Requirements
                        </Link>

                        <a
                            href="tel:8800059059"
                            className="inline-flex items-center gap-2 font-bold text-white"
                        >
                            <PhoneCall size={18} className="text-pink-500" />
                            Call support: 8800059059
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Service2;
