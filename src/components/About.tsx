import { useIsMobile } from "../hooks/use-mobile";

const About = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return null;
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-4xl font-bold text-center mb-12">About</h2> */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg leading-relaxed mb-8">
            Rave Bae Eats is a one of a kind one stop for all things food! From meal prep, to customized menus tailored to your pallet, Rave Bae Eats offers one of a kind experiences through food and connection to others with events that you and your friends will be talking about for years to come!
          </p>
          <p className="text-lg leading-relaxed">
            Rave Bae Eats offers meal prep delivery service, private chef work for events, and catering events big or small. Everything is nutritious and delicious, order today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;