'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'A pistola de massagem e segura para uso em casa?',
    answer:
      'Sim, a RelaxPro foi projetada para uso domestico seguro. Possui sensores de protecao contra superaquecimento e desligamento automatico apos 10 minutos de uso continuo.',
  },
  {
    question: 'Quanto tempo leva para a entrega?',
    answer:
      'O prazo de entrega e de 3 a 7 dias uteis para todo o Brasil, com frete gratis. Voce recebera o codigo de rastreamento por e-mail assim que o pedido for enviado.',
  },
  {
    question: 'Posso devolver se nao gostar?',
    answer:
      'Com certeza! Oferecemos garantia de satisfacao de 30 dias. Se por qualquer motivo voce nao estiver satisfeito, devolvemos 100% do seu dinheiro.',
  },
  {
    question: 'Qual a duracao da bateria?',
    answer:
      'A bateria de litio da RelaxPro dura ate 6 horas de uso continuo. O carregamento completo leva aproximadamente 2 horas via USB-C.',
  },
  {
    question: 'Quais formas de pagamento sao aceitas?',
    answer:
      'Aceitamos cartoes de credito (Visa, Mastercard, American Express), cartoes de debito e outras formas de pagamento seguras via Stripe.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Tire suas duvidas sobre a RelaxPro.
          </p>
        </div>
        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-border/50 bg-card"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="pr-4 font-medium text-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="border-t border-border/50 px-6 py-5">
                  <p className="leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
