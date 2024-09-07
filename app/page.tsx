import FooterIdec from "@/components/footer-idec";
import HeaderIdec from "@/components/header-idec";
import Banner from "@/components/banner";
import CategoriesComponent from "@/components/categories";
export default function Home() {
  return (
    <>
      <HeaderIdec />
      <main className="mx-auto max-w-[1360px]">
        <div className="mb-10">
          <Banner />
        </div>
        <div className="mb-10">
          <CategoriesComponent />
        </div>
      </main>
      <FooterIdec />
    </>
  );
}
