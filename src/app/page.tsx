import Button from "@/components/Buttons";
import FeatureBlock from "@/components/FeatureBlock";
import FeatureCard from "@/components/FeatureCard";
import Heading from "@/components/Heading";
import PricingCard from "@/components/PricingCard";
import PricingSection from "@/components/PricingSection";
import TestimonialsCard from "@/components/TestimonialsCard";
import { clients } from "@/constants/clients";
import { features, featuresBlock } from "@/constants/features";
import { pricingItems } from "@/constants/pricing";
import { testimonials } from "@/constants/testimonials";
import { ArrowRightCircle, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-hidden pt-24 lg:pt-28 antialiased">
      <div className="relative container">
        <Image
          src={"/bg.png"}
          width={1920}
          height={1080}
          alt="bg"
          className="absolute -z-50  w-full min-h-screen md:max-h-[670px] md:h-full lg:min-h-screen  -top-20 left-0 opacity-10"
        />
        {/* Home Section */}
        <section id="home" className="relative">
          <figure className="bubble w-96 lg:w-[520px] h-96 bg-indigo-600 top-16 -left-40 " />
          <figure className="bubble w-96 lg:w-[430px] h-96 bg-sky-600 bottom-16 md:bottom-44 -right-20 md:right-20 " />

          <div className="flex flex-col text-center space-y-12">
            <div className="flex flex-col items-center space-y-6">
              <p
                className="capitalize border border-slate-700 
               py-1 px-3 text-xs rounded-3xl cursor-pointer hover:border-sky-500 hover:bg-slate-800 shadow-md transition-all"
              >
                Nea Features Is Now Available
                <ArrowRightCircle className="ml-1 w-4 h-4 inline" />
              </p>
              <Heading title="A CRM Dashboard for engineering teams" />
              <p className="max-w-[46rem] leading-normal sm:text-lg sm:leading-8">
                Boost engineering teams productivity with Ocean CRM dashboard
                that streamlines project management, colloboration, and
                data-driven decision making!
              </p>
              <div className="flex items-center gap-4">
                <Button>
                  Get Started <MoveRight className="w-4 h-4" />
                </Button>
                <Link href="#pricing">
                  <Button variant="outline">View Pricing</Button>
                </Link>
              </div>
            </div>
            <Image
              src="/Hero-image.svg"
              width={670}
              height={370}
              alt="Banner"
              className="mx-auto shadow-xl"
            />
          </div>
        </section>
        {/* End Home Section  */}

        {/* Start Client Section */}
        <section
          id="client"
          className="max-w-[62rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-4"
        >
          {clients.map((item, index) => (
            <Image
              key={index}
              src={item.imageUrl}
              alt={item.alt}
              width={120}
              height={80}
              className="w-20 md:w-full mx-auto"
            />
          ))}
        </section>
        {/* End Client Section */}

        {/* Start Features Section */}
        <section
          id="section"
          className="flex flex-col gap-y-12 md:gap-y-20 lg:gap-y-28"
        >
          {/* Part 1 */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <Image
              src="/bg2.png"
              width={1920}
              height={1080}
              alt=""
              className="absolute -z-50 w-full top-0 left-0 opacity-5"
            />
            <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start">
              <Heading title="Powerful features to help you manage all your leads." />
              <p className="lg:max-w-[34rem] leading-normal sm:text-lg ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit ipsam assumenda numquam officiis fugit. Itaque
                odio rem adipisci! Voluptatum, rerum?
              </p>
              <Button>Get Started</Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
              {features.map((item, index) => (
                <FeatureCard key={index} {...item} />
              ))}
            </div>
          </div>
          {/* Part 2 */}
          {featuresBlock.map((item, index) => (
            <FeatureBlock key={index} {...item} />
          ))}
        </section>
        {/* End Features Section */}
        {/* Start Pricing Section */}
        <PricingSection />
        {/* End Pricing Section */}
        {/* Start Testimonials */}
        <section id="testimonials" className="flex flex-col gap-8">
          <Heading title="Meet Our Customers" isCentered />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((item, index) => (
              <TestimonialsCard key={index} {...item} />
            ))}
          </div>
        </section>
        {/* End Testimonials */}
        {/* Start Contact Section */}
        <section id="contact" className="">
          <div className="bg-slate-800 rounded-lg px-8 lg:px-24 py-8 lg:py-12 flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-4 text-center lg:text-start ">
              <Heading title="Let's try our services now!" />
              <p className="max-w-[35rem] leading-normal text-lg ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur facere tenetur aliquid adipisci nobis nesciunt
                debitis, optio doloribus dolore eius.
              </p>
              <Button>
                Get Started <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </div>
    </div>
  );
}
