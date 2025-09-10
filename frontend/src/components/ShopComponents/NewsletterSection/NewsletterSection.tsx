const NewsletterSection = () => {
  return (
    <section className="bg-gray-100 py-12 mt-20 rounded-2xl">
      <div className="text-center mb-12">
        <div className="bg-black text-white py-4 px-8 rounded-full inline-block mb-4">
          <h3 className="text-xl font-bold">OUR LATEST OFFERS</h3>
        </div>
        <button className="bg-white text-black py-2 px-6 rounded-full border">
          Subscribe to Newsletter
        </button>
      </div>
    </section>
  );
};

export default NewsletterSection;