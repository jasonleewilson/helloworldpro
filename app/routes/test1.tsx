import type { MetaFunction } from "@remix-run/cloudflare";
// import { Link } from "@remix-run/react";
// import { Button } from "~/components/ui/button";

// import Footer from "~/components/Footer";
// import Hero from "~/components/Hero";
import Lockup from "~/components/Lockup";
// import image1 from "../assets/images/nails-1.jpg";
import image2 from "~/assets/images/vegetables.jpg";
// import image1 from "../assets/images/healthy-food.jpg";

export const meta: MetaFunction = () => {
  return [
    { title: "HelloWorldPro - Test1" },
    {
      name: "description",
      content:
        "Welcome to HelloWorldPro! - Test - Building website line x line",
    },
  ];
};

export default function Test1() {
  return (
    <main className='font-serif text-black'>
      <Lockup
        heading='Section 1'
        paragraph='Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
        cta_link='/about'
        cta_text='about'
        image={image2}
        order=''
      />
      <Lockup
        heading='Section 2'
        paragraph='Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
        cta_link='/about'
        cta_text='about'
        image={image2}
        order='lg:order-first'
      />
    </main>
  );
}
