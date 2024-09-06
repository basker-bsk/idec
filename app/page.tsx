import FooterIdec from "@/components/footer-idec";
import HeaderIdec from "@/components/header-idec";
import Banner from "@/components/banner";
export default function Home() {
  return (
    <>
      <HeaderIdec />
      <main className="mx-auto max-w-[1360px]">
        <Banner />
        <h1 className="text-center mb-10">Home page components goes here</h1>
      </main>
      <FooterIdec />
    </>
  );
}
