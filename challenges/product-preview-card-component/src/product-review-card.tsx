import mobile_image from "../images/image-product-mobile.jpg";
import desktop_image from "../images/image-product-desktop.jpg";
import cart_icon from "../images/icon-cart.svg";

import { useState, useEffect } from "react";

function useWindowWidth() {
  // Initialize state with undefined so server-side rendering (SSR) doesn't break
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}

export function ProductReviewCard() {
  const width = useWindowWidth();
  const mobile_width = 735;
  return (
    <div className="bg-white rounded-lg overflow-clip sm:flex  sm:justify-center sm:w-180 sm:aspect-4/3">
      {width < mobile_width ? (
        <img src={mobile_image} />
      ) : (
        <img src={desktop_image} />
      )}
      <div className={`bg-[url(../images/image-product-mobile.jpg)]`}></div>
      <section
        className="product__title py-3 px-6"
        aria-labelledby="product-title"
      >
        <p className="font-[Montserrat] tracking-widest text-gray-400 sm:text-[12px] text-[9px] uppercase sm:my-7 my-4">
          P e r f u m e
        </p>
        <h1
          id="product-title"
          className="font-bold font-[Fraunces] sm:text-[42px] text-3xl leading-none sm:my-7 my-4"
        >
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="font-light sm:text-lg text-sm text-gray-500 sm:my-7 my-4">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex items-center">
          <p className="text-green-500 font-bold font-[Fraunces] text-3xl mr-4">
            $149.99
          </p>{" "}
          <p className="text-sm text-gray-500 line-through">$169.99</p>
        </div>
        <button
          type="button"
          className="text-white text-center bg-green-500 hover:bg-green-700 hover:cursor-pointer font-bold text-sm py-4 px-auto rounded-lg my-5 w-full"
        >
          <div className="flex justify-center items-center">
            <img src={cart_icon} className="mx-3" />
            <span>Add to Cart</span>
          </div>
        </button>
      </section>
    </div>
  );
}
