import React, { useState } from "react";

// Veltshot Bows - Luxury Modern with subtle natural elven theme
// Deep walnut background, light curly maple contrast, refined but organic feel
// Updated with elegant elven-style calligraphy font for headings and readable serif for text

export default function VeltshotBowsSite() {
  const [previewOrder, setPreviewOrder] = useState(null);
  const [form, setForm] = useState({
    model: "Alder",
    drawWeight: "40",
    handed: "right",
    custom: "",
    name: "",
    email: "",
    phone: "",
  });

  const models = [
    { key: "Alder", title: "Alder" },
    { key: "Ashen", title: "Ashen" },
    { key: "Kudu", title: "Kudu" },
    { key: "Silverleaf", title: "Silverleaf" },
  ];

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handlePreview(e) {
    e.preventDefault();
    setPreviewOrder({ ...form });
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1616627455127-82ef6a7cc021?auto=format&fit=crop&w=1600&q=60')] bg-fixed bg-center bg-cover text-amber-100 font-[\'Cormorant_Garamond\']">
      <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Cormorant+Garamond:wght@400;600&display=swap" rel="stylesheet" />

      {/* Overlay for subtle walnut-maple balance */}
      <div className="min-h-screen bg-gradient-to-b from-[#2b1f15cc] via-[#1a120acc] to-[#2b1f15cc]">

        {/* NAVBAR */}
        <header className="backdrop-blur-sm border-b border-amber-700/40 bg-[#1a120ad9] font-[\'Cormorant_Garamond\']">
          <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-md bg-gradient-to-br from-amber-700 to-yellow-400 shadow-[0_0_20px_rgba(255,215,0,0.4)] flex items-center justify-center text-[#1a1612] text-2xl font-semibold border border-amber-300 font-[\'Cinzel_Decorative\']">
                V
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl text-amber-50 font-[\'Cinzel_Decorative\'] tracking-tight drop-shadow-md">Veltshot Bows</h1>
                <p className="text-sm text-amber-200 italic font-[\'Cormorant_Garamond\']">Handcrafted Traditional Longbows & Recurves</p>
              </div>
            </div>

            <nav className="hidden md:flex gap-8 items-center text-amber-50 text-sm font-[\'Cormorant_Garamond\']">
              <a href="#home" className="hover:text-amber-400 transition">Home</a>
              <a href="#about" className="hover:text-amber-400 transition">About</a>
              <a href="#gallery" className="hover:text-amber-400 transition">Gallery</a>
              <a href="#orders" className="hover:text-amber-400 transition">Orders</a>
            </nav>
          </div>
        </header>

        {/* HERO */}
        <section id="home" className="max-w-6xl mx-auto px-6 py-24 text-center">
          <div className="bg-[#1c130ae6] backdrop-blur-md border border-amber-600/30 rounded-2xl p-10 inline-block shadow-[0_0_40px_rgba(255,215,0,0.25)]">
            <h2 className="text-5xl md:text-6xl font-[\'Cinzel_Decorative\'] text-amber-300 drop-shadow-lg">Veltshot Bows</h2>
            <p className="mt-6 text-amber-200 max-w-3xl mx-auto leading-relaxed text-lg font-[\'Cormorant_Garamond\']">Forged from nature, refined by hand. Traditional longbows and recurves that embody balance, strength, and elegance.</p>

            <div className="mt-10 flex justify-center gap-6 font-[\'Cormorant_Garamond\']">
              <a href="#gallery" className="px-8 py-3 rounded-md bg-gradient-to-r from-amber-600 to-yellow-400 text-[#1a1612] font-medium shadow-md hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] transition">View Gallery</a>
              <a href="#orders" className="px-8 py-3 rounded-md ring-1 ring-amber-500 text-amber-100 hover:bg-amber-100/10 transition">Order Custom</a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <main className="max-w-6xl mx-auto px-6 py-20 font-[\'Cormorant_Garamond\']">
          <section id="about" className="grid md:grid-cols-2 gap-10 items-center">
            <img className="rounded-lg shadow-[0_0_40px_rgba(255,215,0,0.2)] w-full h-96 object-cover" src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=60" alt="workshop" />
            <div>
              <h3 className="text-3xl font-[\'Cinzel_Decorative\'] mb-4 text-amber-300">About Veltshot Bows</h3>
              <p className="text-amber-100/90 mb-4 leading-relaxed">Veltshot Bows unites timeless bowcraft with refined design — each piece hand-shaped from carefully chosen hardwoods. Every bow reflects balance, harmony, and strength — designed for both the field and the collector’s wall.</p>
              <p className="text-amber-100/80 leading-relaxed">Every riser is carved and polished to bring out the spirit of the wood. Each bow is tuned for perfect tiller, ensuring a fluid draw and remarkable accuracy. Veltshot Bows embodies craftsmanship elevated to art.</p>
            </div>
          </section>

          {/* GALLERY */}
          <section id="gallery" className="mt-20">
            <h3 className="text-3xl font-[\'Cinzel_Decorative\'] mb-8 text-amber-300">Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="rounded-xl overflow-hidden bg-[#1b1814] border border-amber-800/40 shadow-[0_0_20px_rgba(255,215,0,0.15)] group">
                  <img src={`https://images.unsplash.com/photo-1609840114037-3c1b32e8d81f?auto=format&fit=crop&w=${900 + i * 10}&q=60`} alt={`bow ${i}`} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="p-5">
                    <h4 className="font-semibold text-amber-200 font-[\'Cormorant_Garamond\']">Model {i} — Placeholder</h4>
                    <p className="text-sm text-amber-100/80 mt-2 font-[\'Cormorant_Garamond\']">Handcrafted detail, graceful curvature — replace with your own masterpieces.</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ORDERS */}
          <section id="orders" className="mt-20">
            <h3 className="text-3xl font-[\'Cinzel_Decorative\'] mb-6 text-amber-300">Custom Orders</h3>
            <p className="text-amber-100/80 mb-8 max-w-3xl font-[\'Cormorant_Garamond\']">Choose a base model, specify draw weight and handedness, and add custom requests. Once submitted, you’ll receive a confirmation and crafting timeline.</p>

            <div className="grid md:grid-cols-2 gap-10 font-[\'Cormorant_Garamond\']">
              <form name="order" method="POST" data-netlify="true" onSubmit={handlePreview} className="bg-[#1c1a16] p-8 rounded-xl border border-amber-700/40 shadow-[0_0_25px_rgba(255,215,0,0.15)]">
                <input type="hidden" name="form-name" value="order" />

                <label className="block mb-4">
                  <span className="text-sm font-medium text-amber-200">Select Base Model</span>
                  <select name="model" value={form.model} onChange={handleChange} className="mt-2 w-full rounded-md bg-[#13110f] border border-amber-700/30 p-2 text-amber-100">
                    {models.map((m) => (
                      <option key={m.key} value={m.key}>{m.title}</option>
                    ))}
                  </select>
                </label>

                <label className="block mb-4">
                  <span className="text-sm font-medium text-amber-200">Draw Weight (lbs)</span>
                  <input name="drawWeight" value={form.drawWeight} onChange={handleChange} type="number" min="10" max="80" className="mt-2 w-full rounded-md bg-[#13110f] border border-amber-700/30 p-2 text-amber-100" />
                </label>

                <fieldset className="mb-4">
                  <legend className="text-sm font-medium text-amber-200">Handedness</legend>
                  <div className="mt-2 flex gap-6">
                    <label className="inline-flex items-center gap-2"><input type="radio" name="handed" value="right" checked={form.handed === 'right'} onChange={handleChange} /> Right</label>
                    <label className="inline-flex items-center gap-2"><input type="radio" name="handed" value="left" checked={form.handed === 'left'} onChange={handleChange} /> Left</label>
                  </div>
                </fieldset>

                <label className="block mb-4">
                  <span className="text-sm font-medium text-amber-200">Custom Requests</span>
                  <textarea name="custom" value={form.custom} onChange={handleChange} rows={4} className="mt-2 w-full rounded-md bg-[#13110f] border border-amber-700/30 p-2 text-amber-100" placeholder="Preferred wood, finish, engraving, etc."></textarea>
                </label>

                <div className="my-4 border-t border-amber-800/40" />

                <label className="block mb-4">
                  <span className="text-sm font-medium text-amber-200">Your Name</span>
                  <input name="name" value={form.name} onChange={handleChange} type="text" className="mt-2 w-full rounded-md bg-[#13110f] border border-amber-700/30 p-2 text-amber-100" />
                </label>

                <label className="block mb-4">
                  <span className="text-sm font-medium text-amber-200">Email</span>
                  <input name="email" value={form.email} onChange={handleChange} type="email" className="mt-2 w-full rounded-md bg-[#13110f] border border-amber-700/30 p-2 text-amber-100" />
                </label>

                <label className="block mb-6">
                  <span className="text-sm font-medium text-amber-200">Phone (optional)</span>
                  <input name="phone" value={form.phone} onChange={handleChange} type="tel" className="mt-2 w-full rounded-md bg-[#13110f] border border-amber-700/30 p-2 text-amber-100" />
                </label>

                <button type="submit" className="w-full py-3 bg-gradient-to-r from-amber-600 to-yellow-400 text-[#1a1612] rounded-md font-semibold shadow-md hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] transition">Preview Order</button>
              </form>

              <div className="bg-[#1c1a16] p-8 rounded-xl border border-amber-700/40 shadow-[0_0_25px_rgba(255,215,0,0.15)]">
                <h4 className="text-lg font-[\'Cinzel_Decorative\'] text-amber-300 mb-4">Order Preview</h4>
                {previewOrder ? (
                  <div>
                    <p><strong>Model:</strong> {previewOrder.model}</p>
                    <p><strong>Draw Weight:</strong> {previewOrder.drawWeight} lbs</p>
                    <p><strong>Handedness:</strong> {previewOrder.handed}</p>
                    <p className="mt-2"><strong>Custom:</strong><br />{previewOrder.custom || '—'}</p>
                    <p className="mt-4"><strong>Contact:</strong><br />{previewOrder.name || '—'} / {previewOrder.email || '—'} / {previewOrder.phone || '—'}</p>
                  </div>
                ) : (
                  <p className="text-amber-100/70">Fill the form and click <em>Preview Order</em> to see your summary here.</p>
                )}
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="mt-24 border-t border-amber-800/40 pt-8 pb-12 text-center font-[\'Cormorant_Garamond\']">
            <p className="text-sm text-amber-200/70">© {new Date().getFullYear()} Veltshot Bows — Handcrafted in Kloof, KZN</p>
            <div className="mt-4 flex justify-center gap-6 text-amber-300 font-[\'Cinzel_Decorative\']">
              <a href="#" className="hover:text-yellow-400 transition">Instagram</a>
              <a href="#" className="hover:text-yellow-400 transition">X</a>
              <a href="#" className="hover:text-yellow-400 transition">Facebook</a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
