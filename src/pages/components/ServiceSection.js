/* This example requires Tailwind CSS v2.0+ */
export default function ServiceSection() {
  return (
    <div className="relative bg-hitam">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Foto event service"
        />
        <div
          className="absolute inset-0 bg-gray-700 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Service & Product
        </h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
          Beberapa layanan service yang ada di PT kami, berikut beberapa detail
          service yang akan kami berikan untuk anda.
        </p>
      </div>
    </div>
  );
}
