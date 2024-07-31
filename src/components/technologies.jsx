const pic = [
  {
    src: "../src/assets/images/js.png",
  },
  {
    src: "../src/assets/images/nextjs.png",
  },
  {
    src: "../src/assets/images/react.png",
  },
  {
    src: "../src/assets/images/redux.png",
  },
  {
    src: "../src/assets/images/tailwind.png",
  },
  {
    src: "../src/assets/images/ts.png",
  },
];
export default function Technologies() {
  return (
    <div>
      <section className="text-center">Works with your technologies</section>
      <section className="flex  flex-row items-center justify-center gap-[5%] py-10">
        {pic.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt=""
            className="hover:transform hover:scale-110 hover:scale-150 duration-200"
          />
        ))}
      </section>
    </div>
  );
}
