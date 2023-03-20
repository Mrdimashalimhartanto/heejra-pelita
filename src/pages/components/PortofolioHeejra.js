/* This example requires Tailwind CSS v2.0+ */
export default function PortofolioHeejra() {
  return (
    <div className="bg-gradient-to-r from-hitam via-hitam to-merah">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-putih sm:text-5xl">
              Our Portofolio, Our Best Projects
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-putih">
              <img
                className="max-h-12"
                src="https://seeklogo.com/images/B/belvita-logo-A589F3559F-seeklogo.com.png"
                alt="Belvita"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-putih">
              <img
                className="max-h-20"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Cadbury_Dairy_Milk_2015.png/200px-Cadbury_Dairy_Milk_2015.png"
                alt="Dairy Milk"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-putih">
              <img
                className="max-h-12"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Kraft_logo.svg/1280px-Kraft_logo.svg.png"
                alt="Kraft"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-putih">
              <img
                className="max-h-12"
                src="https://www.tonikum.co.id/sites/g/files/vrxlpx40291/files/Tonikum%20Logo%20New%201.png"
                alt="Toni kumbayer"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-putih">
              <img
                className="max-h-12"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Philips_logo_new.svg/1280px-Philips_logo_new.svg.png"
                alt="Philips"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
