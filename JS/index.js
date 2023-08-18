//EXERCISE 1
document.getElementById('btnInteger').onclick = function(){
    var integer1 = +document.getElementById('integer1').value;
    var integer2 = +document.getElementById('integer2').value;
    var integer3 = +document.getElementById('integer3').value;
    var printInteger;

    if (integer1 <= integer2 && integer1 < integer3 && integer2 <= integer3) {
        printInteger = `${integer1}, ${integer2}, ${integer3}`;
      } else if (integer1 <= integer3 && integer1 < integer2 && integer3 <= integer2) {
        printInteger = `${integer1}, ${integer3}, ${integer2}`;
      } else if (integer2 <= integer3 && integer2 < integer1 && integer3 <= integer1) {
        printInteger = `${integer2}, ${integer3}, ${integer1}`;
      } else if (integer2 <= integer1 && integer2 < integer3 && integer1 <= integer3) {
        printInteger = `${integer2}, ${integer1}, ${integer3}`;
      } else if (integer3 <= integer2 && integer3 < integer1 && integer2 <= integer1) {
        printInteger = `${integer3}, ${integer2}, ${integer1}`;
      } else if (integer3 <= integer1 && integer3 < integer2 && integer1 <= integer2) {
        printInteger = `${integer3}, ${integer1}, ${integer2}`;
      } else {
        printInteger = `${integer1}, ${integer3}, ${integer2}`;
      }

    document.getElementById('resultInteger').innerHTML = printInteger;
}

//EXERCISE 2
document.getElementById('btnHello').onclick = function(){
    var hello = document.getElementById('hello').value;
    var printHello;
    
    switch(hello){
        case 'B':
        case 'Bố':
            printHello = 'Hello Bố'
            break;
        case 'M':
        case 'Mẹ':
            printHello = 'Hello Mẹ'
            break;
        case 'A':
        case 'Anh':
            printHello = 'Hello Anh Trai'
            break;
        case 'E':
        case 'Em':
            printHello = 'Hello Em Gái'
            break;
        default:
            printHello = 'Hello ' + hello;
    }
    
    document.getElementById('resultHello').innerHTML = printHello;
}

//EXERCISE 3
document.getElementById('btnIntegerNumber').onclick = function(){
    var integerNumber1 = +document.getElementById('integerNumber1').value;
    var integerNumber2 = +document.getElementById('integerNumber2').value;
    var integerNumber3 = +document.getElementById('integerNumber3').value;
    var evenNumber = 0; //Số chẵn
    var oddNumber = 0; //Số lẽ

    if(parseInt(integerNumber1) % 2 === 0){
        evenNumber++;
    }else{
        oddNumber++;
    }

    if(parseInt(integerNumber2) % 2 === 0){
        evenNumber++;
    }else{
        oddNumber++;
    }

    if(parseInt(integerNumber3) % 2 === 0){
        evenNumber++;
    }else{
        oddNumber++;
    }
 
    document.getElementById('resultIntegerNumber').innerHTML = `
        Số chẵn có: ${evenNumber} số
        <br> 
        Số lẽ có: ${oddNumber} số
    `
}

//EXERCISE 4
document.getElementById('btnEdge').onclick = function(){
    let edge1 = document.getElementById('edge1').value * 1;
    let edge2 = document.getElementById('edge2').value * 1;
    let edge3 = document.getElementById('edge3').value * 1;

    if (edge1 + edge2 > edge3 || edge1 + edge3 > edge2 || edge2 + edge3 > edge1) {
      if (edge1 === edge2 && edge2 === edge3) {
        resultEdge = `Đây là tam giác đều.`;
      } else if (edge1 === edge2 || edge1 === edge3 || edge2 === edge3) {
        resultEdge = `Đây là tam giác cân.`;
      } else if (
        Math.pow(edge1, 2) === Math.pow(edge2, 2) + Math.pow(edge3, 2) ||
        Math.pow(edge2, 2) === Math.pow(edge1, 2) + Math.pow(edge3, 2) ||
        Math.pow(edge3, 2) === Math.pow(edge2, 2) + Math.pow(edge1, 2)
      ) {
        resultEdge = `Đây là tam giác vuông.`;
      } else {
        resultEdge = `Đây là tam giác thường.`;
      }
    } else {
      arlet('Đây không phải là một tam giác. Vui lòng nhập đúng độ dài cạnh tam giác!!');
    }
    
    document.getElementById('resultEdge').innerHTML = resultEdge;
  }
  
  