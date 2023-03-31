import Image from "next/image";
import LogoHeejra from "../../images/heejra-logo-2.png";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/solid";
import BannerVisiMisi from "./BannerVisiMisi";

const navigation = [
  { name: "Home", href: "/" },
  //   { name: "About Us", href: "/dashboard/aboutus" },
  //   { name: "Service", href: "/dashboard/services" },
  //   { name: "Contact", href: "/dashboard/contact" },
];

export default function HeaderHeejra() {
  return (
    <div className="relative overflow-hidden">
      <Popover as="header" className="relative">
        <div className="bg-biru pt-8"></div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
            <div className="rounded-lg shadow-md bg-gray-600 ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <Image src={LogoHeejra} className="h-8 w-auto" />
                  {/* <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  /> */}
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-putih hover:bg-merah">
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <div>
        <main>
          <div className="pt-10 bg-biru sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-24">
                    <a
                      href="#"
                      className="inline-flex items-center text-white bg-white rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                      <span
                        className="px-3 py-0.5 text-black text-xs font-bold leading-5 uppercase tracking-wide bg-merah rounded-full"
                        data-aos="fade-up-right"
                        data-aos-delay="700">
                        PT. Heejra Pelita Inspirasi
                      </span>
                    </a>
                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-5xl uppercase">
                      <span
                        className="block"
                        data-aos="fade-left"
                        data-aos-delay="800">
                        Selamat datang di
                      </span>
                      <span
                        className="block text-white"
                        data-aos="fade-right"
                        data-aos-delay="700">
                        Heejra Pelita Inspirasi.
                      </span>
                    </h1>
                    <p
                      className="mt-3 text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                      data-aos="fade-down"
                      data-aos-delay="200">
                      Heejra Pelita Inspirasi memiliki arti, berkumpulnya
                      individu-individu kreatif dengan semangat berkarya hingga
                      menginspirasi.
                    </p>
                    {/* <div className="mt-10 sm:mt-12">
                    <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                      <div className="sm:flex">
                        <div className="min-w-0 flex-1">
                          <label htmlFor="email" className="sr-only">
                            Email address
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                          />
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <button
                            type="submit"
                            className="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900">
                            Start free trial
                          </button>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                        Start your free 14-day trial, no credit card necessary.
                        By providing your email, you agree to our{" "}
                        <a href="#" className="font-medium text-white">
                          terms of service
                        </a>
                        .
                      </p>
                    </form>
                  </div> */}
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                    <Image
                      src={LogoHeejra}
                      alt="Logo hero heejra"
                      className="w-120 lg:absolute lg:inset-y-0 lg:left-0 lg:h-120 lg:w-120 lg:max-w-none"
                    />
                    {/* <img
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                    alt=""
                  /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <BannerVisiMisi />
      </div>
    </div>
  );
}
