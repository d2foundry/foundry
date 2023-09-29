export async function copyToClipboard(text: string) {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);

      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  } else if (typeof document !== "undefined") {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);

      textarea.select();

      textarea.setSelectionRange(0, 99999); /*For mobile devices*/
      document.execCommand("copy");
      document.body.removeChild(textarea);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }
}
