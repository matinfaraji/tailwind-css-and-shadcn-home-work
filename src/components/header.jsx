export default function Header() {
  return (
    <div className="flex justify-around gap-2">
      <div className="flex flex-col  font-semibold  ml-[9rem]">
        <span className="text-4xl font-bold">Scalable Apps</span>
        <span className="text-4xl font-bold ">with frameworks</span>
        <span className="text-2xl mt-[4rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          voluptate et neque earum iste hic consequatur nulla deserunt
          architecto numquam!
        </span>
        <span>
            <button className="">Download for Free</button><button>Github Repo</button>
        </span>
      </div>
      <div className="w-full">
        <img src="./src/assets/hero-image.svg" alt="" className="w-[700]"/>
      </div>
    </div>
  );
}
