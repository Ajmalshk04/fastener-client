import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/typography";

const Footer = () => {
  return (
    <Card className="rounded-none border-t ">
      <CardContent className="p-8">
        <FooterContent />
        <Separator className="my-6" />
        <FooterLinks />
        <Separator className="my-6" />
        <FooterBottom />
      </CardContent>
    </Card>
  );
};

const FooterContent = () => {
  return (
    <Typography variant="body2" className="text-muted-foreground mb-4">
      With a virtually unlimited range of capacities and capabilities, Zetwerk
      offers high quality production, competitive costs and best-in-class lead
      times – whatever the category, product, scale, or geography.
    </Typography>
  );
};

const FooterLinks = () => {
  const linkGroups = [
    ["TWITTER", "FACEBOOK", "INSTAGRAM", "LINKEDIN", "YOUTUBE"],
    [
      "CAPABILITIES",
      "INDUSTRIES",
      "WHY ZETWERK",
      "MANUFACTURING SERVICES",
      "RESOURCES",
    ],
    [
      "ABOUT ZETWERK",
      "INSIGHTS",
      "MEDIA RESOURCES",
      "CONTACT ZETWERK",
      "ZETWERK BUILD",
    ],
    [
      "SITEMAP",
      "CSR POLICY",
      "WHISTLEBLOWER POLICY",
      "E-WASTE MANAGEMENT",
      "DISCLOSURE",
    ],
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {linkGroups.map((group, index) => (
        <div key={index}>
          {group.map((link) => (
            <Typography
              key={link}
              variant="body2"
              as="a"
              href="#"
              className="block text-muted-foreground hover:text-foreground mb-2"
            >
              {link}
            </Typography>
          ))}
        </div>
      ))}
    </div>
  );
};

const FooterBottom = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <Typography variant="body2" className="text-muted-foreground">
        © 2024 Logo
      </Typography>
      <Button variant="outline" className="mt-4 md:mt-0">
        Get a Quote Now
      </Button>
    </div>
  );
};

export default Footer;
