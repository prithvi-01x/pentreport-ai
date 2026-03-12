export type Severity = 'Critical' | 'High' | 'Medium' | 'Low' | 'Informational';

export interface Finding {
  id: string;
  title: string;
  severity: Severity;
  description: string;
  impact: string;
  recommendation: string;
  cvss?: number;
}

export type Template = 'standard' | 'executive' | 'technical' | 'minimal';

export interface Report {
  id: string;
  title: string;
  clientName: string;
  engagementDate: string;
  consultantName: string;
  template: Template;
  findings: Finding[];
  executive_summary?: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
}
