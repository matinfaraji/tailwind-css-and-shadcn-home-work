export default function BodyComponents() {
  return (
    <>
      <div>
        <div className="flex flex-col    ml-[5rem] ">
          <span className="text-4xl font-bold ">
            Everything you need to start a website
          </span>
          <span className="text-1xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            consequuntur.
          </span>
        </div>
        {/* cards */}
        <div className="flex justify-between">
          <div className="flex mt-20 p-4 border rounded-lg shadow-lg w-[18rem]">
            <section className="mr-4">
              <img
                src="https://img.icons8.com/stickers/100/performance-2.png"
                alt="Performance Icon"
              />
            </section>
            <section>
              <span className="text-2xl font-bold">
                Performance Optimization
              </span>
              <p className="mt-2">
                Enhancing React apps by minimizing re-renders, lazy loading
                components, and utilizing memoization techniques for improved
                performance and speed.
              </p>
            </section>
          </div>
          <div className="flex mt-20 p-4 border rounded-lg shadow-lg w-[18rem]">
            <section className="mr-4">
              <img
                src="https://img.icons8.com/nolan/64/request-service.png"
                alt="Performance Icon"
              />
            </section>
            <section>
              <span className="text-2xl font-bold">Redux State Management</span>
              <p className="mt-2">
                Efficiently manage complex application state using Redux
                Toolkit, providing simplified syntax and built-in best practices
                for developers.
              </p>
            </section>
          </div>
          <div className="flex mt-20 p-4 border rounded-lg shadow-lg w-[18rem]">
            <section className="mr-4">
              <img
                src="https://img.icons8.com/color/48/design--v1.png"
                alt="Performance Icon"
              />
            </section>
            <section>
              <span className="text-2xl font-bold">
                Tailwind Responsive Design
              </span>
              <p className="mt-2">
                Create responsive web interfaces effortlessly using Tailwind CSS
                utility classes, ensuring a consistent experience across all
                device sizes.
              </p>
            </section>
          </div>
        </div>
          <div className="flex mt-20 p-4 border rounded-lg shadow-lg w-[18rem]">
            <section className="mr-4">
              <img
                src="https://img.icons8.com/color/48/design--v1.png"
                alt="Performance Icon"
              />
            </section>
            <section>
              <span className="text-2xl font-bold">
                Tailwind Responsive Design
              </span>
              <p className="mt-2">
                Create responsive web interfaces effortlessly using Tailwind CSS
                utility classes, ensuring a consistent experience across all
                device sizes.
              </p>
            </section>
          </div>
      </div>
    </>
  );
}
