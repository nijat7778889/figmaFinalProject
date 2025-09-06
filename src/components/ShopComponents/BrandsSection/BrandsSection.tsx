const BrandsSection = () => {
  const brands = ['VERSACE', 'ZARA', 'GUCCI', 'PRADA', 'Calvin Klein'];

  return (
    <section className="bg-black py-12 mt-20 rounded-2xl">
      <div className="flex justify-center gap-12">
        {brands.map((brand, index) => (
          <span key={index} className="font-bold text-xl text-white">
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;