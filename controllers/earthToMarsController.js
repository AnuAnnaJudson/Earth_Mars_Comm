const { logEvents } = require("../middleware/logger");

const nokiaKeypadMapping = {
  a: "2",
  b: "22",
  c: "222",
  d: "3",
  e: "33",
  f: "333",
  g: "4",
  h: "44",
  i: "444",
  j: "5",
  k: "55",
  l: "555",
  m: "6",
  n: "66",
  o: "666",
  p: "7",
  q: "77",
  r: "777",
  s: "7777",
  t: "8",
  u: "88",
  v: "888",
  w: "9",
  x: "99",
  y: "999",
  z: "9999",
  " ": " ",
  O: " ",
};

const reverseNokiaKeypadMapping = {};
for (const key in nokiaKeypadMapping) {
  if (nokiaKeypadMapping.hasOwnProperty(key)) {
    const value = nokiaKeypadMapping[key];
    reverseNokiaKeypadMapping[value] = key;
  }
}

const convertToNumericSequence = (message, res) => {
  let numericSequence = "";

  for (const char of message.toLowerCase()) {
    if (nokiaKeypadMapping[char]) {
      numericSequence += nokiaKeypadMapping[char];
    }
  }
  logEvents(`end request\n`, "reqLog.log");

  res.json({
    Incoming_from_Earth: `${message}`,
    Response_from_Mars: `${numericSequence}`,
  });
};

const convertToEnglish = (numericSequence, res) => {
  const sequenceArray = numericSequence.split(".");

  let convertedMessage = "";
  for (const num of sequenceArray) {
    if (num === "O") {
      convertedMessage += " ";
    }
    if (reverseNokiaKeypadMapping[num]) {
      convertedMessage += reverseNokiaKeypadMapping[num];
    }
  }
  logEvents(`end request\n`, "reqLog.log");

  res.json({
    Incoming_from_Mars: `${numericSequence}`,
    Response_from_Earth: `${convertedMessage}`,
  });
};

const chooseConverter = (req, res) => {
  const sender = req.headers["x-sender"];
  const receiver = req.headers["x-receiver"];

  if (sender === "earth" && receiver === "mars") {
    console.log(`sender: ${sender}\nreciever:${receiver}`);
    convertToNumericSequence(req.body.input, res);
  } else {
    console.log(`sender: ${sender}\n reciever:${receiver}`);
    console.log(typeof req.body.input);
    convertToEnglish(req.body.input, res);
  }
};

module.exports = { chooseConverter };
