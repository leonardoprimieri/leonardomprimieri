export interface DownloadOptions {
  delay?: number;
  filename?: string;
  filePath?: string;
}

export const downloadCV = async (
  options: DownloadOptions = {}
): Promise<void> => {
  const {
    delay = 800,
    filename = "Leonardo_Primieri_CV.pdf",
    filePath = "/resume_leonardo_primieri.pdf",
  } = options;

  if (delay > 0) {
    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  const link = document.createElement("a");
  link.href = filePath;
  link.download = filename;
  link.target = "_blank";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const validateCVExists = async (
  filePath: string = "/resume_leonardo_primieri.pdf"
): Promise<boolean> => {
  try {
    const response = await fetch(filePath, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
};
