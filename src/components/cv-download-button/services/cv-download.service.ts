const filePath = process.cwd() + "resume_leonardo_primieri.pdf";
console.log("🚀 ~ filePath:", filePath);

export const downloadCV = async (): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  const link = document.createElement("a");
  link.href = filePath;
  link.download = "Leonardo_Primieri_CV.pdf";
  link.target = "_blank";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const validateCVExists = async (): Promise<boolean> => {
  try {
    const response = await fetch(filePath, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
};
