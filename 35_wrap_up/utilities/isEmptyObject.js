// this function return true/false,checking if the argument

export default function isEmptyObject(Obj) {
  return Obj && Obj.constructor === Object && Object.keys(Obj).length === 0;
}
