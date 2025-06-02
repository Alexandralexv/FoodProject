export default function escapeHtml(str) {
  return str.replace(
    /[&<>"']/g,
    (s) =>
      ({
        "&": "&amp;",
        "<": "<",
        ">": ">",
        '"': "&quot;",
        "'": "&#39;",
      }[s])
  );
}
