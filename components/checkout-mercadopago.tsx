'use client'

import { useEffect, useState } from 'react'
import { createMercadoPagoPreference } from '@/app/actions/mercadopago'
import { X, Loader2, ExternalLink } from 'lucide-react'

export default function CheckoutMercadoPago({
  productId,
  onClose,
}: {
  productId: string
  onClose: () => void
}) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [initPoint, setInitPoint] = useState<string | null>(null)

  useEffect(() => {
    async function loadPreference() {
      try {
        setLoading(true)
        const { initPoint } = await createMercadoPagoPreference(productId)
        setInitPoint(initPoint)
      } catch (err) {
        setError('Erro ao carregar pagamento. Tente novamente.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    loadPreference()
  }, [productId])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm">
      <div className="relative mx-4 w-full max-w-2xl overflow-hidden rounded-xl bg-card shadow-2xl">
        <div className="flex items-center justify-between border-b border-border bg-card px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#009ee3]">
              <span className="text-sm font-bold text-white">MP</span>
            </div>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Pagar com Mercado Pago
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Fechar checkout"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-8">
          {loading && (
            <div className="flex flex-col items-center gap-4 py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-muted-foreground">
                Preparando seu pagamento...
              </p>
            </div>
          )}

          {error && (
            <div className="flex flex-col items-center gap-4 py-12">
              <p className="text-center text-destructive">{error}</p>
              <button
                onClick={onClose}
                className="rounded-lg bg-secondary px-6 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary/80"
              >
                Fechar
              </button>
            </div>
          )}

          {!loading && !error && initPoint && (
            <div className="flex flex-col items-center gap-6">
              <div className="rounded-xl bg-[#009ee3]/10 p-6 text-center">
                <p className="text-lg font-semibold text-foreground">
                  Tudo pronto!
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Voce sera redirecionado para o ambiente seguro do Mercado Pago para
                  finalizar o pagamento. Aceita PIX, boleto, cartao de credito e debito.
                </p>
              </div>

              <a
                href={initPoint}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#009ee3] px-8 py-4 text-center text-lg font-bold text-white shadow-lg transition-all hover:bg-[#0087cc] hover:shadow-xl"
              >
                Ir para o Mercado Pago
                <ExternalLink className="h-5 w-5" />
              </a>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
                <span>PIX</span>
                <span className="h-3 w-px bg-border" />
                <span>Boleto</span>
                <span className="h-3 w-px bg-border" />
                <span>Cartao de Credito</span>
                <span className="h-3 w-px bg-border" />
                <span>Cartao de Debito</span>
                <span className="h-3 w-px bg-border" />
                <span>Ate 12x</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
