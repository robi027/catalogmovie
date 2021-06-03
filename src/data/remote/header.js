function getHeader() {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
}

export default {
  getHeader,
};
