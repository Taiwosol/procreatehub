"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What services does ProCr8Hub offer?",
    answer:
      "We offer end-to-end creative production solutions — premium print production, corporate branding and identity design, custom packaging, large-format signage and fabrication, corporate gifts and promotional merchandise, as well as procurement and nationwide delivery. Everything you need to bring your brand to life, under one roof.",
  },
  {
    question: "How long does a typical printing or branding project take?",
    answer:
      "Turnaround depends on scope and complexity. Standard business cards, flyers, and stationery usually take 3–5 working days. Custom packaging, signage, or large-scale branding projects typically range from 7–14 working days. We'll always confirm a clear timeline with you during the quotation stage, and rush options are available on request.",
  },
  {
    question: "Do you deliver nationwide and what are the shipping costs?",
    answer:
      "Yes, we deliver to all states across the country. Our logistics team coordinates secure, trackable shipments through trusted courier partners so your orders arrive intact and on schedule. Shipping costs are calculated based on weight, volume, and destination, and will be clearly stated in your quotation. For bulk orders and local Lagos deliveries, we offer discounted or complimentary delivery where applicable.",
  },
  {
    question: "What if there's an issue with my order after delivery?",
    answer:
      "Quality is non-negotiable for us. Every order goes through a multi-stage quality check before it leaves our studio. If you do encounter any defect or error on our part, please reach out within 48 hours of delivery with photos. We'll review it immediately and either re-produce the affected items at no extra cost or issue a refund, whichever you prefer.",
  },
  {
    question: "Can you handle corporate bulk orders and recurring projects?",
    answer:
      "Yes. We work with SMEs, corporate organizations, and government institutions on retainer and bulk-volume projects — including annual stationery sets, marketing collateral, event branding, merchandise rollouts, and regular print runs. We offer preferential pricing, dedicated account management, and scheduled production to keep your brand assets consistent year-round.",
  },
  {
    question: "How do I get started or request a quote?",
    answer:
      "Simply reach out via our contact page, send a WhatsApp message, or call us directly. Share a brief about your project, the quantities you need, any preferred materials or finishes, and your timeline. You can also attach reference images or design drafts. We'll get back to you within one working day with a detailed, itemized quote and our recommended approach.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 md:py-10 bg-white">
      <div className=" mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs text-black mb-6">FAQ</p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 tracking-tight text-black">
              Frequently Asked Questions
            </h2>
            <p className="text-xs md:text-sm leading-relaxed text-black">
              Got questions about prints, branding, packaging, or delivery?
              We&apos;ve got answers. Here are the most common questions we hear
              and everything you need to know before you start a project with
              us.
            </p>
          </div>
          <div className="lg:col-span-7">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-300 py-5 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="w-full flex justify-between items-center gap-4">
                  <h3 className="text-base md:text-lg lg:text-xl font-medium text-black">
                    {faq.question}
                  </h3>
                  <span className="text-2xl transition-transform duration-300 shrink-0 text-black">
                    {openIndex === index ? "\u00d7" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <div className="mt-4 text-xs md:text-sm text-black leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
