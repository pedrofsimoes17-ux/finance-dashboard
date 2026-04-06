import { Zap, Volume2, Battery, Timer, Wind, Shield } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Alta Frequencia Profissional',
    description:
      'Tecnologia de alta frequencia que penetra profundamente nos tecidos musculares para alivio eficaz.',
  },
  {
    icon: Volume2,
    title: 'Motor Ultra Silencioso',
    description:
      'Menos de 45dB de ruido para voce relaxar sem disturbios, em qualquer momento.',
  },
  {
    icon: Battery,
    title: 'Bateria de 3 Horas',
    description:
      'Ate 3 horas de massagem por carga, energia suficiente para uma semana inteira de treinos.',
  },
  {
    icon: Timer,
    title: '4 Ponteiras Intercambiaveis',
    description:
      'Round Head, Flat Head, Taper Head e U-shape Head para cada grupo muscular.',
  },
  {
    icon: Wind,
    title: 'Leve e Ergonomico',
    description:
      'Design compacto e ergonomico para uso confortavel e prolongado em qualquer regiao.',
  },
  {
    icon: Shield,
    title: 'Garantia de 1 Ano',
    description:
      'Garantia completa contra defeitos de fabricacao e satisfacao garantida.',
  },
]

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            Por que a RelaxPro e diferente?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Combinamos tecnologia de ponta com design pensado para o seu
            conforto e bem-estar.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group flex flex-col rounded-2xl border border-border/50 bg-card p-8 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
