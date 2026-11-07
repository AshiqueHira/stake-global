"use client";

import { basePath } from "@/lib/paths";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Brand } from "./brand";
import { ButtonLink } from "./ui";

const navigation = [
  { href: "/markets/", label: "Markets" },
  { href: "/platforms/", label: "Platforms" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const currentPath =
    basePath && (pathname === basePath || pathname.startsWith(`${basePath}/`))
      ? pathname.slice(basePath.length) || "/"
      : pathname;
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    function onOutsideClick(event: MouseEvent) {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    }
    const desktop = window.matchMedia("(min-width: 761px)");
    function closeOnResize() {
      setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onOutsideClick);
    desktop.addEventListener("change", closeOnResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onOutsideClick);
      desktop.removeEventListener("change", closeOnResize);
    };
  }, [open]);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header
        ref={header}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget))
            setOpen(false);
        }}
      >
        <div className="wrap header-inner">
          <div onClick={() => setOpen(false)}>
            <Brand />
          </div>
          <nav
            className={`nav${open ? " open" : ""}`}
            id="main-nav"
            aria-label="Main navigation"
          >
            {navigation.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={
                  currentPath.replace(/\/$/, "") === href.replace(/\/$/, "")
                    ? "page"
                    : undefined
                }
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="header-account" onClick={() => setOpen(false)}>
            <ButtonLink className="header-cta" href="/open-account/">
              Open Live Account
            </ButtonLink>
          </div>
          <button
            ref={menuButton}
            type="button"
            className="menu-btn"
            aria-controls="main-nav"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>
    </>
  );
}
