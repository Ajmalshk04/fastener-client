import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SheetMetalStamping = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Sheet Metal Stamping Services
        </h1>
        <p className="text-lg mb-6">
          Zetwerk offers custom precision sheet metal stampings with a range of
          processes and materials to meet your specific needs. Request a quote
          today and experience the difference.
        </p>
        <Button>Get a Quote</Button>
      </section>

      {/* Capabilities Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Our Capabilities</h2>
        <Card>
          <CardHeader>
            <CardTitle>Sheet Metal Stamping</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Zetwerk provides custom precision sheet metal stampings from
              coiled or blanked sheet metal. We can produce parts in short runs
              or high volumes using various processes such as bending, cutting,
              and welding.
            </p>
            <ul className="list-disc list-inside mt-4">
              <li>Blanking</li>
              <li>Bending</li>
              <li>Embossing</li>
              <li>Punching</li>
              <li>Drawing</li>
              <li>Forming</li>
              <li>Piercing</li>
              <li>Laser Cutting</li>
              <li>Welding</li>
              <li>Secondary Machining</li>
              <li>Fabrication</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Material and Finishing Services Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">
          Materials & Finishing Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Supported Materials</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Zetwerk supports a variety of materials for sheet metal
                stampings, including:
              </p>
              <ul className="list-disc list-inside mt-4">
                <li>Aluminum Alloys</li>
                <li>Steel Alloys</li>
                <li>Stainless Steel Alloys</li>
                <li>Brass</li>
                <li>Copper Alloys</li>
                <li>Galvanized Steel</li>
                <li>… and many more</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Secondary Finishing Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We offer a range of finishing services to enhance your
                components:
              </p>
              <ul className="list-disc list-inside mt-4">
                <li>Heat Treating</li>
                <li>Chrome Plating</li>
                <li>Passivation</li>
                <li>Powder Coating</li>
                <li>Anodizing</li>
                <li>Zinc Plating</li>
                <li>Cadmium Plating</li>
                <li>Tin Plating</li>
                <li>Black Oxide</li>
                <li>Gold and Silver Plating</li>
                <li>Annealing</li>
                <li>… and many more</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Industries Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Industries & Applications</h2>
        <p className="mb-4">
          Our sheet metal stampings are used across various industries,
          including:
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>Electronics</li>
          <li>Automotive</li>
          <li>Lighting</li>
          <li>Marine</li>
          <li>Medical</li>
          <li>Construction</li>
          <li>Electrical</li>
          <li>Aerospace</li>
          <li>… and many more</li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="mb-6">
          Zetwerk is your one-stop solution for complete end-to-end contract
          manufacturing and distribution. Request a quote today and see how we
          can bring your project to life.
        </p>
        <Button>Get a Quote</Button>
      </section>
    </div>
  );
};
export default SheetMetalStamping;
