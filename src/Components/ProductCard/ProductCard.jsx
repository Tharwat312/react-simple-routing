
export default function ProductCard({ productAttribute }) {
    return (
        <div className="border border-white bg-zinc-900 p-6 shadow-lg rounded-lg">
            <h2 className="mb-2 text-xl font-bold text-white">{productAttribute.name}</h2>
            <p className="mb-3 text-sm text-zinc-400">{productAttribute.category}</p>
            <p className="mb-5 text-zinc-300">{productAttribute.description}</p>
            <p className="text-lg font-bold text-white">{productAttribute.price} EGP</p>
        </div>
    )
}
