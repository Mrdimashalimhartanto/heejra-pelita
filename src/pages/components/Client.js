import Image from "next/image";
import Oreo from "../../images/client/oreo.png";
import Ritz from "../../images/client/ritz.png";

const people = [
  {
    name: "Michael Foster",
    role: "Belvita",
    imageUrl:
      "https://seeklogo.com/images/B/belvita-logo-A589F3559F-seeklogo.com.png",
  },
  {
    name: "Michael Foster",
    role: "Oreo",
    imageUrl: "http://assets.stickpng.com/thumbs/589a40d65aa6293a4aac48a7.png",
  },
  {
    name: "Michael Foster",
    role: "Ritz",
    imageUrl: "https://assets.stickpng.com/images/5cb772d6a7c7755bf004c0f1.png",
  },
  {
    name: "Michael Foster",
    role: "Cadbury",
    imageUrl:
      "https://1000logos.net/wp-content/uploads/2022/08/Cadbury-Dairy-Milk-Logo-2013.png",
  },
  {
    name: "Michael Foster",
    role: "Chip Ahoy",
    imageUrl:
      "https://www.letschatsnacks.com/hubfs/8705%20chips%20ahoy/ca-chunky-logo.png",
  },
  {
    name: "Michael Foster",
    role: "Kraft",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Kraft_logo.svg/1200px-Kraft_logo.svg.png",
  },
  {
    name: "Michael Foster",
    role: "Mentos",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Mentos_logo.svg/2560px-Mentos_logo.svg.png",
  },
  {
    name: "Michael Foster",
    role: "GreenFields",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Greenfields_%28Indonesian_Dairy_Company%29_logo.svg/2560px-Greenfields_%28Indonesian_Dairy_Company%29_logo.svg.png",
  },
  {
    name: "Michael Foster",
    role: "Halls",
    imageUrl: "https://assets.stickpng.com/images/601593545cc23e000407ba24.png",
  },
  {
    name: "Michael Foster",
    role: "Kapal Api",
    imageUrl:
      "https://seeklogo.com/images/K/kapal-api-logo-BDA931D774-seeklogo.com.png",
  },
  {
    name: "Michael Foster",
    role: "Biore",
    imageUrl:
      "https://logos-download.com/wp-content/uploads/2016/05/Bior%C3%A9_logo_logotype.png",
  },
  {
    name: "Michael Foster",
    role: "Bayer",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Logo_Bayer.svg/2048px-Logo_Bayer.svg.png",
  },
  // More people...
];

export default function Client() {
  return (
    <div className="bg-gradient-to-r from-hitam via-hitam to-merah ">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-putih">
              Client
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <img
                    className="mx-auto h-20 w-20 lg:w-24 lg:h-24"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="space-y-2">
                    <div className="text-xs font-medium lg:text-sm">
                      {/* <h3>{person.name}</h3> */}
                      <p className="text-putih">{person.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
