const data =require("./timeline-data");
export function getDatas(func){
  return  func(data);
};