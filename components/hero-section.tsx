'use client'

import Image from 'next/image'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const productImages = [
  {
    src: '/images/massage-gun-specs.png',
    alt: 'Pistola de massagem profissional nas cores verde e vermelha sobre superficie de marmore',
  },
  {
    src: '/images/massage-gun-use.jpg',
    alt: 'Ponteiras intercambiaveis da pistola de massagem com demonstracao de uso em diferentes regioes do corpo',
  },
  {
    src: '/images/massage-gun-accessories.jpg',
    alt: 'Bateria de longa duracao da pistola de massagem com ate 3 horas de uso por carga',
  },
  {
    src: '/images/massage-gun-hero.jpg',
    alt: 'Pistola de massagem profissional com display LCD e ponteiras de alta frequencia',
  },
]

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length)
  }

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-16 md:py-24 lg:flex-row lg:gap-16">
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="flex items-center gap-0.5">
              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            </span>
            +2.000 clientes satisfeitos
          </div>
          <h1 className="text-balance font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Alivio profundo.{' '}
            <span className="text-primary">Relaxamento</span> imediato.
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Descubra o massageador muscular profissional de alta frequencia
            que elimina tensoes, melhora a circulacao e proporciona o
            relaxamento que o seu corpo precisa.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#comprar"
              className="w-full rounded-xl bg-primary px-8 py-4 text-center text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:opacity-90 hover:shadow-xl hover:shadow-primary/30 sm:w-auto"
            >
              Comprar com 40% OFF
            </a>
            <a
              href="#como-funciona"
              className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              Saiba mais
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Frete Gratis
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Entrega em 3-7 dias uteis
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Ate 6x sem juros
            </span>
          </div>
        </div>
        <div className="relative flex-1">
          <div className="relative aspect-square max-w-lg overflow-hidden rounded-3xl border border-border/50 bg-card shadow-2xl">
            <Image
              src={productImages[currentImage].src}
              alt={productImages[currentImage].alt}
              fill
              className="object-cover"
              priority
            />
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-background"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-background"
              aria-label="Proxima imagem"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {productImages.map((img, index) => (
              <button
                key={img.src}
                onClick={() => setCurrentImage(index)}
                className={`h-16 w-16 overflow-hidden rounded-lg border-2 transition-all ${
                  index === currentImage
                    ? 'border-primary shadow-md'
                    : 'border-border/50 opacity-60 hover:opacity-100'
                }`}
                aria-label={`Ver imagem ${index + 1}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
