/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import LogoHeejra from "../../images/heejra-logo-2.png";
import Link from "next/link";

const includedFeatures = [
  "Event",
  "Program TV",
  "Branding Campaign",
  "Profile",
  "Promotion",
  "Sport",
  "Entertainment",
  "Etc",
];

const includedFeatures2 = [
  "Ceremonial",
  "Seminar",
  "Conference",
  "Launching",
  "Concert",
  "Exibition",
  "Gathering",
  "Etc",
];

const includedFeatures3 = [
  "Socialisation",
  "News",
  "Talk Show",
  "Entertainment",
  "Education",
  "Etc",
];

const includedFeatures4 = [
  "Sports",
  "Self Defense",
  "Education",
  "Management",
  "Skill",
  "Etc",
];

export default function Service() {
  return (
    <div className="bg-gray-100">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-extrabold text-black sm:text-3xl">
                  Our Service
                </h3>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-bold uppercase text-black">
                      Event & Media Consultant
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
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
                            className="h-5 w-5 text-biru"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-sm text-black font-bold">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-bold uppercase text-black">
                      Event Organizer
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul
                    role="list"
                    className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                    {includedFeatures2.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon
                            className="h-5 w-5 text-biru"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-sm text-black font-bold">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-bold uppercase text-black">
                      Electronic Program Media
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul
                    role="list"
                    className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                    {includedFeatures3.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon
                            className="h-5 w-5 text-biru"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-sm text-black font-bold">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-bold uppercase text-black">
                      Training Service
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul
                    role="list"
                    className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                    {includedFeatures4.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon
                            className="h-5 w-5 text-biru"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-sm text-black font-bold">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="py-8 px-6 text-center bg-biru lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                {/* Image */}
                <Image src={LogoHeejra} height={300} />
                <br />
                <p className="font-bold text-black">
                  PT. Heejra Pelita Inspirasi
                </p>
                {/* <div className="mt-6">
                  <Link
                    href="/dashboard/services"
                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600">
                    Detail Service
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
