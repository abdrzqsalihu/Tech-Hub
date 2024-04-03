import { useEffect } from "react";
import KeenSlider from "keen-slider";
import { woman1, socials, curve1, man1, man2, woman2 } from "../assets";
import styles from "../style";

function Feedback() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm";
    script.async = true;

    const initializeSlider = () => {
      const keenSlider = new KeenSlider(
        "#feedback-keen-slider",
        {
          loop: true,
          slides: {
            origin: "center",
            perView: 1.2,
            spacing: 16,
          },
          breakpoints: {
            "(min-width: 1024px)": {
              slides: {
                origin: "auto",
                perView: 3.5,
                spacing: 32,
              },
            },
          },
        },
        []
      );

      const keenSliderPrevious = document.getElementById(
        "feedback-keen-slider-previous"
      );
      const keenSliderNext = document.getElementById(
        "feedback-keen-slider-next"
      );

      keenSliderPrevious.addEventListener("click", () => keenSlider.prev());
      keenSliderNext.addEventListener("click", () => keenSlider.next());
    };

    script.onload = initializeSlider;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section>
      <div>
        <div
          className={`${styles.flexCenter} flex justify-center items-center`}
        >
          <div className={`relative text-center text-[40px]`}>
            <h1
              className="text-[#1E1100] mt-10"
              style={{ fontFamily: "public sans", fontWeight: "700" }}
            >
              Our Best <span className="text-[#20B486]">Instructors</span>
              <div
                style={{ marginTop: "-7px" }}
                className="ml-[45%] md:ml-[55%]"
              >
                <img src={curve1} alt="" />
              </div>
            </h1>
          </div>
        </div>
        <div>
          <p
            className="text-[#1E1E1E] text-center mt-3 text-[20px]"
            style={{ fontFamily: "public sans" }}
          >
            Our instructors are highly qualified and experienced professionals
            in their respective <br className="hidden sm:block" /> fields. They
            possess industry expertise and a passion for teaching, ensuring that
            you <br className="hidden sm:block" /> receive relevant and
            practical knowledge throughout your studies.volved over the{" "}
            <br className="hidden sm:block" /> years, sometimes by accident.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
          <div id="feedback-keen-slider" className="keen-slider">
            <div className="keen-slider__slide">
              <div
                className="bg-[#ffffff] p-4"
                style={{ width: "312px", height: "388px" }}
              >
                <img src={woman1} alt="" />
                <div className="mx-auto">
                  <h1 className="text-black text-center mt-5 lg:text-xl text-base font-semibold">
                    Jacob Jones
                  </h1>
                  <p className="text-[#6D737A] text-center">
                    UI-UX Design Expert
                  </p>
                  <img src={socials} alt="" className="mx-auto mt-2" />
                </div>
              </div>
            </div>

            <div className="keen-slider__slide">
              <div
                className="bg-[#ffffff] p-4"
                style={{ width: "312px", height: "388px" }}
              >
                <img src={man1} alt="" />
                <div className="mx-auto">
                  <h1 className="text-black text-center mt-5 lg:text-xl text-base font-semibold">
                    Jacob Jones
                  </h1>
                  <p className="text-[#6D737A] text-center">Marketing Expart</p>
                  <img
                    src={socials}
                    alt=""
                    className="justify-center mx-auto mt-2"
                  />
                </div>
              </div>
            </div>

            <div className="keen-slider__slide">
              <div
                className="bg-[#ffffff] p-4"
                style={{ width: "312px", height: "388px" }}
              >
                <img src={man2} alt="" />
                <div className="mx-auto">
                  <h1 className="text-black text-center mt-5 lg:text-xl text-base font-semibold">
                    Jacob Jones
                  </h1>
                  <p className="text-[#6D737A] text-center">
                    Full-stack Expert
                  </p>
                  <img src={socials} alt="" className="mx-auto mt-2" />
                </div>
              </div>
            </div>

            <div className="keen-slider__slide">
              <div
                className="bg-[#ffffff] p-4"
                style={{ width: "312px", height: "388px" }}
              >
                <img src={woman2} alt="" />
                <div className="mx-auto">
                  <h1 className="text-black text-center mt-5 lg:text-xl text-base font-semibold">
                    Jacob Jones
                  </h1>
                  <p className="text-[#6D737A] text-center">
                    Photograpy Expert
                  </p>
                  <img src={socials} alt="" className="mx-auto mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt- flex gap-4 lg:mt-0 lg:justify-end justify-center">
          <button
            aria-label="Previous slide"
            id="feedback-keen-slider-previous"
            className="rounded-md p-3 text-black bg-[#FFFFFF] transition hover:bg-[#EEA10D] hover:text-white shadow-lg"
          >
            {/* Previous button content */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 rtl:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            id="feedback-keen-slider-next"
            className="rounded-md p-3 text-black bg-[#FFFFFF] transition hover:bg-[#EEA10D] hover:text-white shadow-xl"
          >
            {/* Next button content */}
            <svg
              className="size-5 rtl:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
