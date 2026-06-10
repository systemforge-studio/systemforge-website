import type {
  BUDGET_RANGES,
  CONTACT_METHODS,
  PROJECT_TYPES,
  TIMELINES,
} from "./quoteForm.constants";

export type ProjectType = (typeof PROJECT_TYPES)[number];
export type BudgetRange = (typeof BUDGET_RANGES)[number];
export type Timeline = (typeof TIMELINES)[number];
export type ContactMethod = (typeof CONTACT_METHODS)[number];

export type QuoteFormData = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  projectType: ProjectType | "";
  budgetRange: BudgetRange | "";
  timeline: Timeline | "";
  preferredContact: ContactMethod | "";
  message: string;
};

export type QuoteFormErrors = Partial<Record<keyof QuoteFormData, string>>;

export type QuoteOption<TValue extends string = string> = {
  value: TValue;
  label: string;
};

export type QuoteFormContent = {
  title: string;
  description: string;
  submitLabel: string;
  submittingLabel: string;
  successMessage: string;
  errorMessage: string;
  selectPlaceholder: string;
  fields: Record<keyof QuoteFormData, string>;
  placeholders: Partial<Record<keyof QuoteFormData, string>>;
  closeLabel: string;
  errors: {
    required: string;
    invalidEmail: string;
    minMessage: string;
  };
  projectTypes: QuoteOption<ProjectType>[];
  budgetRanges: QuoteOption<BudgetRange>[];
  timelines: QuoteOption<Timeline>[];
  contactMethods: QuoteOption<ContactMethod>[];
};