import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-purple-dark">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-white">Terms of Service</h1>
        <div className="prose prose-lg prose-invert">
          <p className="text-gray-300 mb-6">
            Last updated: April 17, 2026
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
          <p className="text-gray-300 mb-4">
            By using ProductMind, you agree to these Terms of Service. If you do not agree, please do not use the application.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">2. Description of Service</h2>
          <p className="text-gray-300 mb-4">
            ProductMind is an automation tool that allows users to upload and publish videos to their personal TikTok account using TikTok's official Content Posting API.
          </p>
          <p className="text-gray-300 mb-4">
            The service includes:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li>TikTok OAuth login and authorisation</li>
            <li>Automatic video publishing from our n8n workflow to your TikTok account</li>
            <li>Status tracking of published videos</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-white">3. User Requirements</h2>
          <p className="text-gray-300 mb-4">
            To use this service, you must:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li>Have a valid TikTok account</li>
            <li>Authorise the app with the following scopes: user.info.basic, video.publish</li>
            <li>Have your TikTok account set to private if your app is in unaudited mode (sandbox)</li>
            <li>Be at least 18 years old (or the legal age in your jurisdiction)</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-white">4. Your Responsibilities</h2>
          <p className="text-gray-300 mb-4">
            You agree that:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li>You will not upload videos that violate TikTok's Community Guidelines or any applicable laws</li>
            <li>You will not use this service for spam, misleading content, or copyright infringement</li>
            <li>You are solely responsible for the content you publish via this tool</li>
            <li>We do not modify, watermark, or add branding to your videos</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-white">5. Service Availability and Limitations</h2>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li>The service is provided "as is" without warranties of uninterrupted operation</li>
            <li>TikTok may impose rate limits (e.g., ~15 posts per day per account)</li>
            <li>Unaudited applications can only post to private TikTok accounts with SELF_ONLY visibility</li>
            <li>We may update or discontinue the service at any time without notice</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-white">6. Limitation of Liability</h2>
          <p className="text-gray-300 mb-4">
            To the maximum extent permitted by law:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li>We are not liable for any indirect, incidental, or consequential damages</li>
            <li>We are not responsible for TikTok API changes, downtime, or content removal</li>
            <li>Our total liability shall not exceed the amount you paid for the service (if any). For free tools, liability is zero.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-white">7. Termination</h2>
          <p className="text-gray-300 mb-4">
            We may suspend or terminate your access if you violate these Terms or TikTok's policies. You may stop using the service at any time by revoking the app's access in your TikTok settings.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">8. Changes to Terms</h2>
          <p className="text-gray-300 mb-4">
            We may update these Terms from time to time. Continued use of the service means you accept the updated Terms.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">9. Governing Law</h2>
          <p className="text-gray-300 mb-4">
            These Terms shall be governed by the laws of the jurisdiction in which ProductMind operates.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">10. Contact Information</h2>
          <p className="text-gray-300 mb-4">
            For any questions regarding these Terms, please contact:
          </p>
          <p className="text-gray-300 mb-4">
            📧 <a href="mailto:info@productmind.ru" className="text-accent hover:underline">info@productmind.ru</a><br />
            🌐 <a href="https://productmind.ru" className="text-accent hover:underline">https://productmind.ru</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
