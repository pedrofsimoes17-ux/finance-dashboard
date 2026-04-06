import Image from 'next/image'

const steps = [
  {
    number: '01',
    title: 'Escolha a Ponteira',
    description:
      'Selecione entre as 4 ponteiras a ideal para a regiao que deseja massagear.',
  },
  {
    number: '02',
    title: 'Ajuste a Intensidade',
    description:
      'Escolha entre os 6 niveis de potencia de acordo com a sua preferencia.',
  },
  {
    number: '03',
    title: 'Relaxe e Recupere',
    description:
      'Aplique sobre a musculatura por 2-3 minutos em cada regiao e sinta o alivio.',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="relative flex-1">
            <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-3xl border border-border/50 shadow-xl">
              <Image
                src="/images/massage-gun-use.jpg"
                alt="Ponteiras intercambiaveis da pistola de massagem: Round Head, Flat Head, Taper Head e U-shape Head com demonstracao de uso"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Como funciona
            </h2>
            <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              Em apenas 3 passos simples, voce pode transformar o seu
              momento de descanso em uma experiencia profissional.
            </p>
            <div className="mt-10 flex flex-col gap-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1 leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
