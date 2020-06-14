import imagePlaceholder from "../assets/img-item-placeholder.png";

export const applyImagePlaceholderIfBlank = (url = "") => {
  if (url.trim() === "") return (url = imagePlaceholder);
  return url;
};
