interface GetYearsOfExperience {
  value: string | number;
  shouldAppendYear?: boolean;
  language?: "en" | "pt-br";
}

export function getYearsOfExperience({
  value,
  shouldAppendYear,
  language = "en",
}: GetYearsOfExperience) {
  if (typeof value === "string") return value;

  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - value;

  const formatted = 
    language === "pt-br" 
      ? (yearsOfExperience === 1 ? "ano" : "anos")
      : (yearsOfExperience === 1 ? "year" : "years");

  if (shouldAppendYear) return `${yearsOfExperience} ${formatted}`;

  return yearsOfExperience.toString();
}
