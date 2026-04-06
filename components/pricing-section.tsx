'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Check,
  ShieldCheck,
  Truck,
  RotateCcw,
  CreditCard,
  QrCode,
  Receipt,
  Clock,
} from 'lucide-react'
import dynamic from 'next/dynamic'
import { PRODUCTS } from '@/lib/products'

const CheckoutMercadoPago = dynamic(
  () => import('@/components/checkout-mercadopago'),
  { ssr: false }
)

const product = PRODUCTS[0]

const included = [
  '1x Massageador de Alta Frequencia',
  '4x Ponteiras Intercambiaveis (Round, Flat, Taper, U-shape)',
  '1x Carregador USB-C',
  '1x Manual de Instrucoes',
]

function formatPrice(cents: number) {
  return (cents / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export default function PricingSection() {
  const [showCheckout, setShowCheckout] = useState(false)

  const pricePerInstallment6x = Math.round(product.priceInCents / 6)
  const pricePerInstallment12x = Math.round(product.priceInCents / 12)

  return (
    <>
      <section id="comprar" className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Garanta a sua RelaxPro
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Aproveite a oferta por tempo limitado e comece a cuidar do
              seu corpo hoje.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-xl">
            <div className="overflow-hidden rounded-3xl border-2 border-primary/30 bg-card shadow-xl">
              <div className="bg-primary px-8 py-3 text-center text-sm font-semibold text-primary-foreground">
                OFERTA ESPECIAL - 40% DE DESCONTO
              </div>
              <div className="p-8 md:p-10">
                {/* Preco principal */}
                <div className="flex items-center justify-center gap-4">
                  {product.originalPriceInCents && (
                    <span className="text-lg text-muted-foreground line-through">
                      {formatPrice(product.originalPriceInCents)}
                    </span>
                  )}
                  <span className="font-serif text-5xl font-bold text-foreground">
                    {formatPrice(product.priceInCents)}
                  </span>
                </div>

                {/* Opcoes de parcelamento */}
                <div className="mt-4 rounded-xl bg-secondary/60 p-4">
                  <p className="text-center text-sm font-semibold text-foreground">
                    Opcoes de Parcelamento
                  </p>
                  <div className="mt-3 flex flex-col gap-2">
                    <div className="flex items-center justify-between rounded-lg bg-background/80 px-4 py-2.5">
                      <span className="text-sm font-medium text-foreground">
                        6x sem juros
                      </span>
                      <span className="text-sm font-bold text-primary">
                        {formatPrice(pricePerInstallment6x)}
                        <span className="font-normal text-muted-foreground">/mes</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-background/80 px-4 py-2.5">
                      <span className="text-sm font-medium text-foreground">
                        12x com juros
                      </span>
                      <span className="text-sm font-bold text-primary">
                        {formatPrice(pricePerInstallment12x)}
                        <span className="font-normal text-muted-foreground">/mes</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-background/80 px-4 py-2.5">
                      <span className="text-sm font-medium text-foreground">
                        PIX / Boleto a vista
                      </span>
                      <span className="text-sm font-bold text-primary">
                        {formatPrice(product.priceInCents)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Formas de pagamento aceitas */}
                <div className="mt-5 rounded-xl border border-border/50 p-4">
                  <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Formas de pagamento aceitas
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <div className="flex items-center gap-1.5 text-sm text-foreground">
                      <CreditCard className="h-4 w-4 text-primary" />
                      <span>Visa</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-foreground">
                      <CreditCard className="h-4 w-4 text-primary" />
                      <span>Mastercard</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-foreground">
                      <QrCode className="h-4 w-4 text-primary" />
                      <span>PIX</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-foreground">
                      <Receipt className="h-4 w-4 text-primary" />
                      <span>Boleto</span>
                    </div>
                  </div>
                </div>

                {/* Imagem do produto */}
                <div className="relative my-8 aspect-[16/9] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/massage-gun-detail.jpg"
                    alt="Pistola de massagem profissional de alta frequencia com display LCD"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Itens incluidos */}
                <ul className="flex flex-col gap-3">
                  {included.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-foreground"
                    >
                      <Check className="h-5 w-5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Entrega */}
                <div className="mt-6 flex items-center gap-3 rounded-xl bg-primary/5 p-4">
                  <Truck className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Entrega para todo o Brasil
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Receba em 3 a 7 dias uteis com frete gratis
                    </p>
                  </div>
                </div>

                {/* Botao de compra */}
                <div className="mt-8">
                  <button
                    onClick={() => setShowCheckout(true)}
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#009ee3] py-4 text-center text-lg font-bold text-white shadow-lg transition-all hover:bg-[#0087cc] hover:shadow-xl"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded bg-white/20">
                      <span className="text-xs font-extrabold">MP</span>
                    </div>
                    Comprar Agora
                  </button>
                </div>

                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Pagamento 100% seguro e criptografado
                </p>

                {/* Selos de confianca */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    Compra Segura
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-primary" />
                    3-7 Dias Uteis
                  </span>
                  <span className="flex items-center gap-1.5">
                    <RotateCcw className="h-4 w-4 text-primary" />
                    30 Dias Garantia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showCheckout && (
        <CheckoutMercadoPago
          productId={product.id}
          onClose={() => setShowCheckout(false)}
        />
      )}
    </>
  )
}
