export const getPx = (data) => {
  return /px$/.test(data) ? data : data + "px";
};
