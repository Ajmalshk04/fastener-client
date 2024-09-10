// const InjectionMolding = () => {
//   return <div>Injection Molding</div>;
// };
// export default InjectionMolding;

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function InjectionMoldingLandingPage() {
  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold">Injection Molding</h1>
        <Button className="mt-4">Get a Quote</Button>
      </section>

      {/* Introduction Section */}
      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Home Capabilities: Injection Molding</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Zetwerk offers fast, reliable, and cost-effective injection
              molding services. Injection molding is a production process that
              uses pressure to force molten plastic into molds to create useful
              parts. Injection molded components are mass produced in various
              plastic materials. The number of parts can vary from a few
              thousand to millions depending on the tool type. Injection molded
              parts are used in a wide variety of industries, including
              automotive, consumer goods, and medical devices.
            </p>
            <p className="mt-4">
              Injection molding can produce parts in a wide range of sizes and
              complexity. Small features, intricate geometries, and thin walls
              can be captured with ease using the injection molding process.
              Injection-molded components can be post-processed via various
              surface finishing options such as painting and texturing.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Custom Manufacturing Section */}
      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>
              Start Manufacturing Your Custom Injection-Molded Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We manufacture custom injection-molded parts for our customers for
              a variety of applications. The typical lead time for manufacturing
              production tools is three to four weeks, after which we will send
              you a set of FAIR samples for your feedback and approval. Once the
              initial tooling is approved, we will start manufacturing custom
              parts tailored to your project’s specifications.
            </p>
            <p className="mt-4">
              Submit the relevant part drawings, 3D files, and other information
              by clicking on the button below. We’ll make sure that it gets
              processed promptly, and that you receive a quote asap.
            </p>
            <Button className="mt-4">Get a Quote</Button>
          </CardContent>
        </Card>
      </section>

      {/* Capabilities Section */}
      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>
              Zetwerk’s Custom Injection Molding: Fast, Reliable, Cost-Effective
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Zetwerk ensures fast deliveries and short lead times for
              injection-molded parts and tooling. Zetwerk can work with a wide
              variety of resins, plastics, and composites depending on the
              application of the parts. We have a wide range of manufacturing
              presses, from low tonnage presses for molding small parts to
              machines up to 1,250 tons for the production of large parts.
              Zetwerk can also produce parts both in the single cavity and
              multi-cavity molds.
            </p>
            <p className="mt-4">
              We have manufactured components ranging in size, weight, and
              volume. Currently, we produce parts ranging from a few grams to a
              few kilograms.
            </p>
            <p className="mt-4">
              Zetwerk helps its customers with a wide range of secondary
              operations like bar code printing, pad printing, plastic welding,
              etc. The parts can be finished in a variety of surface finishes
              like matte or glossy depending on the application. We also provide
              packaging and assembly services for the injection-molded parts.
              This helps customers receive finished products which are ready to
              be dispatched.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Materials Section */}
      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Materials for Injection Molding</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Zetwerk can provide injection molding services in a wide range of
              materials. The material used depends on the application in which
              it will be used. Some of the most common injection molding
              materials are:
            </p>
            <ul className="list-disc pl-4 mt-2">
              <li>
                PP (Polypropylene): Durability, fatigue resistance, and
                elasticity.
              </li>
              <li>
                PMMA (Acrylic): Transparent, UV resistant, superior strength.
              </li>
              <li>
                PA (Polyamide/Nylon): Flexibility, durability, high-temperature
                resistance.
              </li>
              <li>ABS: Versatile, used in appliances and electronics.</li>
              <li>
                LDPE (Low-Density Polyethylene): Low-temperature flexibility,
                used in prosthetics.
              </li>
              <li>
                PC (Polycarbonate): Transparent, strong, high-impact resistance.
              </li>
              <li>
                Other materials: HDPE, PS, PBT, PBS, POM, PEI, LCP, PPS, and
                more.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Complex Molding & Tooling Capabilities Section */}
      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>
              Zetwerk’s Complex Molding & Tooling Capabilities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Zetwerk has a wide range of specialty tools and molding
              capabilities that can be used to build complex products,
              including:
            </p>
            <ul className="list-disc pl-4 mt-2">
              <li>
                Insert Molding: Incorporates metal parts like screws and bolts.
              </li>
              <li>
                Overmolding: Adds material over an existing molded component.
              </li>
              <li>2K Molding: Uses two different colors or materials.</li>
              <li>
                Multi-Cavity Molds: Up to 128 cavities for efficient production.
              </li>
              <li>
                Three-Plate Construction: Reduces cycle time and improves
                control.
              </li>
              <li>
                Hot Runner Molds: Efficient for recycled plastics with reduced
                cycle time.
              </li>
            </ul>
            <p className="mt-4">
              Other capabilities include collapsible core molds, angular side
              molds, multiple siders, and hydraulic and delay ejectors.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Zetwerk Manufacturing Difference Section */}
      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>The Zetwerk Manufacturing Difference</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Zetwerk provides a full suite of manufacturing services focused on
              reducing turnaround time and improving efficiency and value. We
              offer project management throughout the manufacturing process,
              tooling design optimization, and first-article inspection
              reporting.
            </p>
            <p className="mt-4">
              Our managed inventory ensures supply chain resiliency and JIT
              readiness, making us a reliable partner for all your manufacturing
              needs.
            </p>
            <Button className="mt-4">Get a Quote</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

export default InjectionMoldingLandingPage;
