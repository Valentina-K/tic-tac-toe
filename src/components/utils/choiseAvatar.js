import { images } from "./constants";
export const choiseAvatar = (id) => images.find((el) => el.id !== id);
