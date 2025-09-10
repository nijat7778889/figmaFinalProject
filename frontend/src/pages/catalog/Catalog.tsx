import Footer from "../../widgets/Footer/ui/Footer"
import Navbar from "../../widgets/navbar/ui/Navbar"
import { products } from "../../entities/productapi"

const Catalog = () => {
    return (
        <div className="max-w-[1400px] mx-auto px-4">
            <Navbar />
            <div className="flex mt-10">
                <aside className="w-[250px] space-y-6">
                    <div>
                        <h2 className="font-semibold mb-2">Filters</h2>
                        <ul className="space-y-1 text-sm">
                            <li>T-shirts</li>
                            <li>Shirts</li>
                            <li>Shorts</li>
                            <li>Hoodies</li>
                            <li>Jeans</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-2">Price</h2>
                        <input type="range" min={0} max={500} className="w-full" />
                        <div className="flex justify-between text-xs">
                            <span>$0</span>
                            <span>$500</span>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-2">Colors</h2>
                        <div className="flex flex-wrap gap-2">
                            <div className="w-5 h-5 rounded-full bg-green-500" />
                            <div className="w-5 h-5 rounded-full bg-blue-500" />
                            <div className="w-5 h-5 rounded-full bg-orange-500" />
                            <div className="w-5 h-5 rounded-full bg-yellow-500" />
                            <div className="w-5 h-5 rounded-full bg-purple-500" />
                            <div className="w-5 h-5 rounded-full bg-pink-500" />
                            <div className="w-5 h-5 rounded-full bg-black" />
                            <div className="w-5 h-5 rounded-full bg-white border" />
                        </div>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-2">Size</h2>
                        <div className="flex flex-wrap gap-2 text-xs">
                            <button className="border px-2 py-1 rounded">XS</button>
                            <button className="border px-2 py-1 rounded">S</button>
                            <button className="border px-2 py-1 rounded">M</button>
                            <button className="border px-2 py-1 rounded">L</button>
                            <button className="border px-2 py-1 rounded">XL</button>
                            <button className="border px-2 py-1 rounded">XXL</button>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-2">Dress Style</h2>
                        <ul className="space-y-1 text-sm">
                            <li>Casual</li>
                            <li>Formal</li>
                            <li>Party</li>
                            <li>Gym</li>
                        </ul>
                    </div>
                    <button className="w-full bg-black text-white py-2 rounded text-sm">
                        Apply Filter
                    </button>
                </aside>

                <main className="flex-1 ml-10">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-xl font-semibold">Casual</h1>
                        <select className="text-sm border px-2 py-1 rounded">
                            <option>Most Popular</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        {products.map((item, index) => (
                            <div key={index} className="border rounded p-3 space-y-2">
                                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded" />
                                <h3 className="text-sm font-semibold">{item.name}</h3>
                                <div className="text-yellow-400 text-sm">
                                    {"★".repeat(Math.floor(item.rating))}{"☆".repeat(5 - Math.floor(item.rating))}
                                </div>
                                <div className="text-sm font-semibold">
                                    ${item.price}
                                    {item.oldPrice && (
                                        <span className="line-through text-gray-400 ml-2">${item.oldPrice}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between items-center mt-8">
                        <button className="text-sm border px-3 py-1 rounded">Previous</button>
                        <div className="space-x-2">
                            <button className="text-sm px-2 py-1 rounded bg-black text-white">1</button>
                            <button className="text-sm px-2 py-1 rounded">2</button>
                            <button className="text-sm px-2 py-1 rounded">3</button>
                        </div>
                        <button className="text-sm border px-3 py-1 rounded">Next</button>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Catalog