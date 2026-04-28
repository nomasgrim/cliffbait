export default function Hero() {
  return (
    <section className="bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Soft Plastics That Get Bass to Commit
          </h1>

          <p className="mt-4 text-lg text-gray-300">
            Built to trigger reaction strikes when other baits get ignored.
          </p>

          <div className="mt-6 flex gap-4">
            <a href="/list?cat=all-products" className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-lg">
              Shop Baits
            </a>

          </div>
        </div>

        <div>
          <img
            src="https://static.wixstatic.com/media/6f3554_7d92ccaad5984623bc69d8c8132a3654~mv2.jpg"
            alt="Bass caught with Cliff Bait"
            className="rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}