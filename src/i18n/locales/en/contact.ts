import type { SiteContent } from "../../i18n.types";
import { CONTACT_LINKS } from "../../../shared/constants/contact";
import { BUSINESS_CONTACT } from "../../../shared/constants/business";

export const englishContactSection: SiteContent["contactSection"] = {
  eyebrow: "Talk to an engineering partner",
  title: "De-risk delivery and scale your product roadmap.",
  description:
    "SystemForge Studio helps teams move from technical uncertainty to delivery clarity across architecture, platform engineering, and cloud operations.",
  businessContactLabel: "Business Contact",
  primaryButtonLabel: "Request a Quote",
  contactGroupTitle: "Contact Us",
  followGroupTitle: "Visit / Follow Us",
  channels: [
    {
      label: "Quote Form",
      value: "Request a quote",
      href: "#quote-form",
      iconKey: "quote",
      group: "contact",
      isPrimary: true,
    },
    {
      label: "Email",
      value: BUSINESS_CONTACT.email,
      href: CONTACT_LINKS.email,
      iconKey: "mail",
      group: "contact",
    },
    {
      label: "Phone",
      value: BUSINESS_CONTACT.phoneDisplay,
      href: CONTACT_LINKS.phone,
      iconKey: "phone",
      group: "contact",
    },
    {
      label: "WhatsApp",
      value: BUSINESS_CONTACT.whatsappDisplay,
      href: CONTACT_LINKS.whatsapp,
      iconKey: "whatsapp",
      group: "contact",
    },
    {
      label: "Website",
      value: BUSINESS_CONTACT.websiteDisplay,
      href: CONTACT_LINKS.website,
      iconKey: "website",
      group: "follow",
    },
    {
      label: "LinkedIn",
      value: "SystemForge Studio",
      href: CONTACT_LINKS.linkedin,
      iconKey: "linkedin",
      group: "follow",
    },
    {
      label: "Instagram",
      value: BUSINESS_CONTACT.instagramHandle,
      href: CONTACT_LINKS.instagram,
      iconKey: "instagram",
      group: "follow",
    },
    {
      label: "Facebook",
      value: "SystemForge Studio",
      href: CONTACT_LINKS.facebook,
      iconKey: "facebook",
      group: "follow",
    },
    {
      label: "GitHub",
      value: BUSINESS_CONTACT.githubHandle,
      href: CONTACT_LINKS.github,
      iconKey: "github",
      group: "follow",
    },
  ],
  quoteForm: {
    title: "Tell us about your project",
    description:
      "Share the key details and our team will review your request and contact you with the next step.",
    submitLabel: "Submit Request",
    submittingLabel: "Submitting...",
    successMessage: "Your request has been submitted successfully.",
    errorMessage: "Something went wrong. Please try again or contact us by email.",
    selectPlaceholder: "Select an option",
    closeLabel: "Close quote form",
    fields: {
      fullName: "Full Name",
      company: "Company / Organization",
      email: "Email",
      phone: "Phone / WhatsApp",
      projectType: "Project Type",
      budgetRange: "Budget Range",
      timeline: "Timeline",
      preferredContact: "Preferred Contact",
      message: "Project Details",
    },
    placeholders: {
      message:
        "Describe your idea, current system, required features, users, deadline, and any technical details.",
    },
    errors: {
      required: "This field is required.",
      invalidEmail: "Enter a valid email address.",
      minMessage: "Please add more project details.",
    },
    projectTypes: [
      { value: "webApp", label: "Web Application" },
      { value: "mobileApp", label: "Mobile Application" },
      { value: "businessSystem", label: "Business System" },
      { value: "aiAutomation", label: "AI / Automation" },
      { value: "cloudDeployment", label: "Cloud / Deployment" },
      { value: "securityReview", label: "Security Review" },
      { value: "other", label: "Other" },
    ],
    budgetRanges: [
      { value: "under5k", label: "Under $5,000" },
      { value: "5kTo15k", label: "$5,000 - $15,000" },
      { value: "15kTo50k", label: "$15,000 - $50,000" },
      { value: "50kPlus", label: "$50,000+" },
      { value: "notSure", label: "Not sure yet" },
    ],
    timelines: [
      { value: "urgent", label: "Urgent" },
      { value: "oneToThreeMonths", label: "1 - 3 months" },
      { value: "threeToSixMonths", label: "3 - 6 months" },
      { value: "sixMonthsPlus", label: "6+ months" },
      { value: "notSure", label: "Not sure yet" },
    ],
    contactMethods: [
      { value: "email", label: "Email" },
      { value: "phone", label: "Phone" },
      { value: "whatsapp", label: "WhatsApp" },
    ],
  },
};