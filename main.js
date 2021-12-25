function palindrom(str) {
    // нижний регистр
    str = str.toLowerCase();
    // перевод в массив
    let str01 = str.split('');
    //развернуть массив
    str01 = str01.reverse();
    //обьединить строку
    str01 = str01.join('');
    if (str == str01) return true;
    else return false;
    return str01;
}
console.log(palindrom('12321'));
////////// то же самое
function palindrom(str11) {
    str11 = str11.toLowerCase();
    return str11 == str11.split('').reverse().join('');
}
console.log(palindrom('abba'));
//////// arrow function
const palindrom2 = str2 => {
    str2 = str2.toLowerCase();
    return str2 == str2.split('').reverse().join('');
}
console.log(palindrom2('Hellolleh'));