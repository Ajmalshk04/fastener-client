
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import axiosInstance from "@/api/client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { competenciesOptions } from "../data/MyCompetencies";

const normalizeStr = str => str.toLowerCase().trim();

const CompetenciesOptionsSelect = ({ initialCapabilities = [] }) => {
  const { token } = useAuth();
  const queryClient = useQueryClient();
  const [checkedItems, setCheckedItems] = useState(new Set());
  
  // Create a bi-directional mapping of normalized strings to original strings
  const normalizedToOriginal = new Map();
  const originalToNormalized = new Map();
  Object.values(competenciesOptions).flat().forEach(option => {
    const normalized = normalizeStr(option);
    normalizedToOriginal.set(normalized, option);
    originalToNormalized.set(option, normalized);
  });

  // Set initial checked state based on props
  useEffect(() => {
    const normalizedSet = new Set();
    initialCapabilities.forEach(capability => {
      const normalized = originalToNormalized.get(capability) || normalizeStr(capability);
      if (normalizedToOriginal.has(normalized)) {
        normalizedSet.add(normalized);
      }
    });
    setCheckedItems(normalizedSet);
  }, [initialCapabilities]);

  // Handle checkbox changes
  const handleCheckboxChange = (option) => {
    setCheckedItems(prev => {
      const newChecked = new Set(prev);
      const normalizedOption = normalizeStr(option);
      
      if (newChecked.has(normalizedOption)) {
        newChecked.delete(normalizedOption);
      } else {
        newChecked.add(normalizedOption);
      }
      
      return newChecked;
    });
  };

  // Update capabilities mutation
  const { mutate: updateCapabilities, isLoading } = useMutation({
    mutationFn: async ({ addCapabilities, removeCapabilities }) => {
      await axiosInstance.post(
        "/suppliers/capabilities",
        { 
          addCapabilities,
          removeCapabilities
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["manufacturingCapabilities"]);
    }
  });

  // Handle form submission
  const handleSubmit = () => {
    // Convert current capabilities to a Set of normalized strings
    const currentSet = new Set(
      initialCapabilities.map(cap => originalToNormalized.get(cap) || normalizeStr(cap))
    );
    
    // Convert checked items to an array of normalized strings
    const checkedArray = Array.from(checkedItems);
    
    // Calculate differences
    const addNormalized = checkedArray.filter(normalized => !currentSet.has(normalized));
    const removeNormalized = Array.from(currentSet)
      .filter(normalized => !checkedItems.has(normalized));
    
    // Convert normalized strings back to original format
    const addCapabilities = addNormalized
      .map(normalized => normalizedToOriginal.get(normalized))
      .filter(Boolean);
      
    const removeCapabilities = removeNormalized
      .map(normalized => normalizedToOriginal.get(normalized))
      .filter(Boolean);

    // Only make the API call if there are changes
    if (addCapabilities.length > 0 || removeCapabilities.length > 0) {
      updateCapabilities({ addCapabilities, removeCapabilities });
    }
  };

  // Check if an option is checked
  const isChecked = (option) => {
    return checkedItems.has(normalizeStr(option));
  };

  return (
    <div className="space-y-4">
      <Accordion type="single" collapsible className="w-full">
        {Object.entries(competenciesOptions).map(([category, options]) => (
          <AccordionItem key={category} value={category}>
            <AccordionTrigger className="text-lg font-semibold">
              {category}
            </AccordionTrigger>
            <AccordionContent>
              <ScrollArea className="h-52">
                <div className="grid grid-cols-4 gap-2 p-2">
                  {options.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={option}
                        checked={isChecked(option)}
                        onCheckedChange={() => handleCheckboxChange(option)}
                      />
                      <Label htmlFor={option} className="text-sm">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Button 
        onClick={handleSubmit} 
        disabled={isLoading} 
        className="w-full"
      >
        {isLoading ? "Updating..." : "Save Changes"}
      </Button>
    </div>
  );
};

export default CompetenciesOptionsSelect;