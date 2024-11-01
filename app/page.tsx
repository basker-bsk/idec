import FooterIdec from "@/components/footer-idec";
import HeaderIdec from "@/components/header-idec";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import CategoriesComponent from "@/components/categories/page";
import SustainabilityComponent from "@/components/sustainability";
import IdecForm from "@/components/form-idec";
import News from "@/components/News";
import IdecCard from "@/components/Idec-Card";
import FeaturedProducts from "@/components/featured-products/feature-products";
import PopularCategories from "@/components/PopularCaregories";
import homecontent from "@/public/assets/data/home.json";
import USP from "@/components/USPComponent";
import LoginBanner from "@/components/LoginBanner";
import ProductFinderBanner from "@/components/ProductFinderBanner";
import TextImageComponent from "@/components/TextImageComponent";
import ResourceAndDocuments from "@/components/ResourceAndDocuments";
import HelpComponent from "@/components/HelpComponent";
import Carousel from "@/components/Carousel/Carousel";

export default function Home() {
  let cms_home =
    homecontent.landingPageIdecCollection?.items[0].lpComponentsCollection
      .items;

  return (
    <>
      {cms_home.map((content, index) => (
        <>
          {content.__typename === "Carousel" &&
            content.crStyle === "Banner" && (
              <div className="xl:min-h-[500px]">
                <HeroBanner banner={content.crComponentsCollection?.items} />
              </div>
            )}
          {content.__typename === "Counters" && (
            <div className=" mb-8 md:mb-12">
              <USP usp={content} />
            </div>
          )}
          {content.__typename === "Columns" && (
            <div className=" mb-8 md:mb-12">
              <PopularCategories categories={content} />
            </div>
          )}
          {content.__typename === "CallToAction" && (
            <div className=" mb-8 md:mb-12">
              <LoginBanner data={content} />
            </div>
          )}
          {content.__typename === "ListOfLinks" && (
            <div className=" mb-8 md:mb-12">
              <ResourceAndDocuments rd={content} />
            </div>
          )}
          {content.__typename === "TextImage" && (
            <div className=" mb-8 md:mb-12">
              <TextImageComponent data={content} />
            </div>
          )}
          {content.__typename === "Carousel" &&
            content.crStyle === "Series card" && (
              <div className="card-slider mb-8 md:mb-12">
                <Carousel series={content} />
              </div>
            )}
        </>
      ))}
      <div className=" mb-8 md:mb-12">
        <ProductFinderBanner />
      </div>
      <div className=" mb-8 md:mb-12">
        <TextImageComponent />
      </div>
      <div className="">
        <HelpComponent />
      </div>
      {/* 
      <div className=" mb-8 md:mb-12">
        <PopularCategories />
      </div>
      
      <div className=" mb-8 md:mb-12">
        <ResourceAndDocuments />
      </div>
      <div className=" mb-8 md:mb-12">
        <TextImageComponent />
      </div>
      */}

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
