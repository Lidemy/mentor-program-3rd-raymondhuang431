function join(str, concatStr) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    const strElment = str[i];
    if (i < str.length - 1) {
      result += (strElment + concatStr);
    } else if (i === str.length - 1) {
      result += strElment;
    }
  }
  return result;
}


function repeat(str, times) {
  let answer = '';
  for (let i = 1; i <= times; i += 1) {
    answer += str;
  }
  return answer;
}

console.log(join(['a', 'b', 'c'], '!!'));
console.log(repeat('h', 6));
