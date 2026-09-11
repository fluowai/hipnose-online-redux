import { useState } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "./data";

const beneficios = [
  "Resposta no mesmo dia, em horário comercial",
  "Sem compromisso: primeiro conversamos sobre o seu caso",
  "Seus dados são usados apenas para o contato",
];

const fieldClass =
  "mt-2 w-full rounded-lg bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-ring";

export function ContactForm() {
  const [para, setPara] = useState("Para mim");
  const [antes, setAntes] = useState("Não");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const mensagem = [
      "Olá, Ton! Quero solicitar um atendimento online.",
      "",
      `Nome: ${form.get("nome")}`,
      `WhatsApp: ${form.get("whatsapp")}`,
      `Atendimento: ${para}`,
      `Já buscou atendimento antes: ${antes}`,
      `Necessidade: ${form.get("necessidade")}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section id="formulario" className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Solicite seu atendimento online
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Preencha os campos abaixo. Ao enviar, você é levado direto para a conversa no WhatsApp
            com todas as informações já organizadas.
          </p>
          <ul className="mt-8 space-y-3">
            {beneficios.map((b) => (
              <li key={b} className="flex gap-2.5 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl bg-surface p-6 shadow-lift sm:p-8">
          <label className="block text-sm font-medium">
            Nome
            <input name="nome" required placeholder="Seu nome completo" className={fieldClass} />
          </label>

          <label className="mt-5 block text-sm font-medium">
            WhatsApp
            <input
              name="whatsapp"
              required
              inputMode="tel"
              placeholder="(00) 00000-0000"
              className={fieldClass}
            />
          </label>

          <fieldset className="mt-6">
            <legend className="text-sm font-medium">
              O atendimento é para você ou para outra pessoa?
            </legend>
            <div className="mt-3 flex gap-3">
              {["Para mim", "Para outra pessoa"].map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setPara(opt)}
                  aria-pressed={para === opt}
                  className={`flex-1 rounded-lg px-4 py-2.5 text-sm transition-colors ${
                    para === opt
                      ? "bg-primary text-primary-foreground"
                      : "bg-surface-2 text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6">
            <legend className="text-sm font-medium">
              Você já buscou atendimento para essa situação antes?
            </legend>
            <div className="mt-3 flex gap-3">
              {["Sim", "Não"].map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setAntes(opt)}
                  aria-pressed={antes === opt}
                  className={`flex-1 rounded-lg px-4 py-2.5 text-sm transition-colors ${
                    antes === opt
                      ? "bg-primary text-primary-foreground"
                      : "bg-surface-2 text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </fieldset>

          <label className="mt-6 block text-sm font-medium">
            Descreva resumidamente o que veio buscar / Qual sua necessidade.
            <textarea
              name="necessidade"
              required
              rows={4}
              placeholder="Conte um pouco sobre a sua situação"
              className={`${fieldClass} resize-none`}
            />
          </label>

          <button
            type="submit"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Enviar e falar no WhatsApp
          </button>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Ao enviar, você concorda em ser contatado pelo WhatsApp informado.
          </p>
        </form>
      </div>
    </section>
  );
}
