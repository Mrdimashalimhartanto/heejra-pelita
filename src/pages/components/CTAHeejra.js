/* This example requires Tailwind CSS v2.0+ */

export default function CTAHeejra() {
  return (
    <div className="relative bg-white">
      <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <img
              className="h-full w-full object-cover xl:absolute xl:inset-0"
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
              alt="People working on laptops"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-hitam xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <p
            className="mt-3 text-3xl font-extrabold text-black"
            data-aos="fade-right"
            data-aos-delay="700">
            PT HEEJRA PELITA INSPIRASI
          </p>
          <p
            className="mt-5 text-lg text-black"
            data-aos="fade-down-right"
            data-aos-delay="700">
            Lahir dari sinergi individu - individu kreatif, yang terbangun dari
            kesempatan berkolaborasi dalam berbagai aktifitas project.
            Pengalaman berkarya bersama lebih dari satu dekade, kami sepakat
            untuk satu visi dan solid membangun PT. Heejra Pelita Inspirasi.
            Heejra Pelita Inspirasi memiliki arti, berkumpulnya individu -
            individu kreatif dengan semangat berkarya hingga menginspirasi.
            mampu mengolah project yang out of the box, creative, sehingga mampu
            menghibur dan menimbulkan kesan, tersampaikan sebuah pesan harapan
            dan keinginan customer
          </p>
        </div>
      </div>
    </div>
  );
}
