"use client";
import React from "react";
import { useTranslation } from '../../i18n/language';
import { LampDemo } from "@/components/ui/lamp";
import { Button } from "@/components/ui/button";

const WebsiteSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full flex flex-col items-center hidden md:flex">
      <LampDemo />
      <Button asChild className="btn-primary -mt-60 px-6 py-3">
        <a href="/website2025-landing.html" target="_blank" rel="noopener noreferrer">
          {t("websiteResearch")}
        </a>
      </Button>
    </section>
  );
};

export default WebsiteSection;
