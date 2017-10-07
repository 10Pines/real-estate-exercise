export default {
  get(name) {
    const content = "; " + document.cookie;
    const parts = content.split("; " + name + "=");
    const value = parts.pop().split(";").shift();
    return decodeURIComponent(value);
  },

  set(name, value) {
    document.cookie = name + "=" + value + "; path=/";
  }
};
