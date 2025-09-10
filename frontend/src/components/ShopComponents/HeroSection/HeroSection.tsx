import heroImage from "../../../images/Log.png";

const HeroSection = () => {
  return (
    <section className="flex items-center gap-10 pt-[60px] mt-[60px]">
      <div className="flex-1">
        <h1 className="text-[48px] font-bold mb-6">
          FIND CLOTHES<br />
          THAT MATCHES<br />
          YOUR STYLE
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="bg-black text-white py-4 px-12 rounded-full font-medium mb-12">
          Shop Now
        </button>
        <div className="flex gap-8">
          <div>
            <div className="text-3xl font-bold">200+</div>
            <div className="text-gray-600 text-sm">International Brands</div>
          </div>
          <div>
            <div className="text-3xl font-bold">2,000+</div>
            <div className="text-gray-600 text-sm">High-Quality Products</div>
          </div>
          <div>
            <div className="text-3xl font-bold">30,000+</div>
            <div className="text-gray-600 text-sm">Happy Customers</div>
          </div>
        </div>
      </div>
      
      <div className="flex-1">
        <img 
          src={heroImage} 
          alt="Hero Image" 
          className="w-full h-[500px] object-cover rounded-2xl" 
        />
      </div>
    </section>
  );
};

export default HeroSection;