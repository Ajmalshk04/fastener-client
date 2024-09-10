import Capabilities from "@/components/capabilities";
import { Button } from "@/components/ui/button";

const AllManufacturing = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="w-1/2 flex items-center justify-center">
          <h1 className="text-6xl font-bold leading-[57px] text-gray-700">
            ZETWERK'S <br /> MANUFACTURING <br />
            CAPABILITIES
          </h1>
        </div>
        <div className="w-1/2">
          <div>
            <img src="https://d1k7ad08k3erkk.cloudfront.net/wp-content/uploads/2022/10/capabilities-banner.jpg?x10543" />
          </div>
        </div>
      </div>
      <div>
        {" "}
        <Capabilities />
      </div>
      <div className="flex items-center justify-center lg:p-32 p-4 bg-blue-100 ">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold text-gray-700 mb-6">
            {" "}
            CAN LOGO MAKE IT?
          </h1>
          <p>
            If you don’t see the manufacturing capability you require listed
            above, please let us know. <br />
            Zetwerk has virtually unlimited manufacturing capacity and
            capabilities, and we
            <br /> will work with you to ensure you have the components you
            need.
          </p>
        </div>

        <Button size="lg">Get a Quote</Button>
      </div>
    </div>
  );
};
export default AllManufacturing;
