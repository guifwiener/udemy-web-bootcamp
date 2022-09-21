var getDate = () => {
  let today = new Date();
  let currentDay = today.getDay();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return (day = today.toLocaleDateString("en-US", options));
};

var getDay = () => {
  let today = new Date();
  let currentDay = today.getDay();

  let options = {
    weekday: "long",
  };

  return (day = today.toLocaleDateString("en-US", options));
};

module.exports = { getDate, getDay };
