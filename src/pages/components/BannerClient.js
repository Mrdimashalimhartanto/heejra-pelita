import React from "react";

function BannerClient() {
  return (
    <div className="bg-gradient-to-r from-black via-biru to-biru">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block uppercase">Our Client</span>
          {/* <span class="block text-indigo-600">Start your free trial today.</span> */}
        </h2>
      </div>
    </div>
  );
}

export default BannerClient;
