import { Search, ShoppingCart, User } from "lucide-react";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-6 border-b">
      <a href="/"><div className="text-3xl font-bold">KOTON</div></a>
      
      <nav className="flex gap-8">
        <a href="/catalog" className="text-gray-700">Shop</a>
        <a href="#" className="text-gray-700">On Sale</a>
        <a href="#" className="text-gray-700">New Arrivals</a>
        <a href="#" className="text-gray-700">Brands</a>
      </nav>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-[300px] pl-10 pr-4 py-2 bg-gray-100 rounded-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        <ShoppingCart size={20} />
        <User size={20} />
      </div>
    </header>
  );
};

export default Navbar;