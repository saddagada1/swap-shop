import type { NextPage } from "next";
import Head from "next/head";
import Testamonials from "~/components/testamonials";

const About: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>Swap Shop - About Us</title>
      </Head>
      <section className="section">
        <h1 className="section-title">About Us</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
          dolorum magnam totam quia maiores voluptates ex libero dicta deserunt
          at, nostrum reprehenderit, pariatur dolor alias inventore explicabo
          itaque! Voluptas, animi. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Dignissimos, quos laboriosam. Veniam, ad corporis
          possimus officia, repudiandae asperiores sapiente aspernatur expedita,
          laudantium earum placeat necessitatibus! Animi consequatur excepturi
          aut. Illo! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nam doloremque quisquam reprehenderit quo animi! Impedit sint rerum
          iste nemo unde harum provident? Blanditiis sapiente id rerum molestias
          temporibus veritatis magni. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ad, corporis ratione ducimus recusandae impedit
          numquam molestiae totam accusantium maxime incidunt pariatur
          laudantium, iste magnam officiis vel dolore nesciunt quod corrupti.
        </p>
      </section>
      <section className="section">
        <Testamonials />
      </section>
    </>
  );
};
export default About;
