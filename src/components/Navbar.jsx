export default function Navbar() {
  return (
    <>
     
      <div className="flex justify-around gap-8  text-1xl my-9 ">
        <p className=" ">
          <span className="text-2xl font-Poppins ">Tailwind </span>css
        </p>
        <div className="flex justify-around gap-12">
          <p>Features</p>
          <p>About</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className=" flex flex-row justify-between gap-2">
          <button className="bg-white px-[1rem] py-[0.5rem] rounded-[4px] text-[0.875rem] border-2 ">Log in</button>
          <button className="bg-black text-white px-[1rem] py-[0.5rem] rounded-[4px] text-[0.875rem]">Sign up</button>
        </div>
      </div>
    </>
  );
}
