import NavBar from "./NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 pb-20">
      <div className="flex-grow w-full">{children}</div>
      <NavBar />
    </div>
  );
}
