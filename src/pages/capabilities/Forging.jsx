import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function ForgingLandingPage() {
  return (
    <div className="container mx-auto p-6">
      <section className="mb-8">
        <h1 className="text-3xl font-bold">Forging Services</h1>
        <p className="text-lg mt-4">
          The forging manufacturing process utilizes metal that is hammered,
          pressed, or rolled under intense, localized pressure. The parts are
          shaped into high-strength components known as forgings.
        </p>
        <p className="text-lg mt-2">
          Forged parts are stronger than the parts manufactured through other
          processes and are often used in applications where strength,
          reliability, and safety are critical.
        </p>
      </section>

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Zetwerk’s Forging Capabilities</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Zetwerk has extensive experience in forging high-quality, highly
              specialized rings for wind turbine towers and other industrial
              applications.
            </p>
            <p className="mt-4">
              Our commitment to precision and customer satisfaction allows us to
              deliver high-quality, well-priced products on schedule. Once
              forged, components can be post-processed by precision CNC
              machining and surface finishing.
            </p>
            <Button className="mt-4">Get a Quote</Button>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Forging Process</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Zetwerk performs open-die forging between flat dies with no
              pre-cut profiles in the dies. This method involves moving the
              workpiece to shape it. We can forge large parts weighing over 150
              tons and up to 25 meters in length.
            </p>
            <p className="mt-4">
              Open-die forgings impart similar grain flow orientation,
              deformation, and other beneficial characteristics when compared to
              closed-die forgings.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Industries & Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Zetwerk provides forging components for various industries,
              including:
            </p>
            <ul className="list-disc pl-4 mt-2">
              <li>Aircraft & Aerospace</li>
              <li>Oil & Gas</li>
              <li>Construction & Infrastructure</li>
              <li>Mining</li>
              <li>Vehicle Manufacturing</li>
              <li>Power Generation</li>
              <li>… and many more</li>
            </ul>
            <p className="mt-4">
              Applications include Ring Gear Blanks, Flanges, Manway Rings &
              Flanges, Tires, Bearings, Tank Rings, and many more.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>The Zetwerk Manufacturing Difference</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Zetwerk provides a full suite of services focused on reducing
              turnaround time and improving efficiency and value. We offer:
            </p>
            <ul className="list-disc pl-4 mt-2">
              <li>Unlimited manufacturing capacity</li>
              <li>Global raw material sourcing</li>
              <li>
                Secondary processing, including anodizing, powder coating, and
                CNC machining
              </li>
              <li>Assembly, packaging, and distribution</li>
              <li>Quality control – AS 9100D & ISO 9001:2015 certified</li>
            </ul>
            <Button className="mt-4">Request a Quote</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

export default ForgingLandingPage;
