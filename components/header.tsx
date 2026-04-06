import { Leaf } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-serif text-xl font-bold text-foreground">
            RelaxPro
          </span>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#beneficios"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Beneficios
          </a>
          <a
            href="#como-funciona"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Como Funciona
          </a>
          <a
            href="#depoimentos"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Depoimentos
          </a>
          <a
            href="#comprar"
            className="rounded-lg bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Comprar Agora
          </a>
        </nav>
        <a
          href="#comprar"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:hidden"
        >
          Comprar
        </a>
      </div>
    </header>
  )
}
