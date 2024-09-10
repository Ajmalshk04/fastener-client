import { Button } from "@/components/ui/button";

const CNCMachining = () => {
  return (
    <div className="space-y-12 p-6">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-4">
          CNC Machining Capabilities
        </h1>
        <p className="text-lg leading-relaxed">
          Zetwerk’s CNC machining factory is fully equipped with
          state-of-the-art equipment and in-house engineering services. We
          employ experienced, professional staff to ensure consistent compliance
          with your engineering specifications. Zetwerk provides high-quality,
          tight-tolerance components machined from bar stock. Zetwerk also
          finishes as-cast and as-forged components. Additionally, we perform
          all necessary secondary operations on finished / semi-finished parts
          such as heat treatment, surface treatment etc.
        </p>
      </div>

      <section className="text-center">
        <h2 className="text-xl font-semibold mb-4">
          Start Manufacturing Your Precision Machined Components
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Zetwerk provides high-quality, tight-tolerance components machined
          from bar stock. Submit the relevant part drawings, 3D files, and other
          information by clicking on the button below.
        </p>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          Get a Quote
        </Button>
      </section>

      <section className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">
            Zetwerk Precision CNC Machining Services
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Zetwerk’s machining facilities are fully equipped with
            state-of-the-art equipment and employ experienced, professional
            staff to ensure consistent compliance with your engineering
            specifications. Zetwerk provides high-quality, tight-tolerance
            components machined from bar stock. Zetwerk also finishes as-cast
            and as-forged components. Additionally, we perform all necessary
            secondary operations on finished/semi-finished parts such as heat
            treatment, surface treatment etc.
          </p>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            Get a Quote
          </Button>
        </div>
        <div className="md:w-1/2">
          <figure className="relative">
            <img
              className="w-full h-auto rounded-lg shadow-md"
              src="https://d1k7ad08k3erkk.cloudfront.net/wp-content/uploads/2022/06/shutterstock_1492588679-1024x678.jpg?x10543"
              alt="Zetwerk CNC Machining"
            />
            <figcaption className="absolute bottom-4 left-4 bg-gray-800 text-white text-sm p-2 rounded-lg">
              Zetwerk is ISO 9001:2015 and AS9100D certified. Our machine shops
              are IATF 16949:2016, ISO 13485:2016 and AS9100 certified.
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="flex ">
        <div className="left">
          {" "}
          <img src="https://d1k7ad08k3erkk.cloudfront.net/wp-content/uploads/2022/06/lathe.jpg?x10543" />
        </div>
        <div className="right">
          <div>
            <h3>Zetwerk has a diverse range of CNC Machining Capabilities</h3>
            <ul>
              <li>
                <strong>CNC Milling Services:</strong> 3 Axis, 4 Axis & 5 Axis,
                Double Column Vertical Machining Center, Multi Spindle Vertical
                Machining Center, Horizontal Machining Center
              </li>
              <li>
                <strong>CNC Turning Services:</strong> Turn Mill Centres,
                Mill-Turn Centres, Turning Centres, Profile Grinding
              </li>
              <li>
                <strong>Finishing Services on Machined Parts:</strong>{" "}
                Cylindrical, Surface & Profile Grinding, Honing, and Lapping
              </li>
              <li>
                <strong>Other Miscellaneous Services:</strong> EDM, Thread
                Rolling, Gear Hobbing, Shaping, Broaching, Spline Cutting, Gun
                Drilling, etc.
              </li>
              <li>
                <strong>Inspection Facilities:</strong> Zetwerk provides
                inspection services including Scanning, CMM, VMS, Gauging,
                Shadowgraph, NDT, Contour Profiling
              </li>
              <li>
                <strong>3D Modeling & CAM Programming Capabilities:</strong>{" "}
                MasterCam, HyperMill, UG NX, and SolidWorks
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2>
            SECONDARY OPERATIONS, MATERIALS & SURFACE FINISHES FOR CNC MACHINED
            COMPONENTS
          </h2>
          <div className="grid grid-col-2 ">
            <div>
              <h4>SECONDARY OPERATIONS & FINISHING PROCESSES</h4>
              <p>
                Once production components are CNC machined, they are subjected
                to one or more finishing processes to remove any deformities and
                achieve tolerances.
              </p>
              <p>
                Some of the secondary operations and finishing processes
                offered:
              </p>
              <ul>
                <li>
                  <strong>Surface Finishing</strong>: Phosphating, blasting,
                  Anodising, Zn & Zn-Ni Plating, Passivation, Alodine, Abrasive
                  blasting, Cd, etc.
                </li>
                <li>
                  <strong>Heat Treatment</strong>: Nitriding, Stress relieving
                  by using hardening, Nitriding, and Carburising
                </li>
                <li>
                  <strong>Assembly & Integration Services</strong>
                </li>
                <li>… and many more</li>
              </ul>
            </div>
            <div>
              <h4>
                ZETWERK SUPPORTS MULTIPLE PRECISION CNC MACHINING MATERIALS
              </h4>
              <p>
                Zetwerk can manufacture parts using CNC machining in a variety
                of materials.
              </p>
              <p>Some of the materials that we can support are:</p>
              <ul>
                <li>Aluminum</li>
                <li>Copper</li>
                <li>Acrylic</li>
                <li>Delrin</li>
                <li>Nylon</li>
                <li>Polycarbonate</li>
                <li>PTFE (Teflon)</li>
                <li>Stainless Steel</li>
                <li>… and many more</li>
              </ul>
            </div>
          </div>

          <div>No results were found, please try again.</div>
          <p>
            Zetwerk has global quality expertise in FMEA, APQP, PPAP, SPC, and
            MSA and is AS 9100D & ISO 9001:2015 certified.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CNCMachining;
