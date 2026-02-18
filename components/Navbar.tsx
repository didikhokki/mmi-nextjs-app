export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-5 px-6">
        <h1 className="text-lg font-semibold tracking-widest">
          HOT SPRING INN
        </h1>

        <nav className="flex gap-6 text-sm uppercase text-gray-600">
          <a href="#">Stay</a>
          <a href="#">Dining</a>
          <a href="#">Spa</a>
          <a href="#">Access</a>
        </nav>

        <button className="border px-4 py-2 text-sm rounded-full hover:bg-black hover:text-white transition">
          Reserve
        </button>
      </div>
    </header>
  );
}
