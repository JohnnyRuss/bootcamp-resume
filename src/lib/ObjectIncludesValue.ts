export default function objectIncludesValue(obj: Object): boolean {
  return Object.values(obj).some((val) => {
    if (typeof val !== "object")
      return val && val !== "" && val !== undefined && val !== null;
    else if (typeof val === "object")
      return Object.values(val).some(
        (val) => val && val !== "" && val !== undefined && val !== null
      );
    else return false;
  });
}
