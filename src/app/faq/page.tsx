import FAQ from '@/components/FAQ';

export const metadata = {
  title: 'FAQ - Frequently Asked Questions | WaseerHost',
  description: 'Find answers to common questions about our hosting services, features, billing, and support. Search our comprehensive FAQ database.',
  keywords: 'FAQ, hosting questions, web hosting help, hosting support, common questions',
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <FAQ 
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our hosting services, features, and support. Can't find what you're looking for? Use the search above or contact our support team."
        showSearch={true}
        showCategories={true}
      />
    </div>
  );
}
