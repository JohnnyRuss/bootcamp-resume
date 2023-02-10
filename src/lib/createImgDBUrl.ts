import { END_POINT_ORIGIN } from "./config";

export default function createImgDBUrl(src: string): string {
  return END_POINT_ORIGIN.concat(src);
}
