import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Support = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center my-10 p-4 text-center">
      <h1 className="text-2xl font-semibold mb-6">Support</h1>
      <Card className="mb-4 max-w-4xl px-16 py-10">
        <CardHeader>
          <CardTitle className="text-xl font-semibold underline underline-offset-8 decoration-blue-500">
            Support Information
          </CardTitle>
        </CardHeader>
        <CardContent className="">
          <p className="mb-8">
            Do you have any open questions regarding your jobs, orders, or use
            of the platform?
          </p>
          <p className="mb-8">
            If you didn’t find the answer to your question, feel free to submit
            a ticket or reach out to us via email, and our team will get back to
            you within 1-3 business days. Please indicate your job or order
            number; it will help us find a quicker solution for you.
          </p>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Button size="lg" variant="outline" className="inline-block">
              Email
            </Button>
            <Button size="lg" variant="outline" className="inline-block">
              Contact Us
            </Button>
          </div>
          <Separator className="my-16" />
          <div>
            <h2 className="text-xl font-semibold mb-6  underline underline-offset-8 decoration-blue-500">
              Support Hours
            </h2>
            <p className="text-sm mb-4">
              Our support team is available during the following hours:
            </p>
            <ul className="list-disc list-inside text-sm space-y-4">
              <li>
                Monday to Friday: 10:00 AM - 6:00 PM (Mumbai/Kolkata Time)
              </li>
              <li>Saturday: 10:00 AM - 3:00 PM (Mumbai/Kolkata Time)</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Support;
