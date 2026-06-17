import nft_image from "../images/image-equilibrium.jpg";
import eth_icon from "../images/icon-ethereum.svg";
import clock_icon from "../images/icon-clock.svg";
import avatar_icon from "../images/image-avatar.png";
import eye_icon from "../images/icon-view.svg";

export function Nft() {
  return (
    <div className="bg-blue-900 p-6 rounded-xl aspect-2/3 sm:w-90">
      <div className="group relative">
        <img
          src={nft_image}
          alt="Equilibrium #3429"
          className="m-auto mb-4 rounded-xl md:w-80"
        />
        <div
          className="
          absolute inset-3 flex items-center justify-center rounded-lg bg-cyan-400/50 opacity-0 group-hover:opacity-100"
        >
          <img src={eye_icon} alt="View" className="w-auto" />
        </div>
      </div>
      <p className="text-xl font-medium hover:text-cyan-400 hover:cursor-pointer">
        Equilibrium #3429
      </p>
      <p className="text-blue-500 font-light my-4 text-sm">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="flex justify-between my-4">
        <div className="flex ">
          <img src={eth_icon} alt="ETH" className="w-auto" />
          <p className="text-cyan-400 text-sm mx-2 text-nowrap">0.041 ETH</p>
        </div>
        <div className="flex">
          <img src={clock_icon} alt="Clock" className="w-auto" />
          <p className="text-blue-500 text-sm mx-2 text-nowrap">3 days left</p>
        </div>
      </div>
      <div className="w-full border-b-1 border-blue-800 my-4"></div>
      <div className="flex items-center">
        <div className="border-white border-1 rounded-full mr-5">
          <img
            src={avatar_icon}
            alt="Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
        <p className="text-sm text-blue-500">
          Creation of{" "}
          <a className="text-white hover:text-cyan-400 hover:cursor-pointer">
            Jules Wyvern
          </a>
        </p>
      </div>
    </div>
  );
}
