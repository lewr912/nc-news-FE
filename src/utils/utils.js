export function convertTimeStamp(timeStamp) {
  const dateObject = new Date(timeStamp);
  let options = {
    minute: "numeric",
    hour: "numeric",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const convertedDateTime = new Intl.DateTimeFormat("en-GB", options).format(
    dateObject
  );
  return convertedDateTime;
}
