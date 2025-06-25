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
    <div className="landing-page">
      <div className="hero-section">
        <img src={content.imageSrc} alt={content.mainHeading} />
        <h1>{content.mainHeading}</h1>
        <h2>{content.subHeading}</h2>
      </div>
      <div className="content-section">
        <p>{content.paragraph1}</p>
        <a href={content.ctaButtonLink} className="cta-button">
          {content.ctaButtonText}
        </a>
      </div>
    </div>
  );
};

export default DynamicLandingPage;
