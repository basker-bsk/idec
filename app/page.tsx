import FooterIdec from "@/components/footer-idec";
import HeaderIdec from "@/components/header-idec";
import Banner from "@/components/banner";
import CategoriesComponent from "@/components/categories/page";
import SustainabilityComponent from "@/components/sustainability";
import IdecForm from "@/components/form-idec";
import News from "@/components/News";
import IdecCard from "@/components/Idec-Card";
import FeaturedProducts from "@/components/featured-products/feature-products";
import PopularCategories from "@/components/PopularCaregories";
import content from "@/public/assets/data/home.json";
import USP from "@/components/USPComponent";
import LoginBanner from "@/components/LoginBanner";
import ProductFinderBanner from "@/components/ProductFinderBanner";
import TextImageComponent from "@/components/TextImageComponent";
import ResourceAndDocuments from "@/components/ResourceAndDocuments";
export default function Home() {
  const response =
    content.landingPageIdecCollection?.items[0]?.lpComponentsCollection
      ?.items[0];
  return (
    <>
      <div className=" min-h-[500px]">
        <Banner />
      </div>
      <div className=" mb-8 md:mb-12">
        <USP />
      </div>
      <div className=" mb-8 md:mb-12">
        <PopularCategories />
      </div>
      <div className=" mb-8 md:mb-12">
        <LoginBanner />
      </div>
      <div className="">
        <ProductFinderBanner />
      </div>
      <div className=" mb-8 md:mb-12">
        <ResourceAndDocuments />
      </div>
      <div className=" mb-8 md:mb-12">
        <TextImageComponent />
      </div>

      {/* <div className="mb-12">
        <CategoriesComponent />
      </div>
      <div className="mb-12">
        <FeaturedProducts />
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
      </div> */}
    </>
  );
}
