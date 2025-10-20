export type ProgressStatus = 'not_started' | 'in_progress' | 'completed';

export interface KnowledgeTopicResource {
  label: string;
  url: string;
}

export interface KnowledgeTopic {
  id: string;
  title: string;
  summary: string;
  resources?: KnowledgeTopicResource[];
}

export type KnowledgeModuleCategory =
  | 'training'
  | 'nutrition'
  | 'emergency'
  | 'recovery'
  | 'planning';

export interface KnowledgeModule {
  id: string;
  name: string;
  description: string;
  category: KnowledgeModuleCategory;
  prerequisites?: string[];
  topics: KnowledgeTopic[];
}

export type CertificateLevel = 'basic' | 'advanced' | 'specialist';

export interface CertificateInfo {
  id: string;
  name: string;
  organization: string;
  applicableRoles: string[];
  recommendedModules: string[];
  validityPeriod?: string;
  level?: CertificateLevel;
  description: string;
}

export interface ProgressRecord {
  topicId: string;
  status: ProgressStatus;
  updatedAt: string;
}
