/* This example requires Tailwind CSS v2.0+ */
const services = [
  {
    id: 1,
    name: "Event & Media Consultant",
    detail:
      "Event, Program TV, Branding Champaign, Profile, Promotion, Sport, Entertainment, Etc",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 2,
    name: "Event Organizer",
    detail:
      "Ceremonial. Seminary, Conference, Launching, Concert, Exhibition, Gathering, Etc",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1442504028989-ab58b5f29a4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 3,
    name: "Electronic program media",
    detail: "Socialisation, News, Talk Show, Entertainment, Education, Etc",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 4,
    name: "Training Service",
    detail: "Sports, Self Defense, Education Management, Skill, Etc",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1587089879249-87bf7d2972df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
];

const products = [
  {
    id: 1,
    name: "Event & Media Consultant",
    detail:
      "Activation concept, Event Design, Media Branding, Creative, Promotion, PR & Comunication Strategy, Etc",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 2,
    name: "Event Organizer",
    detail:
      "Multimedia, Lighting, Sound System, Talent, Art & Promotion, PR, Communication Strategy, Etc",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1442504028989-ab58b5f29a4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 3,
    name: "Electronic program media",
    detail:
      "Program TV Concept, Management TV , TV Program Production, Live Streaming, Etc",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 4,
    name: "Training Service",
    detail:
      "Self Defense Training, Security Training, Skill Training, Leadership Training, Management Training, Etc",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1587089879249-87bf7d2972df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
];

export default function ServiceProduct() {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-xl font-bold text-merah">Services</h2>

          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {services.map((services) => (
              <div key={services.id}>
                <div className="relative">
                  <div className="relative w-full h-72 rounded-lg overflow-hidden">
                    <img
                      src={services.imageSrc}
                      alt={services.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      {services.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {services.detail}
                    </p>
                  </div>
                  <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    {/* <p className="relative text-lg font-semibold text-white">
                    {services.price}
                  </p> */}
                  </div>
                </div>
                <div className="mt-6">
                  {/* <a
                    href={services.href}
                    className="relative flex bg-merah border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-putih hover:bg-hitam">
                    Details<span className="sr-only">, {services.name}</span>
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Products */}
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-xl font-bold text-merah">Products</h2>

          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {products.map((products) => (
              <div key={products.id}>
                <div className="relative">
                  <div className="relative w-full h-72 rounded-lg overflow-hidden">
                    <img
                      src={products.imageSrc}
                      alt={products.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      {products.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {products.detail}
                    </p>
                  </div>
                  <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    {/* <p className="relative text-lg font-semibold text-white">
                    {products.price}
                  </p> */}
                  </div>
                </div>
                <div className="mt-6">
                  {/* <a
                    href={products.href}
                    className="relative flex bg-merah border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-putih hover:bg-hitam">
                    Details<span className="sr-only">, {products.name}</span>
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
