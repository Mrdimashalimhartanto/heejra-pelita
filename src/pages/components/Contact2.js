/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";

export default function Contact2() {
  return (
    <div className="bg-hitam">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-extrabold text-merah sm:text-3xl">
              PT HEEJRA PELITA INSPIRASI
            </h2>
            <div className="mt-3">
              <p className="text-lg text-black">
                Tomang Taya Blok mm Kav 557 No51E lt3 rt1/01 kec Grogol
                Petamburan Jakbar 11440 heejrapelitainspirasi@gmail.com
              </p>
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon
                    className="h-6 w-6 text-black"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 font-bold text-black">
                  <p>0878-7836-9407</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <MailIcon className="h-6 w-6 text-black" aria-hidden="true" />
                </div>
                <div className="ml-3 font-bold text-black">
                  <p>pelitainspirasiheejra@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
            <h2 className="text-2xl font-extrabold text-merah sm:text-3xl">
              Service & Product
            </h2>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0"></div>
                <div className="ml-3 text-base">
                  <p className="text-biru font-bold">
                    Event & Media Consultant
                  </p>
                  <p className="mt-1 text-black">
                    Event, Program TV, Branding Champaign, Profile, Promotion,
                    Sport, Entertaiment, Etc
                  </p>
                </div>
                <div className="ml-3 text-base text-black">
                  <p className="text-biru font-bold">Event Organizer</p>
                  <p className="mt-1 text-black">
                    Ceremonial, Seminary, Conference, Launching, Conrect,
                    Exibition, Gathering, Etc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
