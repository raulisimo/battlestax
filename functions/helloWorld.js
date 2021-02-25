// let's return a JSON response that looks like: { hello: "world" }
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ hello: "world" }),
  };
};

