import { Brain, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./data";

export function Footer() {
  return (
    <>
      <footer className="border-t border-hairline bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-2.5">
            <Brain className="size-6 text-primary" aria-hidden="true" />
            <span className="leading-tight">
              <span className="block text-base font-semibold tracking-tight">ton lucas</span>
              <span className="block text-[11px] text-muted-foreground">
                hipnose e psicologia
              </span>
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Atendimento online para todo o Brasil e exterior. Sigilo profissional garantido.
          </p>
        </div>
      </footer>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lift transition-colors hover:bg-primary/90"
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        WhatsApp
      </a>
    </>
  );
}
