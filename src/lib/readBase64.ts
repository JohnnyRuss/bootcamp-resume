export default async function readFileAsDataUrl(
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
