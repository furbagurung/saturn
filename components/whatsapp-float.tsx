import React from "react";
import { CONTACT } from "@/lib/site-data";

export function WhatsAppFloat() {
  const msg = encodeURIComponent(
    "Hi Saturn Multipurpose, I want to inquire about import/export services."
  );

  return (
    <a
      href={`https://wa.me/${CONTACT.waE164NoPlus}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-5 right-5 z-50
        flex items-center gap-3
        rounded-full bg-[#29a71a]
        px-4 py-3
        text-sm font-semibold text-white
        shadow-lg
        transition
        hover:scale-105 hover:shadow-xl
      "
    >
      {/* WhatsApp SVG Icon */}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-6 w-6 fill-white"
        aria-hidden="true"
      >
        <path d="M19.11 17.44c-.28-.14-1.64-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.35-.25.28-.96.94-.96 2.29 0 1.35.99 2.65 1.13 2.83.14.18 1.95 2.98 4.73 4.18.66.29 1.18.46 1.58.59.66.21 1.26.18 1.74.11.53-.08 1.64-.67 1.87-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32zM16.02 2.67c-7.36 0-13.35 5.98-13.35 13.33 0 2.35.61 4.64 1.78 6.65L2.67 29.33l6.87-1.75c1.94 1.06 4.13 1.62 6.48 1.62h.01c7.36 0 13.35-5.98 13.35-13.33 0-3.56-1.39-6.9-3.91-9.42-2.52-2.52-5.87-3.78-9.45-3.78zm0 23.29c-2.02 0-4-.54-5.73-1.56l-.41-.24-4.08 1.04 1.09-3.97-.27-.41c-1.13-1.76-1.73-3.8-1.73-5.9 0-6.03 4.91-10.93 10.96-10.93 2.92 0 5.67 1.14 7.73 3.19 2.06 2.05 3.2 4.79 3.2 7.71 0 6.03-4.91 10.93-10.96 10.93z" />
      </svg> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
    
        width="32"
        height="32"
        x="0"
        y="0"
        viewBox="0 0 176 176"
   
      >
        <g>
          <g data-name="Layer 2">
            <rect
              width="176"
              height="176"
              fill="#29a71a"
              rx="24"
              opacity="1"
              data-original="#29a71a"
            ></rect>
            <g fill="#fff">
              <path
                d="M126.8 49.2a54.57 54.57 0 0 0-87.42 63.13l-5.79 28.11a2.08 2.08 0 0 0 .33 1.63 2.11 2.11 0 0 0 2.24.87l27.55-6.53A54.56 54.56 0 0 0 126.8 49.2zm-8.59 68.56a42.74 42.74 0 0 1-49.22 8l-3.84-1.9-16.89 4 .05-.21 3.5-17-1.88-3.71a42.72 42.72 0 0 1 7.86-49.59 42.73 42.73 0 0 1 60.42 0 2.28 2.28 0 0 0 .22.22 42.72 42.72 0 0 1-.22 60.19z"
                fill="#ffffff"
                opacity="1"
                data-original="#ffffff"
              ></path>
              <path
                d="M116.71 105.29c-2.07 3.26-5.34 7.25-9.45 8.24-7.2 1.74-18.25.06-32-12.76l-.17-.15C63 89.41 59.86 80.08 60.62 72.68c.42-4.2 3.92-8 6.87-10.48a3.93 3.93 0 0 1 6.15 1.41l4.45 10a3.91 3.91 0 0 1-.49 4l-2.25 2.92a3.87 3.87 0 0 0-.35 4.32c1.26 2.21 4.28 5.46 7.63 8.47 3.76 3.4 7.93 6.51 10.57 7.57a3.82 3.82 0 0 0 4.19-.88l2.61-2.63a4 4 0 0 1 3.9-1l10.57 3a4 4 0 0 1 2.24 5.91z"
                fill="#ffffff"
                opacity="1"
                data-original="#ffffff"
              ></path>
            </g>
          </g>
        </g>
      </svg>

      <span>WhatsApp Now</span>
    </a>
  );
}
