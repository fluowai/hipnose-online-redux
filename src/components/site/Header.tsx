import { Brain } from "lucide-react";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#topo" className="flex items-center gap-2.5">
          <Brain className="size-7 text-primary" aria-hidden="true" />
          <span className="leading-tight">
            <span className="block text-lg font-semibold tracking-tight">ton lucas</span>
            <span className="block text-[11px] text-muted-foreground">hipnose e psicologia</span>
          </span>
        </a>
        <a
          href="#formulario"
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Quero ser atendido
        </a>
      </div>
    </header>
  );
}
