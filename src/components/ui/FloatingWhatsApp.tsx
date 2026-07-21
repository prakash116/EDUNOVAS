import { SITE } from "@/data/site";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function FloatingWhatsApp() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with EDUNOVAS on WhatsApp"
      className="group fixed bottom-5 right-4 z-[60] sm:bottom-7 sm:right-7"
    >
      <span
        className="absolute inset-0 animate-ping rounded-full bg-emerald-400/30 motion-reduce:hidden"
        aria-hidden="true"
      />
      <span className="absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-xl border border-white/10 bg-void/95 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-xl backdrop-blur-xl transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-emerald-300/40 bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-[0_12px_35px_-10px_rgba(16,185,129,0.85)] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-[0_16px_45px_-10px_rgba(16,185,129,1)] sm:h-16 sm:w-16">
        <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
      </span>
    </a>
  );
}
