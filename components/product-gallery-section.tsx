import Image from 'next/image'

const galleryImages = [
  {
    src: '/images/massage-gun-specs.png',
    alt: 'Pistola de massagem profissional disponivel nas cores verde e vermelha',
    label: 'Cores Disponiveis',
  },
  {
    src: '/images/massage-gun-use.jpg',
    alt: 'Ponteiras intercambiaveis com demonstracao de uso em diferentes partes do corpo',
    label: 'Ponteiras Multifuncionais',
  },
  {
    src: '/images/massage-gun-accessories.jpg',
    alt: 'Bateria de longa duracao com ate 3 horas de uso por carga',
    label: 'Bateria de 3 Horas',
  },
  {
    src: '/images/massage-gun-hero.jpg',
    alt: 'Pistola de massagem com display digital e controle de intensidade',
    label: 'Display Digital LCD',
  },
]

export default function ProductGallerySection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            Conhega o produto de perto
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Imagens reais do massageador profissional de alta frequencia
            direto do fabricante.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm transition-all hover:shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-4 pt-12">
                <span className="text-sm font-semibold text-background">
                  {image.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
