import {
  Brain,
  Heart,
  Ban,
  ShieldAlert,
  Target,
  Sparkles,
  Compass,
  BadgeCheck,
  MapPin,
  CarFront,
  Clock,
  UserRound,
  Lock,
  Smartphone,
  Star,
  Quote,
} from "lucide-react";
import congresso from "@/assets/congresso.jpg";
import { abordagem, depoimentos, online, passos, qualificacoes, temas } from "./data";

const temaIcons = [Brain, Heart, Ban, ShieldAlert];
const abordagemIcons = [Target, Sparkles, Compass, BadgeCheck];
const onlineIcons = [MapPin, CarFront, Clock, UserRound, Lock, Smartphone];

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? <p className="text-sm font-medium text-primary">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}

function Card({
  Icon,
  title,
  text,
}: {
  Icon: typeof Brain;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-xl bg-surface p-6 shadow-soft transition-colors hover:bg-surface-2">
      <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/12">
        <Icon className="size-5 text-primary" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-lg font-medium">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </article>
  );
}

export function Temas() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="O que está impedindo você de avançar?"
        title="Ansiedade, emagrecimento, vícios ou medos te limitam?"
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {temas.map((t, i) => (
          <Card key={t.title} Icon={temaIcons[i]} title={t.title} text={t.text} />
        ))}
      </div>
    </section>
  );
}

export function Abordagem() {
  return (
    <section className="border-y border-hairline bg-surface/60">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="Uma abordagem integrada"
          title="Por que escolher a hipnose ao invés de terapias convencionais?"
          subtitle="A hipnoterapia oferece uma abordagem focada para questões emocionais, comportamentais e psicológicas, sempre respeitando sua história e seus objetivos."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {abordagem.map((t, i) => (
            <Card key={t.title} Icon={abordagemIcons[i]} title={t.title} text={t.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Online() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        title="Por que o atendimento online funciona"
        subtitle="A experiência é a mesma de uma sessão presencial, com muito mais liberdade para você."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {online.map((t, i) => (
          <Card key={t.title} Icon={onlineIcons[i]} title={t.title} text={t.text} />
        ))}
      </div>
    </section>
  );
}

export function Sobre() {
  return (
    <section id="sobre" className="border-y border-hairline bg-surface/60">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-primary">Conheça o profissional</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Quem Sou Eu</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Olá, sou Ton Lucas, psicólogo especializado em Terapia Cognitivo Comportamental e
            hipnólogo. Desde 2013, ajudo pessoas a lidar com traumas, bloqueios emocionais e padrões
            que limitam sua qualidade de vida.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Com uma abordagem integrada, cada atendimento é conduzido de forma personalizada para
            acolher sua necessidade e apoiar mudanças consistentes.
          </p>
          <div className="mt-8 rounded-xl bg-surface-2 p-6 shadow-soft">
            <h3 className="text-base font-medium">Experiência e qualificações</h3>
            <ul className="mt-4 space-y-3">
              {qualificacoes.map((q) => (
                <li key={q} className="flex gap-2.5 text-sm text-muted-foreground">
                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <figure className="overflow-hidden rounded-2xl bg-surface shadow-lift">
          <img
            src={congresso}
            alt="Ton Lucas conduzindo uma experiência no Congresso Comtempla na Estrada, em Porto Seguro, Bahia"
            className="aspect-4/3 w-full object-cover"
            loading="lazy"
          />
          <figcaption className="px-5 py-4 text-sm text-muted-foreground">
            Congresso Comtempla na Estrada, Porto Seguro, Bahia
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function Passos() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        title="Como começar em 3 passos"
        subtitle="Um caminho simples para você dar o primeiro passo rumo à mudança, sem burocracia e no seu ritmo."
      />
      <ol className="mt-12 grid gap-5 md:grid-cols-3">
        {passos.map((p, i) => (
          <li key={p.title} className="rounded-xl bg-surface p-6 shadow-soft">
            <span className="inline-flex size-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              {i + 1}
            </span>
            <h3 className="mt-4 text-lg font-medium">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
          </li>
        ))}
      </ol>
      <div className="mt-10 text-center">
        <a
          href="#formulario"
          className="inline-block rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Quero começar agora
        </a>
      </div>
    </section>
  );
}

export function Depoimentos() {
  return (
    <section className="border-y border-hairline bg-surface/60">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading title="Quem já foi atendido online" />
        <p className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span className="flex" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-primary text-primary" />
            ))}
          </span>
          4,9 de 5 em avaliações de pacientes
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {depoimentos.map((d) => (
            <figure key={d.name} className="rounded-xl bg-surface p-6 shadow-soft">
              <Quote className="size-5 text-primary" aria-hidden="true" />
              <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                “{d.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-medium">{d.name}</span>
                <span className="block text-muted-foreground">{d.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Depoimentos de pacientes atendidos online. Nomes reduzidos para preservar o sigilo.
        </p>
      </div>
    </section>
  );
}
