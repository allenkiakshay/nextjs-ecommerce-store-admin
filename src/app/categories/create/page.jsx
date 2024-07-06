import CategoryCreate from "@/components/Categories/CreateCategory";
import Fotter from "@/components/HomePage/Fotter";
import Navbar from "@/components/HomePage/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <CategoryCreate />
      <Fotter />
    </>
  );
}
