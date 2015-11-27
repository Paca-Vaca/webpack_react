export default {
  get: function (k) {
    try {
      return JSON.parse(localStorage.getItem(k));
    } catch (e) {
      return null;
    }
  },
  set: function (k, value) {
    localStorage.setItem(k, JSON.stringify(value));
  }
};
