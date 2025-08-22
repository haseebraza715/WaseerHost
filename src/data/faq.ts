export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'technical' | 'billing' | 'support' | 'migration';
}

export const faqs: FAQ[] = [
  {
    id: 'uptime-guarantee',
    question: 'What is your uptime guarantee?',
    answer: 'We guarantee 99.9% uptime. If we fall below this threshold, you\'ll receive service credits according to our SLA. We monitor our infrastructure 24/7 and have redundant systems in place to minimize downtime.',
    category: 'technical',
  },
  {
    id: 'backup-policy',
    question: 'How often do you backup my data?',
    answer: 'We perform daily automated backups of all customer data. Backup retention varies by plan: Starter (7 days), Professional (30 days), and Business (90 days). You can also create manual backups anytime through cPanel.',
    category: 'technical',
  },
  {
    id: 'migration-help',
    question: 'Do you help with website migration?',
    answer: 'Yes! We offer free website migration for all new customers. Our team will move your site from your current host with zero downtime. Simply book a migration slot when you sign up, and we\'ll handle everything.',
    category: 'migration',
  },
  {
    id: 'ssl-certificates',
    question: 'Are SSL certificates really free?',
    answer: 'Absolutely! We provide free Let\'s Encrypt SSL certificates for all domains on your hosting account. These are automatically installed and renewed, ensuring your site always has HTTPS protection.',
    category: 'technical',
  },
  {
    id: 'refund-policy',
    question: 'What is your refund policy?',
    answer: 'We offer a 30-day money-back guarantee. If you\'re not completely satisfied with our service within the first 30 days, we\'ll refund your payment in full, no questions asked.',
    category: 'billing',
  },
  {
    id: 'support-response',
    question: 'How quickly do you respond to support tickets?',
    answer: 'Response times vary by plan: Starter (24 hours), Professional (12 hours), and Business (4 hours). Our average first response time across all plans is under 10 minutes. We also offer live chat for immediate assistance.',
    category: 'support',
  },
  {
    id: 'storage-limits',
    question: 'What happens if I exceed my storage limit?',
    answer: 'We\'ll notify you when you reach 80% of your storage limit. If you exceed it, we\'ll work with you to either upgrade your plan or optimize your site. We don\'t immediately suspend accounts for going slightly over.',
    category: 'technical',
  },
  {
    id: 'domain-included',
    question: 'Is a domain name included with hosting?',
    answer: 'Yes! Your first domain is free for the first year with any hosting plan. After the first year, domain renewals are $12/year. You can also transfer existing domains or purchase additional ones.',
    category: 'general',
  },
  {
    id: 'email-accounts',
    question: 'How many email accounts can I create?',
    answer: 'Email limits vary by plan: Starter (5 accounts), Professional (25 accounts), and Business (100 accounts). All plans include webmail access, spam protection, and email forwarding.',
    category: 'technical',
  },
  {
    id: 'cpanel-access',
    question: 'Do I get cPanel access?',
    answer: 'Yes! All hosting plans include full cPanel access. You can manage your website files, databases, email accounts, domains, and more through our intuitive control panel.',
    category: 'technical',
  },
  {
    id: 'one-click-installers',
    question: 'What one-click installers do you offer?',
    answer: 'We offer 400+ one-click installers including WordPress, Joomla, Drupal, Magento, and many more. You can install popular applications with just a few clicks through cPanel.',
    category: 'technical',
  },
  {
    id: 'cdn-included',
    question: 'Is a CDN included with my hosting?',
    answer: 'CDN is included with Professional and Business plans. It helps speed up your website by serving content from servers closer to your visitors. Starter plans can add CDN as an addon.',
    category: 'technical',
  },
];

export const getFAQsByCategory = (category: FAQ['category']): FAQ[] => {
  return faqs.filter(faq => faq.category === category);
};

export const getFAQsBySearch = (query: string): FAQ[] => {
  const searchTerm = query.toLowerCase();
  return faqs.filter(
    faq => 
      faq.question.toLowerCase().includes(searchTerm) ||
      faq.answer.toLowerCase().includes(searchTerm)
  );
};
