import React from "react";
import { useTranslation } from "../../i18n/language";
import { Timeline } from "../ui/TimelineComponent";

const ProjectStages = () => {
  const { t } = useTranslation();

  const data = [
    {
      title: t("stageInterviewTitle"),
      content: (
        <div className="space-y-6">
          <h4 className="text-white text-xl md:text-2xl font-medium">
            {t("stageInterviewHeading")}
          </h4>
          <div className="space-y-4">
            <ul className="text-white/80 text-base md:text-lg space-y-3 list-disc pl-5">
              <li>{t("stageInterviewLi1")}</li>
              <li>{t("stageInterviewLi2")}</li>
              <li>{t("stageInterviewLi3")}</li>
            </ul>
            <img
              src="/images/bp.jpg"
              alt="Interview process"
              className="rounded-lg object-cover w-full h-40 md:h-60 mt-4"
            />
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h5 className="text-purple-400 text-lg font-medium mb-3">{t("stageResultLabel")}</h5>
              <p className="text-white text-base">
                {t("stageInterviewResult")}
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: t("stagePrototypeTitle"),
      content: (
        <div className="space-y-6">
          <h4 className="text-white text-xl md:text-2xl font-medium">
            {t("stagePrototypeHeading")}
          </h4>
          <div className="space-y-4">
            <ul className="text-white/80 text-base md:text-lg space-y-3 list-disc pl-5">
              <li>{t("stagePrototypeLi1")}</li>
              <li>{t("stagePrototypeLi2")}</li>
              <li>{t("stagePrototypeLi3")}</li>
            </ul>
            <img
              src="/images/mob.jpg"
              alt="Prototype process"
              className="rounded-lg object-cover w-full h-40 md:h-60 mt-4"
            />
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h5 className="text-purple-400 text-lg font-medium mb-3">{t("stageResultLabel")}</h5>
              <p className="text-white text-base">
                {t("stagePrototypeResult")}
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: t("stageSolutionTitle"),
      content: (
        <div className="space-y-6">
          <h4 className="text-white text-xl md:text-2xl font-medium">
            {t("stageSolutionHeading")}
          </h4>
          <div className="space-y-4">
            <ul className="text-white/80 text-base md:text-lg space-y-3 list-disc pl-5">
              <li>{t("stageSolutionLi1")}</li>
              <li>{t("stageSolutionLi2")}</li>
              <li>{t("stageSolutionLi3")}</li>
            </ul>
            <img
              src="/images/prod.jpg"
              alt="Solution implementation"
              className="rounded-lg object-cover w-full h-40 md:h-60 mt-4"
            />
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h5 className="text-purple-400 text-lg font-medium mb-3">{t("stageResultLabel")}</h5>
              <p className="text-white text-base">
                {t("stageSolutionResult")}
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full py-12 md:py-16" id="project-stages">
      <Timeline data={data} />
    </section>
  );
};

export default ProjectStages;
