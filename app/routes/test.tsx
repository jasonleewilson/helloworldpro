import type { MetaFunction } from "@remix-run/cloudflare";
import BackToTop from "~/components/BackToTop";
// import { Link } from "@remix-run/react";
// import Desktop1 from "~/components/desktop1";
import Desktop2 from "~/components/Desktop2";
// import MyModal from "~/components/MyModal";

export const meta: MetaFunction = () => {
  return [
    { title: "HelloWorldPro - Test" },
    {
      name: "description",
      content:
        "Welcome to HelloWorldPro! - Test - Building website line x line",
    },
  ];
};

export default function Test() {
  return (
    <main className='grow'>
      {/* <h1>test page...</h1> */}
      {/* <Desktop1 /> */}
      <Desktop2 />
      <Desktop2 />
      <Desktop2 />
      <Desktop2 />
      <Desktop2 />
      <BackToTop />
    </main>
  );
}
