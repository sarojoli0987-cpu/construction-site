"use client";

import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import Image from "next/image";
import { company } from "@/data/company";
import { navigation } from "@/data/navigation";
import { images } from "@/data/images";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-[#1B2530]/15 bg-[#F2F1ED]/95 backdrop-blur-md"
          : "border-transparent bg-[#F2F1ED]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:py-4">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3" aria-label={company.name}>
          <Image
            src={images.logo.mark}
            alt={company.shortName}
            width={48}
            height={48}
            className="h-11 w-auto object-contain"
            priority
          />
          <span className="hidden text-lg font-bold tracking-wide text-[#1B2530] sm:inline md:text-xl">
               {company.shortName}
           </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base font-medium text-[#1B2530]/80 transition-colors hover:text-[#1F4E79]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="rounded-md p-2 text-[#1B2530] transition-colors hover:bg-[#1B2530]/5 lg:hidden"
        >
          {open ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-[#1B2530]/10 bg-[#F2F1ED] transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-[#1B2530]/10 py-3 text-lg font-medium text-[#1B2530]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-md bg-[#1F4E79] px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
}