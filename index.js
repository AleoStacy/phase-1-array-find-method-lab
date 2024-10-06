// code your solution here
function superbowlWin(record) {
  const win = record.find(item => item.result === "W");
  return win ? win.year : undefined;
}

const record = [
  { year: "2018", result: "L" },
  { year: "2019", result: "W" },
  { year: "2020", result: "L" }
];

console.log(superbowlWin(record));
