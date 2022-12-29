export const randomizeElemnts = (array, count) => {
  count = count > array.length ? array.length : count;
  const result = array.filter((element, index) => index < count);
  return result;
};

export const stringTimmer = (text, length) => {
  const isLengthGreater = text.length > length;
  if (isLengthGreater) {
    text = `${text.substring(0, length)}...`;
    return text;
  }
  return text;
};
