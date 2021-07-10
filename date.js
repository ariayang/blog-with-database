//console.log(module);

module.exports.getDate = function() {

  const today = new Date();
  const currentDay = today.getDay();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", options);
}

module.exports.getDay = function() {

    const today = new Date();
    const currentDay = today.getDay();
  
    const options = {
      weekday: "long"
    };
  
    return today.toLocaleDateString("en-US", options);
  }


  module.exports.getDateYear = function() {

    const today = new Date();
    const currentDay = today.getDay();
  
    const options = {
      dateStyle: "full",
      timeStyle: "long"
    };
  
    return today.toLocaleDateString("en-US", options);
  }