interface GetYearsOfExperience {
  value: string | number;
  shouldAppendYear?: boolean;
}

export function getYearsOfExperience({
  value,
  shouldAppendYear,
}: GetYearsOfExperience) {
  if (typeof value === "string") return value;

  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - value;

  const formatted = yearsOfExperience === 1 ? "year" : "years";

  if (shouldAppendYear) return `${yearsOfExperience} ${formatted}`;

  return yearsOfExperience.toString();
}
