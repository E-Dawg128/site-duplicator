import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import SeafoodBoil from "@/components/SeafoodBoil";
import MenuSection from "@/components/MenuSection";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Rave Bae Eats — Delicious & Nutritious" },
      {
        name: "description",
        content:
          "Gourmet meal prep, private chef, and catering services. Fresh, never frozen, customized to your palate.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <About />
      <Services />
      <MenuSection />
      <SeafoodBoil />
      <Contact />
    </div>
  );
}
