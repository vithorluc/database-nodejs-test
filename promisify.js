function promisify(fn) {
  fn.then((result) => {
    console.log(result);
    return result;
  }).catch((err) => {
    console.log(err);
    return err;
  });
}

module.exports = { promisify };
