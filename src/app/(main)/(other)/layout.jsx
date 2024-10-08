import Navbar from "@/components/Navbar";

export default function OtherLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
