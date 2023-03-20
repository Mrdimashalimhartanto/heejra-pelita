/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import LogoHeejra from "../../images/heejra-logo-2.png";
import Link from "next/link";

const includedFeatures = [
  "Event & Media Consultant",
  "Event Organizer",
  "Electronic Program Media",
  "Training Services",
];

export default function Service() {
  return (
    <div className="bg-hitam">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2
              className="text-3xl font-extrabold text-putih sm:text-4xl lg:text-6xl"
              data-aos="zoom-in"
              data-aos-delay="400">
              Service
            </h2>
            {/* <p className="mt-4 text-xl text-gray-300">
              If you're not satisfied, contact us within the first 14 days and
              we'll send you a full refund.
            </p> */}
          </div>
        </div>
      </div>
      <div className="mt-8 bg-hitam pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-hitam" />
          <div
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            data-aos="zoom-in-right"
            data-aos-transition="">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Service yang tersedia di Heejra
                </h3>
                <p className="mt-6 text-base text-gray-500">
                  Lorem ipsum dolor sit amet consect etur adipisicing elit.
                  Itaque amet indis perferendis blanditiis repellendus etur
                  quidem assumenda.
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-hitam">
                      What's included
                    </h4>
                    <div className="flex-1 border-t-2 border-hitam" />
                  </div>
                  <ul
                    role="list"
                    className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                    {includedFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon
                            className="h-5 w-5 text-merah"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-sm text-hitam font-semibold">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="py-8 px-6 text-center bg-merah lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg leading-6 font-bold text-putih">
                  PT HEEJRA PELITA INSPIRASI
                </p>
                <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-putih">
                  <Image src={LogoHeejra} className="h-20 w-20" />
                  {/* <span>$349</span>
                  <span className="ml-3 text-xl font-medium text-putih">
                    USD
                  </span> */}
                </div>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <Link
                      href="/dashboard/services"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900">
                      Detail Service
                    </Link>
                    {/* <a
                      href="#"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900">
                      Detail Services
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
