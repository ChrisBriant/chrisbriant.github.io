export const formatDate = (datestr) => {
  var date = new Date(datestr);

  return date.getUTCDate() + "/" + (date.getUTCMonth() + 1) + "/" + date.getUTCFullYear();
}