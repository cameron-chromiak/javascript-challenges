// take each character and move it up one
str = 'abcd'


str[0] = 'c'
for (let i =0; i<str.length; i++){
  if (str[i]!=str[-1]){
    str[i] +=1
  }
  else{
    str[i] = str[0]
  }
console.log(str)
}
