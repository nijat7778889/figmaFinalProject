import Navbar from '../../../../widgets/navbar/ui/Navbar'
import Footer from '../../../../widgets/Footer/ui/Footer'
import HeroSection from '../../../../components/ShopComponents/HeroSection/HeroSection'
import BrandsSection from '../../../../components/ShopComponents/BrandsSection/BrandsSection'
import ProductGrid from '../../../../components/ShopComponents/ProductGrid/ProductGrid'
import NewsletterSection from '../../../../components/ShopComponents/NewsletterSection/NewsletterSection'
import { newArrivals, topSelling } from '../../../../shared/data/products'

const ShopPage = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-5">
      <Navbar />
      <HeroSection />
      <BrandsSection />
      <ProductGrid title="NEW ARRIVALS" products={newArrivals} />
      <ProductGrid title="TOP SELLING" products={topSelling} />
      <NewsletterSection />
      <Footer />
    </div>
  )
}

export default ShopPage