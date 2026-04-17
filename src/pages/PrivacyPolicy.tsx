import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-purple-dark">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
        <div className="prose prose-lg prose-invert">
          <p className="text-gray-300 mb-6">
            Last updated: April 17, 2026
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
          <p className="text-gray-300 mb-4">
            Welcome to ProductMind. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application.
          </p>
          <p className="text-gray-300 mb-4">
            ProductMind is a tool that helps users publish videos to their TikTok account automatically.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">2. Information We Collect</h2>
          <p className="text-gray-300 mb-4">
            We collect the following information via TikTok OAuth 2.0 authorization:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li>TikTok user ID (open_id)</li>
            <li>TikTok access token and refresh token (to publish videos on your behalf)</li>
            <li>Basic profile information (username, nickname, avatar)</li>
          </ul>
          <p className="text-gray-300 mb-4">
            We do not collect your TikTok password, email, phone number, or any financial information.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
          <p className="text-gray-300 mb-4">
            We use your information solely for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li>To publish videos to your TikTok account after you authorise the app</li>
            <li>To maintain and refresh TikTok API credentials so the automation works correctly</li>
            <li>To display your TikTok account information inside our interface (if applicable)</li>
          </ul>
          <p className="text-gray-300 mb-4">
            We do not sell, rent, or trade your personal data with third parties.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Storage and Security</h2>
          <p className="text-gray-300 mb-4">
            Your access tokens and refresh tokens are stored locally within our private n8n instance.
          </p>
          <p className="text-gray-300 mb-4">
            We do not store your video files permanently. Videos are uploaded directly to TikTok and then removed from our servers.
          </p>
          <p className="text-gray-300 mb-4">
            We use reasonable technical measures to protect your data, including encrypted storage and secure API communication.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">5. Data Sharing</h2>
          <p className="text-gray-300 mb-4">
            We do not share your personal data with:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li>Advertising networks</li>
            <li>Analytics providers</li>
            <li>Any other third parties</li>
          </ul>
          <p className="text-gray-300 mb-4">
            The only external API we communicate with is TikTok's official API (https://open.tiktokapis.com).
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">6. Your Rights</h2>
          <p className="text-gray-300 mb-4">
            You can revoke this application's access to your TikTok account at any time by:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li>Going to TikTok → Settings → Security and login → Apps and websites</li>
            <li>Removing ProductMind</li>
          </ul>
          <p className="text-gray-300 mb-4">
            Once you revoke access, we will no longer have any token to act on your behalf.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">7. Changes to This Privacy Policy</h2>
          <p className="text-gray-300 mb-4">
            We may update this Privacy Policy occasionally. Any changes will be posted on this page with an updated revision date.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">8. Contact Us</h2>
          <p className="text-gray-300 mb-4">
            If you have questions about this Privacy Policy, contact us at:
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

export default PrivacyPolicy;
