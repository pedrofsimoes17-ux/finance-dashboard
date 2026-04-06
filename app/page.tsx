import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import BenefitsSection from '@/components/benefits-section'
import ProductGallerySection from '@/components/product-gallery-section'
import HowItWorksSection from '@/components/how-it-works-section'
import TestimonialsSection from '@/components/testimonials-section'
import PricingSection from '@/components/pricing-section'
import FaqSection from '@/components/faq-section'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ProductGallerySection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}
