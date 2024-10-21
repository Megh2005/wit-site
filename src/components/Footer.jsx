import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-gray-800 text-white text-center text-sm px-4 py-2 capitalize h-[4vh] w-[100vw] flex items-center justify-center">
      <p>
        Made with 💗 by{" "}
        <Link
          target="_blank"
          className="underline underline-offset-4"
          href={"https://github.com/Megh2005"}
        >
          Megh Deb
        </Link>{" "}
        and{" "}
        <Link
          target="_blank"
          className="underline underline-offset-4"
          href={"https://github.com/iSubhamMani"}
        >
          Subham Mani
        </Link>{" "}
      </p>
    </div>
  );
};
