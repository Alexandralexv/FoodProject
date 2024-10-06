// не работает для td и некоторых других элементов, которые нельзя поместить в <div>
export default function (html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.firstElementChild;
}
