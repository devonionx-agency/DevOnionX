import { webServices } from "./webServices";
import { productServices } from "./productServices";
import { designServices } from "./designServices";
import { supportServices } from "./supportServices";
import { iconMap } from "./iconMap";

export const serviceDetails = {
  ...webServices,
  ...productServices,
  ...designServices,
  ...supportServices,
  ...iconMap,
};