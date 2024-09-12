import FooterIdec from "@/components/footer-idec";
import HeaderIdec from "@/components/header-idec";
import Banner from "@/components/banner";
import CategoriesComponent from "@/components/categories";
import SustainabilityComponent from "@/components/sustainability";
import IdecForm from "@/components/form-idec";
import News from "@/components/News";
import IdecCard from "@/components/Idec-Card";
import FeatureProducts from "@/components/feature-products";
export default function Home() {
  return (
    <>
      <HeaderIdec />
      <main className="mx-auto max-w-[1360px]">
        <div className="mb-12">
          <Banner />
        </div>
        <div className="mb-12">
          <FeatureProducts />
        </div>
        <div className="mb-12">
          <CategoriesComponent />
        </div>
        <div className="mb-12">
          <SustainabilityComponent />
        </div>
        <div className="mb-12">
          <News />
        </div>
        <div className="mb-12">
          <IdecCard />
        </div>
        <div className="mb-12">
          <IdecForm />
        </div>
      </main>
      <FooterIdec />
    </>
  );
}
