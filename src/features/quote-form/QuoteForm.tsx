import { useMemo, useState } from "react";
import { QUOTE_FORM_CLASSES } from "../../components/styles/quoteForm.styles";
import type { LanguageCode } from "../../i18n/i18n.types";
import type {
  QuoteFormContent,
  QuoteFormData,
  QuoteFormErrors,
} from "./quoteForm.types";
import { QuoteFormValidator } from "./QuoteFormValidator";
import { QuoteSubmissionService } from "./QuoteSubmissionService";

const EMPTY_FORM_DATA: QuoteFormData = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  budgetRange: "",
  timeline: "",
  preferredContact: "",
  message: "",
};

type QuoteFormProps = {
  content: QuoteFormContent;
  language: LanguageCode;
};

export function QuoteForm({ content, language }: QuoteFormProps) {
  const [formData, setFormData] = useState<QuoteFormData>(EMPTY_FORM_DATA);
  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const validator = useMemo(() => new QuoteFormValidator(), []);
  const submissionService = useMemo(() => new QuoteSubmissionService(), []);

  function updateField<TKey extends keyof QuoteFormData>(
    key: TKey,
    value: QuoteFormData[TKey],
  ): void {
    setFormData((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setSubmitMessage("");
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const validationErrors = validator.validate(formData, content.errors);
    setErrors(validationErrors);

    if (validator.hasErrors(validationErrors)) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submissionService.submit(formData, language);

      if (!result.success) {
        setSubmitMessage(content.errorMessage);
        return;
      }

      setFormData(EMPTY_FORM_DATA);
      setSubmitMessage(content.successMessage);
    } catch {
      setSubmitMessage(content.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={QUOTE_FORM_CLASSES.form}>
      <h3 className={QUOTE_FORM_CLASSES.title}>{content.title}</h3>

      <p className={QUOTE_FORM_CLASSES.description}>{content.description}</p>

      <div className={QUOTE_FORM_CLASSES.grid}>
        <TextInput
          label={content.fields.fullName}
          value={formData.fullName}
          error={errors.fullName}
          onChange={(value) => updateField("fullName", value)}
        />

        <TextInput
          label={content.fields.company}
          value={formData.company}
          error={errors.company}
          onChange={(value) => updateField("company", value)}
        />

        <TextInput
          label={content.fields.email}
          type="email"
          value={formData.email}
          error={errors.email}
          onChange={(value) => updateField("email", value)}
        />

        <TextInput
          label={content.fields.phone}
          value={formData.phone}
          error={errors.phone}
          onChange={(value) => updateField("phone", value)}
        />

        <SelectInput
          label={content.fields.projectType}
          placeholder={content.selectPlaceholder}
          value={formData.projectType}
          error={errors.projectType}
          options={content.projectTypes}
          onChange={(value) =>
            updateField("projectType", value as QuoteFormData["projectType"])
          }
        />

        <SelectInput
          label={content.fields.budgetRange}
          placeholder={content.selectPlaceholder}
          value={formData.budgetRange}
          error={errors.budgetRange}
          options={content.budgetRanges}
          onChange={(value) =>
            updateField("budgetRange", value as QuoteFormData["budgetRange"])
          }
        />

        <SelectInput
          label={content.fields.timeline}
          placeholder={content.selectPlaceholder}
          value={formData.timeline}
          error={errors.timeline}
          options={content.timelines}
          onChange={(value) =>
            updateField("timeline", value as QuoteFormData["timeline"])
          }
        />

        <SelectInput
          label={content.fields.preferredContact}
          placeholder={content.selectPlaceholder}
          value={formData.preferredContact}
          error={errors.preferredContact}
          options={content.contactMethods}
          onChange={(value) =>
            updateField(
              "preferredContact",
              value as QuoteFormData["preferredContact"],
            )
          }
        />
      </div>

      <div className={QUOTE_FORM_CLASSES.messageField}>
        <label className={QUOTE_FORM_CLASSES.fieldLabel}>
          {content.fields.message}
        </label>

        <textarea
          value={formData.message}
          placeholder={content.placeholders.message}
          onChange={(event) => updateField("message", event.target.value)}
          className={QUOTE_FORM_CLASSES.textarea}
        />

        {errors.message && (
          <p className={QUOTE_FORM_CLASSES.error}>{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={QUOTE_FORM_CLASSES.submitButton}
      >
        {isSubmitting ? content.submittingLabel : content.submitLabel}
      </button>

      {submitMessage && (
        <p className={QUOTE_FORM_CLASSES.submitMessage}>{submitMessage}</p>
      )}
    </form>
  );
}

type TextInputProps = {
  label: string;
  value: string;
  error?: string;
  type?: React.HTMLInputTypeAttribute;
  onChange: (value: string) => void;
};

function TextInput({
  label,
  value,
  error,
  type = "text",
  onChange,
}: TextInputProps) {
  return (
    <div>
      <label className={QUOTE_FORM_CLASSES.fieldLabel}>{label}</label>

      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={QUOTE_FORM_CLASSES.input}
      />

      {error && <p className={QUOTE_FORM_CLASSES.error}>{error}</p>}
    </div>
  );
}

type SelectInputProps = {
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  options: ReadonlyArray<{ value: string; label: string }>;
  onChange: (value: string) => void;
};

function SelectInput({
  label,
  placeholder,
  value,
  error,
  options,
  onChange,
}: SelectInputProps) {
  return (
    <div>
      <label className={QUOTE_FORM_CLASSES.fieldLabel}>{label}</label>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={QUOTE_FORM_CLASSES.select}
      >
        <option value="">{placeholder}</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <p className={QUOTE_FORM_CLASSES.error}>{error}</p>}
    </div>
  );
}