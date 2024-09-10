import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import GetListOfMyProjects from "./GetListOfMyProjects";

const MyProjects = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-lg font-semibold mb-6">My Projects</h1>

      <Tabs defaultValue="quotes">
        <TabsList>
          <TabsTrigger value="quotes">Quotes</TabsTrigger>
          <TabsTrigger value="ordered">Ordered</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="quotes">
          <div className="mb-4 ">
            <Button
              className="text-white mt-4"
              onClick={() => {
                navigate("/customer/quote");
              }}
            >
              Start New Quote
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="ordered">
          {/* Content for Ordered tab */}
          <p>Ordered projects will be displayed here.</p>
          <GetListOfMyProjects />
        </TabsContent>

        <TabsContent value="completed">
          {/* Content for Completed tab */}
          <p>Completed projects will be displayed here.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyProjects;
