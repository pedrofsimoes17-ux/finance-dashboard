'use server'

import { Preference } from 'mercadopago'
import { mercadopago } from '@/lib/mercadopago'
import { PRODUCTS } from '@/lib/products'

export async function createMercadoPagoPreference(productId: string) {
  const product = PRODUCTS.find((p) => p.id === productId)
  if (!product) {
    throw new Error(`Produto com id "${productId}" nao encontrado`)
  }

  const preference = new Preference(mercadopago)

  // Detecta a URL de origem para os redirects
  const vercelUrl = process.env.VERCEL_URL || process.env.NEXT_PUBLIC_VERCEL_URL
  const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  
  // Usa URL de producao se disponivel, senao usa a URL do deploy preview
  const origin = productionUrl
    ? `https://${productionUrl}`
    : vercelUrl
      ? `https://${vercelUrl}`
      : null
  
  console.log('[v0] MercadoPago origin URL:', origin)

  // Configura o body da preferencia
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const preferenceBody: any = {
    items: [
      {
        id: product.id,
        title: product.name,
        description: product.description,
        quantity: 1,
        unit_price: product.priceInCents / 100,
        currency_id: 'BRL',
      },
    ],
    payment_methods: {
      installments: 12,
      excluded_payment_types: [],
    },
  }

  // So adiciona back_urls e auto_return se tivermos uma URL de producao valida (nao localhost)
  if (origin) {
    preferenceBody.back_urls = {
      success: `${origin}/?status=success`,
      failure: `${origin}/?status=failure`,
      pending: `${origin}/?status=pending`,
    }
    preferenceBody.auto_return = 'approved'
  }

  const response = await preference.create({
    body: preferenceBody,
  })

  return {
    preferenceId: response.id!,
    initPoint: response.init_point!,
  }
}
