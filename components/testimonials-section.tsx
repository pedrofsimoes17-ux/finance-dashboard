import { Star, StarHalf, ShieldCheck } from 'lucide-react'

const overallRating = 4.7
const totalReviews = 1647

const testimonials = [
  {
    name: 'Marcos A.',
    location: 'Sao Paulo, BR',
    date: 'Nov 2025',
    quote:
      'Produto chegou rapido e bem embalado. A qualidade surpreendeu pelo preco. Uso depois dos treinos e a recuperacao muscular melhorou muito. As 4 ponteiras sao otimas para diferentes partes do corpo.',
    rating: 5,
    verified: true,
  },
  {
    name: 'Fernanda L.',
    location: 'Rio de Janeiro, BR',
    date: 'Out 2025',
    quote:
      'Comprei para aliviar dores no pescoco por causa do trabalho no computador. Funciona muito bem, e silencioso e a bateria dura bastante. Ja recomendei para minhas colegas do escritorio.',
    rating: 5,
    verified: true,
  },
  {
    name: 'Carlos R.',
    location: 'Belo Horizonte, BR',
    date: 'Dez 2025',
    quote:
      'Otimo custo-beneficio! A ponteira U-shape e perfeita para o pescoco. Motor silencioso, nao incomoda ninguem. Unico ponto e que poderia ter mais niveis de intensidade, mas pelo preco esta excelente.',
    rating: 4,
    verified: true,
  },
  {
    name: 'Ana P.',
    location: 'Curitiba, BR',
    date: 'Jan 2026',
    quote:
      'Sou fisioterapeuta e comprei para testar. A qualidade e muito boa para uso domestico. Meus pacientes adoraram. Entrega dentro do prazo e embalagem segura.',
    rating: 5,
    verified: true,
  },
  {
    name: 'Ricardo M.',
    location: 'Porto Alegre, BR',
    date: 'Set 2025',
    quote:
      'Minha esposa e eu usamos todos os dias. Alivia muito a tensao nas costas. Ja temos ha 3 meses e funciona perfeitamente. Bateria dura umas 3 horas como prometido.',
    rating: 5,
    verified: true,
  },
  {
    name: 'Juliana S.',
    location: 'Salvador, BR',
    date: 'Nov 2025',
    quote:
      'Terceira vez que compro no AliExpress e esse produto e o melhor que ja recebi. Acabamento bom, funciona super bem. A ponteira redonda e a minha favorita para as pernas apos corrida.',
    rating: 5,
    verified: true,
  },
]

function RatingStars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5

  return (
    <div className="flex gap-0.5">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`full-${i}`} className="h-4 w-4 fill-primary text-primary" />
      ))}
      {hasHalf && <StarHalf className="h-4 w-4 fill-primary text-primary" />}
      {Array.from({ length: 5 - fullStars - (hasHalf ? 1 : 0) }).map((_, i) => (
        <Star key={`empty-${i}`} className="h-4 w-4 text-border" />
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            Avaliacoes dos nossos clientes
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Baseado em mais de {totalReviews.toLocaleString('pt-BR')} avaliacoes verificadas de compradores reais.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <span className="font-serif text-5xl font-bold text-foreground">
                {overallRating}
              </span>
              <div className="flex flex-col items-start gap-1">
                <RatingStars rating={overallRating} />
                <span className="text-sm text-muted-foreground">
                  {totalReviews.toLocaleString('pt-BR')} avaliacoes
                </span>
              </div>
            </div>

            <div className="mt-2 flex w-full max-w-xs flex-col gap-1.5">
              {[
                { stars: 5, percent: 78 },
                { stars: 4, percent: 14 },
                { stars: 3, percent: 5 },
                { stars: 2, percent: 2 },
                { stars: 1, percent: 1 },
              ].map((bar) => (
                <div key={bar.stars} className="flex items-center gap-2 text-sm">
                  <span className="w-3 text-muted-foreground">{bar.stars}</span>
                  <Star className="h-3 w-3 fill-primary text-primary" />
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-border">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${bar.percent}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-muted-foreground">
                    {bar.percent}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-border/50 bg-card p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <RatingStars rating={testimonial.rating} />
                <span className="text-xs text-muted-foreground">
                  {testimonial.date}
                </span>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {`"${testimonial.quote}"`}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-border/50 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                {testimonial.verified && (
                  <span className="flex items-center gap-1 text-xs text-primary">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Verificado
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
