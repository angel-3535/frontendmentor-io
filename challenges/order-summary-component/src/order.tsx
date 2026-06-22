import illustration from "../images/illustration-hero.svg";
import music_icon from "../images/icon-music.svg";

export function Order() {
  return (
    <div className="rounded-2xl bg-white overflow-clip aspect-3/5 sm:w-120">
      <img src={illustration} alt="illustration" className="w-full" />
      <div className="bg-white p-8 text-center">
        <h1 className="my-4 sm:my-10 font-extrabold text-2xl sm:text-4xl">
          Order Summary
        </h1>

        <p className="text-black/50">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>

        <div className="flex items-center  bg-blue-100/50 p-3 rounded-2xl my-4">
          <img src={music_icon} alt="music_icon" className="mr-3" />
          <div className="flex flex-col">
            <p className="font-extrabold">Annual Plan</p>
            <p className="text-black/50">$59.99/year</p>
          </div>
          <a
            href="#"
            className="ml-auto text-blue-700 hover:cursor-pointer hover:underline"
          >
            Change
          </a>
        </div>
        <button
          className="
          w-full
          bg-blue-700 text-white py-4 px-auto my-5 rounded-2xl
          hover:cursor-pointer hover:bg-blue-700/80
          "
        >
          Proceed to Payment
        </button>
        <a
          href="#"
          className="text-black/50 hover:text-black hover:cursor-pointer"
        >
          Cancel Order
        </a>
      </div>
    </div>
  );
}
