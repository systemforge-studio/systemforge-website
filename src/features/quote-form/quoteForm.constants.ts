export const PROJECT_TYPES = [
  "webApp",
  "mobileApp",
  "businessSystem",
  "aiAutomation",
  "cloudDeployment",
  "securityReview",
  "other",
] as const;

export const BUDGET_RANGES = [
  "under5k",
  "5kTo15k",
  "15kTo50k",
  "50kPlus",
  "notSure",
] as const;

export const TIMELINES = [
  "urgent",
  "oneToThreeMonths",
  "threeToSixMonths",
  "sixMonthsPlus",
  "notSure",
] as const;

export const CONTACT_METHODS = ["email", "phone", "whatsapp"] as const;

export const QUOTE_API = {
  endpoint: "/api/quote",
} as const;

export const QUOTE_VALIDATION = {
  minimumMessageLength: 20,
} as const;