export interface SiteConfig {
  appTitle: string;
  appDescription: string;
  brandImageUrl?: string;
  defaultBusinessName?: string;
  defaultContactEmail?: string;
  defaultContactPhone?: string;
  appUrl?: string;
  // Developer contact details for escalations (admins → developers)
  developerSupportEmail?: string;
  developerSupportPhone?: string;
  developerSupportName?: string;
  // AI support display information
  aiSupportName?: string;
  aiSupportDescription?: string;
}

export const SITE_CONFIG: SiteConfig = {
  appTitle: process.env.NEXT_PUBLIC_APP_TITLE || 'Chawa\'s Investments',
  appDescription:
    process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Your trusted provider of quality agricultural products and livestock. We specialize in premium cassava flour, Chawa\'s tasty porridge, and healthy livestock including chickens, quails, rabbits, and ducks. Our commitment is to deliver fresh, nutritious products that support your family\'s health and wellbeing while supporting local farmers and sustainable agriculture practices.',
  brandImageUrl:
    process.env.NEXT_PUBLIC_BRAND_IMAGE_URL || 'https://chawa-investments.vercel.app/logo.png',
  defaultBusinessName: process.env.NEXT_PUBLIC_DEFAULT_BUSINESS_NAME || 'Chawa\'s Investments',
  defaultContactEmail: process.env.NEXT_PUBLIC_DEFAULT_CONTACT_EMAIL || 'hie@chawa-investments.techcure.tech',
  defaultContactPhone: process.env.NEXT_PUBLIC_DEFAULT_CONTACT_PHONE || '+265 981 819 389',
  appUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://chawa-investments.vercel.app',
  developerSupportEmail: process.env.NEXT_PUBLIC_DEVELOPER_SUPPORT_EMAIL || 'support@techcure.tech',
  developerSupportName: process.env.NEXT_PUBLIC_DEVELOPER_SUPPORT_NAME || 'TechCure Support',
  developerSupportPhone: process.env.NEXT_PUBLIC_DEVELOPER_SUPPORT_PHONE || '+265 981 819 389',
  // AI support show name & description when present
  aiSupportName: process.env.NEXT_PUBLIC_AI_SUPPORT_NAME || 'AI Support',
  aiSupportDescription: process.env.NEXT_PUBLIC_AI_SUPPORT_DESCRIPTION || 'Automated assistance — responses are suggestions. Use Request human support for help.',
};
