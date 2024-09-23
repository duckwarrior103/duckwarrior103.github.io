import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
      <button class="btn w-64 rounded-full">Button</button>
    
    <div class="dropdown">
        <div tabindex="0" role="button" class="btn m-1">Click</div>
        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
    </div>

    <div class="collapse bg-base-200">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">My Projects</div>
        <div class="collapse-content">
            <div class="grid grid-cols-4 gap-10">
                <div class="card bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
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
                        alt="Shoes" />
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
                        alt="Shoes" />
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
                        alt="Shoes" />
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
    </div>    

    <div class="divider divider-primary px-4"></div>

    <div class="container mx-auto py-8 px-4">
        <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <div class="timeline-start mb-10 md:text-end">
                <time class="font-mono italic">1984</time>
                <div class="text-lg font-black">First Macintosh computer</div>
                <figure>
                    <img
                      src="https://images.csmonitor.com/csm/2014/01/applemac.jpg?alias=standard_900x600nc"
                      alt="Macintosh" 
                      class="h-128 w-128 py-4 px-4"/>
                  </figure>
                The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
                personal computer. It played a pivotal role in establishing desktop publishing as a general
                office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed
                in a beige case with integrated carrying handle; it came with a keyboard and single-button
                mouse.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <div class="timeline-end mb-10">
                <time class="font-mono italic">1998</time>
                <div class="text-lg font-black">iMac</div>
                iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
                been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
                and has evolved through seven distinct forms
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <div class="timeline-start mb-10 md:text-end">
                <time class="font-mono italic">2001</time>
                <div class="text-lg font-black">iPod</div>
                The iPod is a discontinued series of portable media players and multi-purpose mobile devices
                designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
                8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
                million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
                over 20 years, the iPod brand is the oldest to be discontinued by Apple
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <div class="timeline-end mb-10">
                <time class="font-mono italic">2007</time>
                <div class="text-lg font-black">iPhone</div>
                iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile
                operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on
                January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As
                of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone
                accounts for 15.6% of global smartphone market share
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <div class="timeline-start mb-10 md:text-end">
                <time class="font-mono italic">2015</time>
                <div class="text-lg font-black">Apple Watch</div>
                The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
                tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
                iOS and other Apple products and services
              </div>
            </li>
        </ul>
    </div>
    </>
  )
}

export default App
