"use client";

import { useActionState } from "react";
import Footer from "../__components/Footer";
import ScrollReveal from "../__components/ScrollReveal";
import { sendInquiry } from "./actions";

export default function Page() {
  const [state, formAction, isPending] = useActionState(sendInquiry, null);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <ScrollReveal>
        <section className="pt-12 pb-16">
          <div className=" mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-8">
              <h1 className="text-[22px] sm:text-2xl md:text-[32px] lg:text-[38px] xl:text-[42px] font-medium leading-[1.15] text-black max-w-3xl tracking-tight">
                Tell us about your project, and we&apos;ll help bring your vision
                to life.
              </h1>
              <button
                type="button"
                onClick={() => {
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  });
                }}
                className="text-black text-xs uppercase tracking-widest font-medium pb-1 hover:opacity-60 transition-opacity flex items-center gap-2 cursor-pointer"
              >
                Scroll Down <span>↓</span>
              </button>
            </div>

            {/* Contact Form */}
            <form action={formAction} className="space-y-6 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                    className="w-full bg-gray-100 px-4 py-3 text-black placeholder-gray-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    className="w-full bg-gray-100 px-4 py-3 text-black placeholder-gray-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Business Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@company.com"
                    required
                    className="w-full bg-gray-100 px-4 py-3 text-black placeholder-gray-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    placeholder="ProCr8Hub"
                    className="w-full bg-gray-100 px-4 py-3 text-black placeholder-gray-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Choose service
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full bg-gray-100 px-4 py-3 text-black placeholder-gray-400 focus:outline-none"
                  >
                    <option value="">Select...</option>
                    <option value="Printing Production">
                      Printing Production
                    </option>
                    <option value="Branding">Branding</option>
                    <option value="Packaging">Packaging</option>
                    <option value="Gift Sales & Procurement">
                      Gift Sales &amp; Procurement
                    </option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Project brief
                  </label>
                  <textarea
                    name="projectBrief"
                    rows={5}
                    placeholder="Kindly tell us about your project briefly"
                    className="w-full bg-gray-100 px-4 py-3 text-black placeholder-gray-400 focus:outline-none resize-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button
                  type="submit"
                  disabled={isPending}
                  className={`w-fit text-black text-sm uppercase tracking-widest font-medium border border-black px-6 py-3 transition-colors ${
                    isPending
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-black hover:text-white"
                  }`}
                >
                  {isPending ? "Sending..." : "Submit"}
                </button>

                {state && (
                  <p
                    className={`text-sm font-medium ${
                      state.success ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {state.message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer */}
      <ScrollReveal direction="fade">
        <Footer />
      </ScrollReveal>
    </main>
  );
}
