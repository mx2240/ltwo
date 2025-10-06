import React from "react";



const items = [
    {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
        title: "Hidden Tropical Beach",
        desc: "White sand, crystal waters and barely any footprints — a quiet escape for slower days.",
    },
    {
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
        title: "Sunset Cliff View",
        desc: "A dramatic drop into the ocean makes this a perfect spot for golden-hour photos.",
    },
    {
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
        title: "Lush Green Cove",
        desc: "Hidden behind rocks and foliage, this cove is a tiny paradise for snorkelers.",
    },
    {
        image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1200&auto=format&fit=crop",
        title: "Blue Wave Arch",
        desc: "Sculpted by the sea, an archway of waves and stone that photographers love.",
    },
];

export default function ImageCardGrid() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex flex-col items-center py-12 px-4">
            <h1 className="text-2xl font-bold mb-8 text-center">Beautiful Image Cards</h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-6xl">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="bg-slate-800/70 rounded-2xl shadow-lg overflow-hidden border border-slate-700 hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-5 flex flex-col gap-2">
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                            <p className="text-slate-300 text-sm">{item.desc}</p>
                            <button className="mt-3 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-sm font-medium text-white rounded-lg self-start transition">
                                View More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}