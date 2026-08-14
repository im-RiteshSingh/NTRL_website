import { CheckCircle2, Paperclip, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { projectTypes, testingRequirements } from "@/data/siteData";

const enquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  organisation: z.string().trim().min(2, "Please enter your company or organisation").max(150),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[0-9+\-()\s]+$/, "Phone number may contain digits and + - ( ) only"),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  projectLocation: z.string().trim().max(150).optional(),
  projectType: z.string().trim().max(60).optional(),
  requirement: z.string().trim().max(60).optional(),
  message: z.string().trim().max(1500).optional(),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof enquirySchema>, string>>;

const selectClass =
  "h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

export function EnquiryForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    const result = enquirySchema.safeParse({
      fullName: String(data["fullName"] ?? ""),
      organisation: String(data["organisation"] ?? ""),
      phone: String(data["phone"] ?? ""),
      email: String(data["email"] ?? ""),
      projectLocation: String(data["projectLocation"] ?? ""),
      projectType: String(data["projectType"] ?? ""),
      requirement: String(data["requirement"] ?? ""),
      message: String(data["message"] ?? ""),
    });

    if (!result.success) {
      const next: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-lg border border-border bg-card p-8 text-center shadow-card"
      >
        <CheckCircle2 className="mx-auto size-10 text-brand" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-bold text-foreground">
          Thank you. Our team will contact you regarding your testing requirement.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          Enquiry delivery is not connected yet — a backend or email service must be enabled so
          submissions reach the NTRL team inbox.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setSubmitted(false)}>
          Submit another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-border bg-card p-6 shadow-card md:p-8"
    >
      <fieldset className="border-0 p-0">
        <legend className="font-display text-sm font-bold uppercase tracking-[0.14em] text-brand">
          Personal Information
        </legend>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <Field
            id="fullName"
            label="Full Name"
            required
            error={errors.fullName}
            placeholder="Your full name"
          />
          <Field
            id="organisation"
            label="Company / Organisation"
            required
            error={errors.organisation}
            placeholder="Company or department name"
          />
          <Field
            id="phone"
            label="Phone Number"
            required
            type="tel"
            error={errors.phone}
            placeholder="+91"
          />
          <Field
            id="email"
            label="Email"
            required
            type="email"
            error={errors.email}
            placeholder="name@company.com"
          />
        </div>
      </fieldset>

      <fieldset className="mt-8 border-0 p-0">
        <legend className="font-display text-sm font-bold uppercase tracking-[0.14em] text-brand">
          Project Information
        </legend>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <Field
            id="projectLocation"
            label="Project Location"
            error={errors.projectLocation}
            placeholder="District / State"
          />
          <div>
            <Label htmlFor="projectType">Project Type</Label>
            <select id="projectType" name="projectType" className={`${selectClass} mt-2`}>
              <option value="">Select project type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="requirement">Testing Requirement</Label>
            <select id="requirement" name="requirement" className={`${selectClass} mt-2`}>
              <option value="">Select testing requirement</option>
              {testingRequirements.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              className="mt-2"
              placeholder="Describe your testing requirement"
              maxLength={1500}
            />
            {errors.message ? <FieldError message={errors.message} /> : null}
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="document">Upload test requirement / project document</Label>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center">
              <Input
                id="document"
                name="document"
                type="file"
                accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                className="file:mr-3 file:rounded file:border-0 file:bg-secondary file:px-3 file:py-1 file:text-xs file:font-semibold"
                onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
              />
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Paperclip className="size-3.5" aria-hidden="true" />
                {fileName || "PDF, DOC, XLS or image"}
              </p>
            </div>
          </div>
        </div>
      </fieldset>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" variant="brand" size="xl">
          <Send aria-hidden="true" />
          Submit Testing Enquiry
        </Button>
        <p className="text-xs text-muted-foreground">
          Fields marked * are required. Your details are used only to respond to your enquiry.
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  type = "text",
  error,
  placeholder,
}: {
  id: string;
  label: string;
  required?: boolean;
  type?: string;
  error?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <Label htmlFor={id}>
        {label}
        {required ? <span className="ml-1 text-brand">*</span> : null}
      </Label>
      <Input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2"
      />
      {error ? <FieldError id={`${id}-error`} message={error} /> : null}
    </div>
  );
}

function FieldError({ id, message }: { id?: string; message: string }) {
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs font-medium text-destructive">
      {message}
    </p>
  );
}
