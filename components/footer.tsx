import { Leaf, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg font-bold text-foreground">
              RelaxPro
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#beneficios" className="transition-colors hover:text-foreground">
              Beneficios
            </a>
            <a href="#como-funciona" className="transition-colors hover:text-foreground">
              Como Funciona
            </a>
            <a href="#depoimentos" className="transition-colors hover:text-foreground">
              Depoimentos
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground">
              FAQ
            </a>
            <a
              href="https://ja.aliexpress.com/item/1005005217112643.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
            >
              Fornecedor AliExpress
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            {'2026 RelaxPro. Todos os direitos reservados.'}
          </p>
          <p className="mt-2">
            Pagamento seguro processado por Stripe. Produto fornecido via AliExpress.
          </p>
        </div>
      </div>
    </footer>
  )
}
