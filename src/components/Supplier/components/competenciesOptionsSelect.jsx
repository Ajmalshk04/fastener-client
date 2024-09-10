// import { useState } from "react";
// import { competenciesOptions } from "../data/MyCompetencies";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { ScrollArea } from "@/components/ui/scroll-area";

// const CompetenciesOptionsSelect = () => {
//   return (
//     <Accordion type="multiple" className="w-full space-y-2">
//       {Object.keys(competenciesOptions).map((category) => (
//         <AccordionItem key={category} value={category}>
//           <AccordionTrigger className="text-lg font-semibold">
//             {category.charAt(0).toUpperCase() + category.slice(1)}
//           </AccordionTrigger>
//           <AccordionContent>
//             <ScrollArea className="max-h-52">
//               <div className="space-y-2 mt-2 grid grid-cols-3 gap-2">
//                 {competenciesOptions[category].map((option) => (
//                   <div key={option.value} className="flex items-center">
//                     <input
//                       type="checkbox"
//                       id={`${category}-${option.value}`}
//                       value={option.value}
//                       className="mr-2 "
//                     />
//                     <label
//                       htmlFor={`${category}-${option.value}`}
//                       className="text-sm text-gray-500 cursor-pointer"
//                     >
//                       {option.label}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </ScrollArea>
//           </AccordionContent>
//         </AccordionItem>
//       ))}
//     </Accordion>
//   );
// };

// export default CompetenciesOptionsSelect;
//===========================================================
import { useState } from "react";
import { competenciesOptions } from "../data/MyCompetencies";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";

const CompetenciesOptionsSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleCheckboxChange = (category, value) => {
    setSelectedOptions((prev) => {
      const newSelected = { ...prev };
      if (!newSelected[category]) {
        newSelected[category] = [];
      }

      if (newSelected[category].includes(value)) {
        newSelected[category] = newSelected[category].filter(
          (item) => item !== value
        );
      } else {
        newSelected[category].push(value);
      }

      return newSelected;
    });
  };

  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {Object.keys(competenciesOptions).map((category) => (
        <AccordionItem key={category} value={category}>
          <AccordionTrigger className="text-lg font-semibold">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </AccordionTrigger>
          <AccordionContent>
            <ScrollArea className="h-52">
              <div className="space-y-2 mt-2 grid grid-cols-3 gap-2 pr-4">
                {competenciesOptions[category].map((option) => (
                  <div key={option.value} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`${category}-${option.value}`}
                      value={option.value}
                      checked={
                        selectedOptions[category]?.includes(option.value) ||
                        false
                      }
                      onChange={() =>
                        handleCheckboxChange(category, option.value)
                      }
                      className="mr-2"
                    />
                    <label
                      htmlFor={`${category}-${option.value}`}
                      className="text-sm text-gray-500 cursor-pointer"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CompetenciesOptionsSelect;
