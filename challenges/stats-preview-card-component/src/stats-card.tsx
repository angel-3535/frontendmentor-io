import image from "../images/image-header-mobile.jpg";

export function StatsCard() {
  return (
    <div className="bg-blue-950 rounded-md overflow-clip w-64 sm:grid sm:grid-cols-2 sm:gap-4 sm:w-250">
      <img src={image} alt="header" className="w-full" />
      <div className="p-4 sm:p-7 px-7 text-center flex-1">
        <h1 className="text-xl/5 sm:text-4xl sm:text-left font-lexend my-4">
          Get <strong className="text-purple-500">insights</strong> that help
          your business grow.
        </h1>
        <p className="text-xs sm:text-base sm:text-left text-white/60 my-4">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>

        <div className="flex sm:flex-row sm:justify-items-start flex-col justify-around my-4">
          <div className="flex-col stat">
            <div className="stat__value">10k+</div>{" "}
            <div className="stat__title">companies</div>
          </div>
          <div className="flex-col stat">
            <div className="stat__value">314</div>{" "}
            <div className="stat__title">templates</div>
          </div>
          <div className="flex-col stat">
            <div className="stat__value">12m+</div>{" "}
            <div className="stat__title">queries</div>
          </div>
        </div>
      </div>
    </div>
  );
}
