import type { MetaFunction } from "@remix-run/cloudflare";
// import { Outlet } from "@remix-run/react";
// import hero from "../assets/images/her-opt.jpg";
// import ContactForm from "../components/Contact";
// import Header from "~/components/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "HelloWorldPro - Building website line x line" },
    {
      name: "description",
      content: "Welcome to HelloWorldPro! - Building website line x line",
    },
  ];
};

export default function Index() {
  return (
    <>
      <main className='grow'>
        <h1>homepage dude.</h1>
      </main>
    </>
  );
}
