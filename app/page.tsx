import FooterIdec from "@/components/footer-idec";
import HeaderIdec from "@/components/header-idec";
import Banner from "@/components/banner";
import CategoriesComponent from "@/components/categories";
import SustainabilityComponent from "@/components/sustainability";
import IdecForm from "@/components/form-idec";
export default function Home() {
  return (
    <>
      <HeaderIdec />
      <main className="mx-auto max-w-[1360px]">
        <div className="mb-12">
          <Banner />
        </div>
        <div className="mb-12">
          <CategoriesComponent />
        </div>
        <div className="mb-12">
          <SustainabilityComponent />
        </div>
        <div className="mb-12">
          <IdecForm />
        </div>
      </main>
      <FooterIdec />
    </>
  );
}
