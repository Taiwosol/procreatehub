"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/works", label: "Works" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [{ href: "/terms", label: "Terms & Conditions" }];

const businessHours = [
  { day: "Mon - Fri", hours: "9AM - 7PM" },
  { day: "Sat", hours: "9AM - 7PM" },
  { day: "Sun", hours: "Closed" },
];

const PHONE_LABEL = "+234 809 320 6395";
const PHONE_HREF = "tel:+2348093206395";
const EMAIL = "info@procr8hub.com";

// Address + map details, kept for the disabled contact card below.
const ADDRESS = "18 Rufai Street, Somolu, Lagos, Nigeria.";
const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.7419878889983!2d3.3697986683831647!3d6.537869068252232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8da4d4644d2d%3A0xafe655d77f1926ee!2s18%20Rufai%20St%2C%20Somolu%2C%20Lagos%20100223%2C%20Lagos!5e0!3m2!1sen!2sng!4v1788802346675!5m2!1sen!2sng";
const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=18+Rufai+St%2C+Somolu%2C+Lagos";

// Shared type scale so every footer column reads at the same weight
const columnHeading =
  "text-[11px] sm:text-xs lg:text-[13px] font-semibold text-gray-300 uppercase tracking-[0.14em] mb-5 lg:mb-6";
const columnLink =
  "text-[13px] sm:text-sm lg:text-[15px] text-gray-400 hover:text-white transition-colors";

const PhoneIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    className="h-5 w-5 shrink-0"
  >
    <path
      d="M6.66659 2.5C7.08325 2.5 8.74992 6.25 8.74992 6.66667C8.74992 7.5 7.49992 8.33333 7.08325 9.16667C6.66659 10 7.49992 10.8333 8.33325 11.6667C8.65825 11.9917 9.99992 13.3333 10.8333 12.9167C11.6666 12.5 12.4999 11.25 13.3333 11.25C13.7499 11.25 17.4999 12.9167 17.4999 13.3333C17.4999 15 16.2499 16.25 14.9999 16.6667C13.7499 17.0833 12.9166 17.0833 11.2499 16.6667C9.58325 16.25 8.33325 15.8333 6.24992 13.75C4.16659 11.6667 3.74992 10.4167 3.33325 8.75C2.91659 7.08333 2.91659 6.25 3.33325 5C3.74992 3.75 4.99992 2.5 6.66659 2.5Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    className="h-5 w-5 shrink-0"
  >
    <path
      d="M3.33341 16.6668C2.87508 16.6668 2.48286 16.5038 2.15675 16.1777C1.83064 15.8516 1.6673 15.4591 1.66675 15.0002V5.00016C1.66675 4.54183 1.83008 4.14961 2.15675 3.8235C2.48341 3.49738 2.87564 3.33405 3.33341 3.3335H16.6667C17.1251 3.3335 17.5176 3.49683 17.8442 3.8235C18.1709 4.15016 18.334 4.54238 18.3334 5.00016V15.0002C18.3334 15.4585 18.1704 15.851 17.8442 16.1777C17.5181 16.5043 17.1256 16.6674 16.6667 16.6668H3.33341ZM10.0001 10.8335L16.6667 6.66683V5.00016L10.0001 9.16683L3.33341 5.00016V6.66683L10.0001 10.8335Z"
      fill="currentColor"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    aria-hidden="true"
    className="h-[18px] w-[18px] sm:h-5 sm:w-5"
  >
    <path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0" />
  </svg>
);

const WhatsappIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    aria-hidden="true"
    className="h-[18px] w-[18px] sm:h-5 sm:w-5"
  >
    <path
      d="M25.873,6.069c-2.619-2.623-6.103-4.067-9.814-4.069C8.411,2,2.186,8.224,2.184,15.874c-.001,2.446,.638,4.833,1.852,6.936l-1.969,7.19,7.355-1.929c2.026,1.106,4.308,1.688,6.63,1.689h.006c7.647,0,13.872-6.224,13.874-13.874,.001-3.708-1.44-7.193-4.06-9.815h0Zm-9.814,21.347h-.005c-2.069,0-4.099-.557-5.87-1.607l-.421-.25-4.365,1.145,1.165-4.256-.274-.436c-1.154-1.836-1.764-3.958-1.763-6.137,.003-6.358,5.176-11.531,11.537-11.531,3.08,.001,5.975,1.202,8.153,3.382,2.177,2.179,3.376,5.077,3.374,8.158-.003,6.359-5.176,11.532-11.532,11.532h0Zm6.325-8.636c-.347-.174-2.051-1.012-2.369-1.128-.318-.116-.549-.174-.78,.174-.231,.347-.895,1.128-1.098,1.359-.202,.232-.405,.26-.751,.086-.347-.174-1.464-.54-2.788-1.72-1.03-.919-1.726-2.054-1.929-2.402-.202-.347-.021-.535,.152-.707,.156-.156,.347-.405,.52-.607,.174-.202,.231-.347,.347-.578,.116-.232,.058-.434-.029-.607-.087-.174-.78-1.88-1.069-2.574-.281-.676-.567-.584-.78-.595-.202-.01-.433-.012-.665-.012s-.607,.086-.925,.434c-.318,.347-1.213,1.186-1.213,2.892s1.242,3.355,1.416,3.587c.174,.232,2.445,3.733,5.922,5.235,.827,.357,1.473,.571,1.977,.73,.83,.264,1.586,.227,2.183,.138,.666-.1,2.051-.839,2.34-1.649,.289-.81,.289-1.504,.202-1.649s-.318-.232-.665-.405h0Z"
      fillRule="evenodd"
    />
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    aria-hidden="true"
    className="h-[18px] w-[18px] sm:h-5 sm:w-5"
  >
    <path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z" />
  </svg>
);

const Check = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 shrink-0"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const socialLinks = [
  {
    href: "https://www.instagram.com/procr8_hub",
    label: "Instagram",
    Icon: InstagramIcon,
  },
  {
    href: "https://wa.me/2348093206395?text=Hello%20Procr8Hub!",
    label: "WhatsApp",
    Icon: WhatsappIcon,
  },
  { href: "https://x.com/Procr8_hub", label: "X (Twitter)", Icon: XIcon },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", { email });
    setEmail("");
    setSubscribed(true);
  };

  useEffect(() => {
    if (!subscribed) return;
    const t = setTimeout(() => setSubscribed(false), 6000);
    return () => clearTimeout(t);
  }, [subscribed]);

  // Contact / location card with the Google Maps embed — temporarily disabled.
  // Uncomment this block back into the top of the returned footer, and swap the
  // newsletter band back to the seam-absorbing top padding it needs to sit under
  // the card (pt-40 sm:pt-52 lg:pt-64 pb-14 md:pb-16 lg:pb-20).
  // {/* Contact / location card — its own section. The card's negative bottom
  //     margin drops it down across the seam so it floats over the newsletter
  //     band, leaving the newsletter's own padding and rhythm untouched. */}
  // <div className="relative z-10 w-full pt-14 md:pt-16 lg:pt-20">
  //   <div className="mx-auto px-6 sm:px-8 lg:px-10">
  //     <div className="relative mx-auto max-w-4xl -mb-24 sm:-mb-32 lg:-mb-40 rounded-3xl bg-white shadow-xl shadow-neutral-900/10 ring-1 ring-neutral-200/70 p-5 pb-12 sm:p-7 sm:pb-16 lg:p-9 lg:pb-20">
  //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
  //         {/* Copy + address + CTA */}
  //         <div>
  //           <h2 className="text-[21px] sm:text-[25px] lg:text-[28px] xl:text-[30px] font-normal text-gray-950 leading-[1.18] tracking-tight">
  //             Ready To Look <strong className="font-bold">Sharper</strong>
  //             <br className="hidden sm:block" /> And Sell{" "}
  //             <strong className="font-bold">Faster</strong>
  //           </h2>
  //           <p className="mt-3.5 text-gray-600 text-[13px] sm:text-sm lg:text-[15px] leading-[1.65] max-w-sm">
  //             Your brand&apos;s next chapter starts with one simple
  //             conversation. Let&apos;s make it count.
  //           </p>
  //
  //           <hr className="my-6 lg:my-7 border-neutral-200" />
  //
  //           <h3 className="text-[13px] sm:text-sm font-bold uppercase tracking-[0.12em] text-gray-950">
  //             Address
  //           </h3>
  //           <address className="mt-2.5 not-italic text-gray-700 text-[13px] sm:text-sm lg:text-[15px] leading-[1.7] max-w-xs">
  //             {ADDRESS}
  //           </address>
  //
  //           <Link
  //             href="/contact"
  //             className="mt-6 inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-[13px] sm:text-sm font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-black hover:shadow-md cursor-pointer"
  //           >
  //             Contact us
  //           </Link>
  //         </div>
  //
  //         {/* Google Maps embed */}
  //         <div className="relative overflow-hidden rounded-2xl ring-1 ring-neutral-200">
  //           <iframe
  //             src={MAP_EMBED_SRC}
  //             title="ProCr8Hub office location on Google Maps"
  //             loading="lazy"
  //             allowFullScreen
  //             referrerPolicy="strict-origin-when-cross-origin"
  //             className="block h-[190px] w-full border-0 sm:h-[215px] lg:h-[240px]"
  //           />
  //           <a
  //             href={MAP_LINK}
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="absolute left-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-lg bg-white/95 px-2.5 py-1.5 text-[11px] sm:text-[12px] font-semibold text-gray-900 shadow-md backdrop-blur-sm transition-colors hover:bg-white"
  //           >
  //             Open in Maps
  //             <svg
  //               viewBox="0 0 24 24"
  //               fill="none"
  //               stroke="currentColor"
  //               strokeWidth={2}
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               aria-hidden="true"
  //               className="h-3.5 w-3.5"
  //             >
  //               <path d="M15 3h6v6" />
  //               <path d="M10 14 21 3" />
  //               <path d="M21 14v7H3V3h7" />
  //             </svg>
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>

  return (
    <footer className="parkinsans bg-white w-full">
      {/* Newsletter Section (Ash / Light Gray) - Full Width */}
      <div className="bg-neutral-300 border-t border-b border-neutral-400/50 py-8 md:py-10 lg:py-12 w-full">
        {/* Horizontal padding mirrors HeroCinematic so sections align down the page */}
        <div className="mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-start">
            {/* Left Column: Newsletter Heading & Copy */}
            <div>
              <p className="text-[11px] sm:text-xs lg:text-[13px] text-gray-600 mb-3 lg:mb-4">
                Newsletter
              </p>
              <h2 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-medium text-gray-950 leading-[1.18] tracking-tight">
                Subscribe to our newsletter
              </h2>
              <p className="mt-5 lg:mt-6 text-gray-700 text-[13px] sm:text-sm lg:text-[15px] xl:text-base leading-[1.65] max-w-md">
                Join our newsletter to get exclusive insights, timely updates,
                and expert tips that help you take control of your brand&apos;s
                growth, visibility, and creative direction.
              </p>
            </div>

            {/* Right Column: Newsletter Form or Success */}
            <div className="md:pt-8 min-h-[168px]">
              {subscribed ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex items-start gap-3 rounded-2xl border border-emerald-500/40 bg-emerald-50/90 px-5 py-5 shadow-sm animate-[fadeIn_.35s_ease-out]"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
                    <Check />
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-sm lg:text-base font-semibold text-emerald-900 leading-snug">
                      You&apos;re in! Welcome aboard.
                    </p>
                    <p className="text-[13px] lg:text-sm text-emerald-800/90 leading-[1.65]">
                      Thanks for subscribing — keep an eye on your inbox for
                      exclusive updates, brand insights, and creative tips.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="text-[11px] sm:text-xs lg:text-[13px] font-semibold text-gray-900 uppercase tracking-[0.14em] mb-4 lg:mb-5">
                    Stay Informed
                  </h3>
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
                  >
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 min-w-0 px-5 py-3.5 rounded-full bg-white text-gray-950 placeholder-gray-500 border border-neutral-400/60 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-[13px] sm:text-sm lg:text-[15px]"
                      required
                    />
                    <button
                      type="submit"
                      className="shrink-0 bg-gray-900 hover:bg-black text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-300 cursor-pointer text-[13px] sm:text-sm lg:text-[15px] shadow-sm hover:shadow-md"
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="mt-4 text-gray-600 text-[12px] sm:text-[13px] leading-relaxed">
                    By subscribing you agree to our{" "}
                    <Link
                      href="/terms"
                      className="text-gray-900 underline underline-offset-2 hover:no-underline cursor-pointer font-medium"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Original Footer Texts (Black Background) - Full Width */}
      <div className="bg-black pt-8 md:pt-10 lg:pt-12 pb-8 lg:pb-10 w-full">
        <div className="mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16">
            <div className="sm:col-span-2 lg:col-span-4 lg:pr-10">
              <Link
                href="/"
                className="cursor-pointer inline-block bg-white p-3"
              >
                <Image
                  src="/logo.png"
                  alt="ProCr8Hub Logo"
                  width={180}
                  height={40}
                  loading="lazy"
                  className="h-8 w-auto md:h-10 object-contain"
                />
              </Link>
              <p className="mt-6 text-gray-400 text-[13px] sm:text-sm lg:text-[15px] leading-[1.7] max-w-sm">
                Quality digital services to bring your brand ideas to life. We
                offer creative solutions that inspire, influence, and convert.
              </p>
            </div>

            <div className="lg:col-span-2">
              <h4 className={columnHeading}>Quick Links</h4>
              <ul className="space-y-3.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={columnLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className={columnHeading}>Legal</h4>
              <ul className="space-y-3.5">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={columnLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact information: phone, email and opening hours */}
            <div className="sm:col-span-2 lg:col-span-4">
              <h4 className={columnHeading}>Contact Information</h4>

              <ul className="space-y-4">
                <li>
                  <a
                    href={PHONE_HREF}
                    className={"group flex items-center gap-3 " + columnLink}
                  >
                    <span className="text-white/90 transition-colors group-hover:text-white">
                      <PhoneIcon />
                    </span>
                    <span>{PHONE_LABEL}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={"mailto:" + EMAIL}
                    className={"group flex items-center gap-3 " + columnLink}
                  >
                    <span className="text-white/90 transition-colors group-hover:text-white">
                      <MailIcon />
                    </span>
                    <span className="break-all">{EMAIL}</span>
                  </a>
                </li>
              </ul>

              {/* Opening hours card */}
              <div className="mt-6 max-w-xs rounded-2xl bg-white px-5 py-4 shadow-sm sm:px-6 sm:py-5">
                <dl className="divide-y divide-gray-200">
                  {businessHours.map((slot) => (
                    <div
                      key={slot.day}
                      className="flex items-center justify-between gap-6 py-3 first:pt-0 last:pb-0"
                    >
                      <dt className="text-[13px] sm:text-sm lg:text-[15px] font-semibold text-gray-950">
                        {slot.day}
                      </dt>
                      <dd className="text-[13px] sm:text-sm lg:text-[15px] text-gray-700">
                        {slot.hours}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 md:mt-16 lg:mt-20 pt-6 lg:pt-8 border-t border-white/10">
            <div className="flex flex-col-reverse items-center justify-between gap-6 sm:flex-row">
              <p className="text-[12px] sm:text-[13px] text-gray-500 text-center sm:text-left">
                &copy; {new Date().getFullYear()} ProCr8Hub Ltd. All rights
                reserved.
              </p>

              <ul className="flex items-center gap-3 sm:gap-4">
                {socialLinks.map(({ href, label, Icon }) => (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      title={label}
                      className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white text-black transition-colors duration-300 hover:bg-gray-300"
                    >
                      <Icon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
