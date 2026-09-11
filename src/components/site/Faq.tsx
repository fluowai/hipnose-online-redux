import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "./data";

export function Faq() {
  return (
    <section className="border-t border-hairline bg-surface/60">
      <div className="mx-auto max-w-3xl px-5 py-20">
        <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          Perguntas frequentes
        </h2>
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faq.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`item-${i}`}
              className="rounded-xl border-none bg-surface px-5 shadow-soft"
            >
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
