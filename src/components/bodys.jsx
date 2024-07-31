const cards = [
  {
    icon: "https://img.icons8.com/stickers/100/performance-2.png",
    title: "Performance Optimization",
    description:
      "Enhancing React apps by minimizing re-renders, lazy loading components, and utilizing memoization techniques for improved performance and speed.",
  },
  {
    icon: "https://img.icons8.com/nolan/64/request-service.png",
    title: "Redux State Management",
    description:
      "Efficiently manage complex application state using Redux Toolkit, providing simplified syntax and built-in best practices for developers.",
  },
  {
    icon: "https://img.icons8.com/color/48/design--v1.png",
    title: "Tailwind Responsive Design",
    description:
      "Create responsive web interfaces effortlessly using Tailwind CSS utility classes, ensuring a consistent experience across all device sizes.",
  },
  {
    icon: "https://img.icons8.com/3d-fluency/94/deployment.png",
    title: "Vite Production Deployment",
    description:
      "Streamline the deployment process of Vite-based projects to production environments with optimized build configurations and deployment strategies.",
  },
  {
    icon: "https://img.icons8.com/color/48/combine.png",
    title: "React Library Integration",
    description:
      "Seamlessly add functionality to React applications by integrating third-party libraries, ensuring smooth interactions and enhanced capabilities.",
  },
  {
    icon: "https://img.icons8.com/color/48/checked-identification-documents.png",
    title: "React App Authentication",
    description:
      "Secure React applications with robust authentication mechanisms, using libraries like Firebase, Auth0, or custom JWT-based solutions.",
  },
];

export default function BodyComponents() {
  return (
    <>
      <div>
        <div className="flex flex-col  mt-10  ml-[5rem] ">
          <span className="text-4xl font-bold ">
            Everything you need to start a website
          </span>
          <span className="text-1xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            consequuntur.
          </span>
        </div>
        {/* cards */}
        <div className="flex flex-wrap m-[5] gap-[0.2rem] justify-between p-[5rem] ">
          {cards.map((item, index) => (
            <div
              key={index}
              className="flex flex- p-2.5  border-gray-300 text-gray-800 rounded overflow-hidden m-2.5 w-[15rem]  transition-transform duration-200"
            >
              <section className="">
                <img src={item.icon} alt="Performance Icon" className="flex flex-col px-4 overflow-hidden mx-2.5 w-64 transition-transform duration-200"/>
              </section>
              <section>
                <span className="text-[20px] font-bold">
                  {item.title}
                </span>
                <p className="text-[0.875rem] mt-2">
                  {item.description}
                </p>
              </section>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
