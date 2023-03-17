/* This example requires Tailwind CSS v2.0+ */
import { ExternalLinkIcon } from "@heroicons/react/solid";

export default function CTAHeejra2() {
  return (
    <div className="relative bg-hitam">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
          alt=""
        />
      </div>
      <div className="relative max-w-9xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-bold uppercase tracking-wider text-merah">
            PT HEEJRA PELITA INSPIRASI
          </h2>
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
            Who Are We ?
          </p>
          <p className="mt-3 text-lg text-gray-300">
            Visi & Misi ( Memorable message & Creative Strategic) Mampu mengolah
            project yang out of the box, creative, sehingga mampu menghibur, dan
            menimbulkan kesan, tersampaikannya sebuah pesan sesuai harapan dan
            keiginan customer. Memorable massage dibangun oleh kreatifitas team
            work yang solid dan profesional yang memberikan kenyamanan dalam
            bekerjasama dengan mitra.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                Visit the help center
                <ExternalLinkIcon
                  className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
