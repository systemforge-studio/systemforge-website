export const QUOTE_FORM_CLASSES = {
  form:
    "mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-5 shadow-2xl shadow-cyan-950/20 sm:p-7",

  title:
    "text-xl font-semibold leading-[2.4rem] text-white",

  description:
    "mt-2 text-sm leading-[2rem] text-slate-300",

  grid:
    "mt-8 grid gap-x-4 gap-y-8 sm:grid-cols-2",

  field:
    "flex flex-col gap-3",

  messageField:
    "mt-8 flex flex-col gap-3",

  fieldLabel:
    "block min-h-[2rem] text-sm font-medium leading-[2rem] text-slate-200",

  input:
    "h-12 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 text-sm leading-[2rem] text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300",

  select:
    "h-12 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 text-sm leading-[2rem] text-white outline-none transition focus:border-cyan-300",

  textarea:
    "min-h-36 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-4 text-sm leading-[2rem] text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300",

  error:
    "text-xs leading-6 text-red-300",

  submitButton:
    "mt-6 w-full rounded-2xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60",

  submitMessage:
    "mt-4 text-sm leading-7 text-emerald-300",
} as const;