function order(words){
  return words
  //Split the spring into an array using .split() method
    .split(' ')
  //Sort the array using the .sort() method
    .sort((a,b) => a.match(/\d+/)-b.match(/\d+/))
  //Join the array back into a string using the .join method
    .join(' ');
}