import Transition from "react-transition-group/cjs/Transition";
import { useRef, useEffect, useState } from "react";

const duration = 1000;

const transitionStyles = {
  entering: "opacity-100",
  entered: "opacity-100",
  exiting: "opacity-0",
  exited: "opacity-0",
};

export default function Projects() {
  const nodeRef = useRef(null);
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <>
      <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
        {(state) => (
          <div
            ref={nodeRef}
            className={`transition-opacity duration-1000 ease-in-out ${transitionStyles[state]}`}
          >
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 py-4">
              <div class="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">
                    Shoes!
                    <div class="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <div class="badge badge-outline">Fashion</div>
                    <div class="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
              <div class="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">
                    Shoes!
                    <div class="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <div class="badge badge-outline">Fashion</div>
                    <div class="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
              <div class="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">
                    Shoes!
                    <div class="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <div class="badge badge-outline">Fashion</div>
                    <div class="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
}
