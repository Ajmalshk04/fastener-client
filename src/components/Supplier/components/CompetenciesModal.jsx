import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import CompetenciesOptionsSelect from "./competenciesOptionsSelect";

const CompetencyDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl flex flex-col p-0">
        <DialogHeader className="p-6">
          <DialogTitle>Select Competencies</DialogTitle>
        </DialogHeader>

        <div className="p-6">
          <CompetenciesOptionsSelect />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CompetencyDialog;
