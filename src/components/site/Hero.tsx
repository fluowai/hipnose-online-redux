import { MessageCircle, ShieldCheck, Video, CheckCircle2 } from "lucide-react";
import tonLucas from "@/assets/ton-lucas.png";
import { WHATSAPP_URL } from "./data";

const stats = [
  { value: "+1.200", label: "sessões online" },
  { value: "4,9/5", label: "avaliação dos pacientes" },
  { value: "6 dias", label: "por semana com horários" },
];

const trust = [
  "Sessões por vídeo em ambiente reservado",
  "Horários flexíveis, inclusive à noite",
  "Atendimento para todo o Brasil e exterior",
];

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-primary/12 blur-[120px]"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 md:py-24 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-surface-2 px-4 py-2 text-sm text-muted-foreground">
            <Video className="size-4 text-primary" aria-hidden="true" />
            Atendimento 100% online, por vídeo
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Comece sua mudança
            <span className="block text-primary">de onde você estiver</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Hipnose e psicologia em sessões individuais online, com acolhimento e um plano de
            acompanhamento feito para a sua história. Sem deslocamento, sem sala de espera.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#formulario"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Preencher formulário
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-surface-2 px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg bg-surface px-4 py-4 text-center shadow-soft"
              >
                <dt className="text-lg font-semibold text-primary">{s.value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <img
            src={tonLucas}
            alt="Retrato profissional de Ton Lucas"
            className="w-full rounded-2xl object-cover shadow-lift"
            loading="eager"
          />
          <div className="absolute -bottom-6 left-0 flex items-center gap-3 rounded-xl bg-surface-2 px-4 py-3 shadow-lift sm:-left-6">
            <ShieldCheck className="size-5 text-primary" aria-hidden="true" />
            <p className="text-sm leading-tight">
              <span className="font-medium">Atendimento sigiloso</span>
              <span className="block text-muted-foreground">individual e seguro</span>
            </p>
          </div>
        </div>
      </div>

      <div className="border-y border-hairline bg-surface">
        <ul className="mx-auto grid max-w-6xl gap-4 px-5 py-6 sm:grid-cols-3">
          {trust.map((t) => (
            <li key={t} className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <CheckCircle2 className="size-4 shrink-0 text-primary" aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
