import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";

const competenciesData = {
  "Casting/Injection Molding": [
    "Sand molded casting",
    "In-Mold Decoration",
    "Plastic extrusion",
    "Metal Injection Molding",
    "Ceramic Injection Molding",
    "LSR Injection Molding",
    "Aluminium extrusion",
    "Silicone extrusion",
    "Die cutting",
    "Injection Molding",
    "In-Mold Filming",
    "Die Casting",
    "Vacuum Casting",
    "Compression Molding",
    "Investment Casting",
    "Blow Molding",
    "Thermoforming",
    "Lost Foam Casting",
    "Permanent Mold Casting",
    "Spin Casting",
    "Cold Chamber Die Casting",
    "Hot Chamber Die Casting",
  ],
  "Post Processing": [
    "Anodizing",
    "Electroplating",
    "Powder Coating",
    "Painting",
    "Passivation",
    "Heat Treating",
    "Shot Peening",
    "Deburring",
    "Tumbling",
    "Bead Blasting",
    "Laser Engraving",
    "Laser Marking",
    "Vibratory Finishing",
    "Hot Isostatic Pressing (HIP)",
  ],
  CNC: [
    "Milling",
    "Milling 5 axes",
    "Milling mass",
    "Turning",
    "Turning 2+ axes",
    "Turning Automat",
    "Grinding",
    "Polishing",
    "Slotting",
    "Liner Honing",
    "Thread Rolling",
    "Wire EDM",
    "Sinker EDM",
    "Swiss Machining",
    "Horizontal Machining",
    "Vertical Machining",
  ],
  Sheet: [
    "Laser Cutting",
    "Waterjet Cutting",
    "Plasma/Gas Cutting",
    "Bending Sheet",
    "Bending Tube",
    "Bending Wire",
    "Punching",
    "Stamping",
    "Roll Forming",
    "Deep Drawing",
    "Stretch Forming",
    "Spinning",
    "Blanking",
  ],
  "3D": [
    "3D Printing (SLS)",
    "3D Printing (MJF)",
    "3D Printing (SLA)",
    "3D Printing (FDM)",
    "3D Printing (DLS)",
    "3D Printing (DMLS)",
    "3D Printing (PolyJet)",
    "3D Printing (Binder Jetting)",
    "3D Printing (EBM)",
    "3D Printing (LMD)",
  ],
  "Other methods": [
    "Tooth Gear",
    "EDM",
    "Assembly",
    "Welding Steel",
    "Welding Alu",
    "Welding Stainless Steel",
    "Molds&Dies",
    "Brazing",
    "Soldering",
    "Riveting",
    "Hot Stamping",
    "Roll Forming",
    "Spin Forming",
    "Vacuum Forming",
  ],
};

const SelectCompetencies = ({
  onCompetenciesChange,
  initialCompetencies = [],
}) => {
  const [selectedCompetencies, setSelectedCompetencies] =
    useState(initialCompetencies);
  const [isOpen, setIsOpen] = useState(false);

  const handleCompetencyChange = (competency) => {
    setSelectedCompetencies((prev) =>
      prev.includes(competency)
        ? prev.filter((c) => c !== competency)
        : [...prev, competency]
    );
  };

  const handleSave = () => {
    onCompetenciesChange(selectedCompetencies);
    setIsOpen(false); // Close the modal after saving
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          Edit Competencies
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Select Your Competencies</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="grid grid-cols-3 gap-6">
            {Object.entries(competenciesData).map(
              ([category, competencies]) => (
                <div key={category} className="mb-4">
                  <h3 className="font-semibold mb-2">{category}</h3>
                  {competencies.map((competency) => (
                    <div
                      key={competency}
                      className="flex items-center space-x-2 mb-1"
                    >
                      <Checkbox
                        id={competency}
                        checked={selectedCompetencies.includes(competency)}
                        onCheckedChange={() =>
                          handleCompetencyChange(competency)
                        }
                      />
                      <label htmlFor={competency} className="text-sm">
                        {competency}
                      </label>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </ScrollArea>
        <Button onClick={handleSave}>Save Competencies</Button>
      </DialogContent>
    </Dialog>
  );
};

export default SelectCompetencies;
