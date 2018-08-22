const cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5,
}


const decode2 = (str) => {
    if (cipher.hasOwnProperty(str[0])) {
        return str[cipher[str[0]] - 1];
    } else {
        return ' ';
    }
}

const decodewords = (str) => {
let splitString = str.split(' ');
let decodedArray = splitString.map(word => decode2(word, cipher));
console.log(decodedArray.join(''));
}

decodewords('craft block argon meter bells brown croon droop');

// const decode = message => {
//     const wordArray = message.split(' ');
//     const newMessage = [];
  
//     for (let i = 0; i < wordArray.length; i++) {
//       const word = wordArray[i];
//       const firstChar = word.charAt(0);
  
//       if (firstChar === 'a') {
//         newMessage.push(word.charAt(1));
//       } else if (firstChar === 'b') {
//         newMessage.push(word.charAt(2));
//       } else if (firstChar === 'c') {
//         newMessage.push(word.charAt(3));
//       } else if (firstChar === 'd') {
//         newMessage.push(word.charAt(4));
//       } else {
//         newMessage.push(' ');
//       }
//     }
  
//     return newMessage.join('');
//   };
  
//   console.log(decode('craft block argon meter bells brown croon droop'));

