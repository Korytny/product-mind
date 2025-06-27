import { useState, useEffect } from 'react';
import { dynamicContent } from '../dynamicContent';

const DynamicLandingPage = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Parse UTM parameters from URL
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get('utm_source') || 'default';
    const utmMedium = params.get('utm_medium') || 'default';
    const utmCampaign = params.get('utm_campaign') || 'default';

    // Generate content key from UTM params
    const contentKey = `${utmSource}_${utmMedium}_${utmCampaign}`;

    // Select appropriate content or fallback to default
    const selectedContent = dynamicContent[contentKey] || dynamicContent.default_default_default;
    setContent(selectedContent);
  }, [window.location.search]); // Re-run when URL search params change

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">
            {content.mainHeading}
          </h1>
          <h2 className="text-xl text-muted-foreground">
            {content.subHeading}
          </h2>
          <p className="text-lg">
            {content.paragraph1}
          </p>
          <a 
            href={content.ctaButtonLink}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
          >
            {content.ctaButtonText}
          </a>
        </div>
        <div className="md:w-1/2">
          <img 
            src={content.imageSrc} 
            alt={content.mainHeading}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default DynamicLandingPage;
