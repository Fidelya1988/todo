export const formatText = (string)=> {
  return string.length>95?  string.slice(0,95) +"...": string
}