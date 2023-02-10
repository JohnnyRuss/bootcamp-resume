export async function readFileAsDataUrl(
  file: File | null,
  handler: (val: string) => void
) {
  const fr = new FileReader();
  file && fr.readAsDataURL(file);
  fr.addEventListener("load", () => {
    const url = fr.result;
    handler(JSON.stringify(url));
  });
}

export function convertBase64ToFile(
  url: string,
  getter?: (fl: any) => void
): Promise<any> {
  const base64 = url ? JSON.parse(url) : "";

  const file = fetch(base64)
    .then((res) => res.blob())
    .then((blob) => {
      const fl = new File([blob], "Filename");
      getter && getter(fl);

      return fl;
    });

  return file;
}
