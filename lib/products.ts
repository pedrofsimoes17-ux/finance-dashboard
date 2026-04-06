export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  originalPriceInCents?: number
  images?: string[]
  supplierUrl?: string
}

export const PRODUCTS: Product[] = [
  {
    id: 'relaxpro-massage-gun',
    name: 'Massageador Muscular Profissional de Alta Frequencia',
    description: 'Massageador eletrico de alta frequencia com 4 ponteiras intercambiaveis, bateria de 3 horas e motor silencioso. Ideal para alivio de tensoes musculares e recuperacao pos-treino.',
    priceInCents: 26990,
    originalPriceInCents: 44990,
    supplierUrl: 'https://ja.aliexpress.com/item/1005005217112643.html',
  },
]
