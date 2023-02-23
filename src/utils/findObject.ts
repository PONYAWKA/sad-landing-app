export const findObject = (
  object: { [key: string]: string }[],
  key: string,
  value: string
) => {
  return object.filter((e) => e[key] === value)[0];
};
