export interface Plan {
  id: string;
  name: string;
  category: 'shared' | 'cloud' | 'vps' | 'dedicated' | 'reseller';
  price_monthly: number;
  price_yearly: number;
  badge?: string;
  resources: {
    websites: number;
    storageGB: number;
    bandwidth: string;
    cpu?: string;
    ramGB?: number;
    emails: number;
    databases: number;
  };
  features: Array<{
    icon: string;
    label: string;
    included: boolean;
    note?: string;
  }>;
  limits: {
    inode?: number;
    backupsRetentionDays?: number;
    supportSLA?: string;
  };
  addons: string[];
  cta: {
    text: string;
    url: string;
    trialDays?: number;
  };
}

export interface Addon {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
}

export const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    category: 'shared',
    price_monthly: 1,
    price_yearly: 10,
    badge: 'Most Popular',
    resources: {
      websites: 1,
      storageGB: 15,
      bandwidth: 'Unmetered',
      emails: 5,
      databases: 5,
    },
    features: [
      { icon: 'zap', label: 'NVMe SSD Storage', included: true },
      { icon: 'shield', label: 'Free SSL Certificate', included: true },
      { icon: 'refresh-cw', label: 'Daily Backups (7-day retention)', included: true },
      { icon: 'globe', label: 'Free Domain (1st year)', included: true },
      { icon: 'settings', label: 'cPanel Control Panel', included: true },
      { icon: 'download', label: '400+ One-Click Installers', included: true },
      { icon: 'zap', label: 'LiteSpeed Web Server', included: true },
      { icon: 'users', label: '24/7 Human Support', included: true },
    ],
    limits: {
      backupsRetentionDays: 7,
      supportSLA: '24 hours',
    },
    addons: ['dedicated-ip', 'premium-email', 'extra-backups'],
    cta: {
      text: 'Start for $1',
      url: '/checkout/starter',
      trialDays: 30,
    },
  },
  {
    id: 'pro',
    name: 'Professional',
    category: 'shared',
    price_monthly: 3,
    price_yearly: 30,
    resources: {
      websites: 5,
      storageGB: 50,
      bandwidth: 'Unmetered',
      emails: 25,
      databases: 25,
    },
    features: [
      { icon: 'zap', label: 'NVMe SSD Storage', included: true },
      { icon: 'shield', label: 'Free SSL Certificate', included: true },
      { icon: 'refresh-cw', label: 'Daily Backups (30-day retention)', included: true },
      { icon: 'globe', label: 'Free Domain (1st year)', included: true },
      { icon: 'settings', label: 'cPanel Control Panel', included: true },
      { icon: 'download', label: '400+ One-Click Installers', included: true },
      { icon: 'zap', label: 'LiteSpeed Web Server', included: true },
      { icon: 'users', label: '24/7 Human Support', included: true },
      { icon: 'shield', label: 'Advanced Security (WAF)', included: true },
      { icon: 'zap', label: 'CDN Included', included: true },
    ],
    limits: {
      backupsRetentionDays: 30,
      supportSLA: '12 hours',
    },
    addons: ['dedicated-ip', 'premium-email', 'extra-backups', 'priority-support'],
    cta: {
      text: 'Get Professional',
      url: '/checkout/pro',
      trialDays: 30,
    },
  },
  {
    id: 'business',
    name: 'Business',
    category: 'shared',
    price_monthly: 5,
    price_yearly: 50,
    resources: {
      websites: 10,
      storageGB: 100,
      bandwidth: 'Unmetered',
      emails: 100,
      databases: 100,
    },
    features: [
      { icon: 'zap', label: 'NVMe SSD Storage', included: true },
      { icon: 'shield', label: 'Free SSL Certificate', included: true },
      { icon: 'refresh-cw', label: 'Daily Backups (90-day retention)', included: true },
      { icon: 'globe', label: 'Free Domain (1st year)', included: true },
      { icon: 'settings', label: 'cPanel Control Panel', included: true },
      { icon: 'download', label: '400+ One-Click Installers', included: true },
      { icon: 'zap', label: 'LiteSpeed Web Server', included: true },
      { icon: 'users', label: '24/7 Human Support', included: true },
      { icon: 'shield', label: 'Advanced Security (WAF)', included: true },
      { icon: 'zap', label: 'CDN Included', included: true },
      { icon: 'code', label: 'Staging Environment', included: true },
      { icon: 'clock', label: 'Priority Support (4 hours)', included: true },
    ],
    limits: {
      backupsRetentionDays: 90,
      supportSLA: '4 hours',
    },
    addons: ['dedicated-ip', 'premium-email', 'extra-backups', 'priority-support'],
    cta: {
      text: 'Get Business',
      url: '/checkout/business',
      trialDays: 30,
    },
  },
  {
    id: 'cloud-starter',
    name: 'Cloud Starter',
    category: 'cloud',
    price_monthly: 10,
    price_yearly: 100,
    resources: {
      websites: 25,
      storageGB: 50,
      bandwidth: '1TB',
      cpu: '1 vCPU',
      ramGB: 2,
      emails: 100,
      databases: 100,
    },
    features: [
      { icon: 'zap', label: 'Cloud Infrastructure', included: true },
      { icon: 'shield', label: 'Free SSL Certificate', included: true },
      { icon: 'refresh-cw', label: 'Daily Backups (30-day retention)', included: true },
      { icon: 'globe', label: 'Free Domain (1st year)', included: true },
      { icon: 'settings', label: 'cPanel Control Panel', included: true },
      { icon: 'download', label: '400+ One-Click Installers', included: true },
      { icon: 'zap', label: 'LiteSpeed Web Server', included: true },
      { icon: 'users', label: '24/7 Human Support', included: true },
      { icon: 'shield', label: 'Advanced Security (WAF)', included: true },
      { icon: 'zap', label: 'CDN Included', included: true },
      { icon: 'code', label: 'Staging Environment', included: true },
      { icon: 'clock', label: 'Priority Support (4 hours)', included: true },
    ],
    limits: {
      backupsRetentionDays: 30,
      supportSLA: '4 hours',
    },
    addons: ['dedicated-ip', 'premium-email', 'extra-backups', 'priority-support'],
    cta: {
      text: 'Get Cloud Starter',
      url: '/checkout/cloud-starter',
      trialDays: 30,
    },
  },
];

export const addons: Addon[] = [
  {
    id: 'dedicated-ip',
    name: 'Dedicated IP Address',
    monthlyPrice: 2,
    yearlyPrice: 20,
    description: 'Get your own dedicated IP address for better SEO and email deliverability.',
  },
  {
    id: 'premium-email',
    name: 'Premium Email Suite',
    monthlyPrice: 3,
    yearlyPrice: 30,
    description: 'Advanced email features with spam protection and professional tools.',
  },
  {
    id: 'extra-backups',
    name: 'Extended Backups',
    monthlyPrice: 1,
    yearlyPrice: 10,
    description: 'Extend backup retention to 365 days with daily backups.',
  },
  {
    id: 'priority-support',
    name: 'Priority Support',
    monthlyPrice: 5,
    yearlyPrice: 50,
    description: 'Get priority support with guaranteed 2-hour response time.',
  },
];

export const getPlanById = (id: string): Plan | undefined => {
  return plans.find(plan => plan.id === id);
};

export const getPlansByCategory = (category: Plan['category']): Plan[] => {
  return plans.filter(plan => plan.category === category);
};
