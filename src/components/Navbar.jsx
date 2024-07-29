export default function Navbar() {
  return (
    <>
     
      <div className="flex justify-around gap-8 font-semibold text-2xl my-9 ">
        <p className="font-semibold ">
          <span className="text-2xl font-serif font-semibold">Tailwind </span>css
        </p>
        <div className="flex justify-around gap-12">
          <p>Features</p>
          <p>About</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="">
          <button>Log in</button>
          <button>Sign up</button>
        </div>
      </div>
    </>
  );
}
