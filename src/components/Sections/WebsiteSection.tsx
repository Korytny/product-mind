"use client";
import React from "react";
import { LampDemo } from "@/components/ui/lamp";
import { Button } from "@/components/ui/button";

const WebsiteSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <LampDemo />
      <Button asChild className="btn-primary -mt-60 px-6 py-3">
        <a href="/src/pages/website2025-landing.html" target="_blank" rel="noopener noreferrer">
          Посмотреть исследование
        </a>
      </Button>
    </section>
  );
};

export default WebsiteSection;
