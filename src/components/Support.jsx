import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone } from "lucide-react";

const Support = () => {
  return (
    <div className="container mx-auto px-6 py-12 max-w-5xl">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight">Support Center</h1>
        <p className="mt-2 text-muted-foreground">
          We're here to help with your jobs, orders, and platform questions
        </p>
      </header>

      <Card className="shadow-sm border-0">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-semibold text-center">
            How Can We Assist You?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              Have questions about your jobs, orders, or using the platform?
              If you can't find what you need, our team is ready to assist.
            </p>
            <p className="mt-4 text-muted-foreground">
              Submit a ticket or email us, and we'll respond within 1-3 business
              days. Please include your job or order number for faster support.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              asChild
            >
              <a href="mailto:support@example.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              asChild
            >
              <a href="/contact">
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </a>
            </Button>
          </div>

          <Separator />

          <div className="text-center">
            <h2 className="text-xl font-semibold mb-6">
              Support Hours
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Our team is available during these hours (Mumbai/Kolkata Time):
            </p>
            <ul className="text-sm space-y-3 max-w-md mx-auto">
              <li className="flex items-center justify-between">
                <span>Monday - Friday:</span>
                <span className="font-medium">10:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Saturday:</span>
                <span className="font-medium">10:00 AM - 3:00 PM</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Sunday:</span>
                <span className="font-medium text-red-500">Closed</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Support;