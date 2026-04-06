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

  const origin = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000'

  const response = await preference.create({
    body: {
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
      back_urls: {
        success: `${origin}/?status=success`,
        failure: `${origin}/?status=failure`,
        pending: `${origin}/?status=pending`,
      },
      auto_return: 'approved',
    },
  })

  return {
    preferenceId: response.id!,
    initPoint: response.init_point!,
  }
}
