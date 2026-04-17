import React from "react";
import { Timeline } from "../ui/TimelineComponent";

const ProjectStages = () => {
  const data = [
    {
      title: "Interview",
      content: (
        <div className="space-y-6">
          <h4 className="text-white text-xl md:text-2xl font-medium">
            Requirements gathering and needs identification
          </h4>
          <div className="space-y-4">
            <ul className="text-white/80 text-base md:text-lg space-y-3 list-disc pl-5">
              <li>We'll conduct several meetings</li>
              <li>We'll discuss your wishes</li>
              <li>We'll document business processes</li>
            </ul>
            <img
              src="/images/bp.jpg"
              alt="Interview process"
              className="rounded-lg object-cover w-full h-40 md:h-60 mt-4"
            />
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h5 className="text-purple-400 text-lg font-medium mb-3">Result:</h5>
              <p className="text-white text-base">
                Detailed technical specification with full system description
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Prototype",
      content: (
        <div className="space-y-6">
          <h4 className="text-white text-xl md:text-2xl font-medium">
            Idea visualization, MVP creation
          </h4>
          <div className="space-y-4">
            <ul className="text-white/80 text-base md:text-lg space-y-3 list-disc pl-5">
              <li>Creating clickable prototype in Figma</li>
              <li>Developing first version of the application</li>
              <li>Testing on focus group</li>
            </ul>
            <img
              src="/images/mob.jpg"
              alt="Prototype process"
              className="rounded-lg object-cover w-full h-40 md:h-60 mt-4"
            />
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h5 className="text-purple-400 text-lg font-medium mb-3">Result:</h5>
              <p className="text-white text-base">
                Prototype mockup and working MVP
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Solution",
      content: (
        <div className="space-y-6">
          <h4 className="text-white text-xl md:text-2xl font-medium">
            Product implementation meeting requirements
          </h4>
          <div className="space-y-4">
            <ul className="text-white/80 text-base md:text-lg space-y-3 list-disc pl-5">
              <li>Refining functions and interfaces</li>
              <li>Publishing website or application on marketplaces</li>
              <li>Setting up advertising, creating funnels for clients</li>
            </ul>
            <img
              src="/images/prod.jpg"
              alt="Solution implementation"
              className="rounded-lg object-cover w-full h-40 md:h-60 mt-4"
            />
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h5 className="text-purple-400 text-lg font-medium mb-3">Result:</h5>
              <p className="text-white text-base">
                Working solution achieving the goal
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
