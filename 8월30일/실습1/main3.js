const Btn = document.getElementsByClassName('btn');

const data = ['번호', '이름', '국어', '영어', '수학'];

function Student(number, name, kor, eng, math) {
  this.number = number;
  this.name = name;
  this.kor = kor;
  this.eng = eng;
  this.math = math;
}

let stu = [
  new Student(1, '예지', 40, 30, 70, 40),
  new Student(2, '은조', 40, 30, 40, 100),
  new Student(3, '정은', 90, 30, 40, 80),
];

var inputValue1 = document.getElementById('input1');
var inputValue2 = document.getElementById('input2');
var inputValue3 = document.getElementById('input3');
var inputValue4 = document.getElementById('input4');

function addNewNode() {
  let newNode = '';
  for (var i = 0; i < stu.length; i++) {
    newNode += '<tr>';
    newNode += `<td>${i + 1}</td>`;
    newNode += `<td>${stu[i].name}</td>`;
    newNode += `<td>${stu[i].kor}</td>`;
    newNode += `<td>${stu[i].eng}</td>`;
    newNode += `<td>${stu[i].math}</td>`;
    newNode += '</tr>';
  }
  return newNode;
}

function handleBtn(e) {
  // e.preventDefault();

  stu.push(
    new Student(
      4,
      inputValue1,
      Number(inputValue2),
      Number(inputValue3),
      Number(inputValue4)
    )
  );
  console.log('stu', stu);

  let num = 3;
  const TrData = document.getElementById('trData');
  const tbodyTag = document.createElement('tr');

  // tbodyTag.innerHTML = `<td>${(num += 1)}</td><td>${
  //   inputValue1.value
  // }</td><td>${inputValue2.value}</td><td>${inputValue3.value}</td><td>${
  //   inputValue4.value
  // }</td>`;
  // TrData.appendChild(tbodyTag);

  // TrData.appendChild(newNode);

  TrData.innerHTML = addNewNode();
  console.log('new', TrData);

  inputValue1.value = '';
  inputValue2.value = '';
  inputValue3.value = '';
  inputValue4.value = '';
}

document.write('<table class="table table-striped table-hover">');
document.write(' <thead>');
document.write(' <tr>');
for (let i = 0; i < data.length; i++) {
  document.write(`<th scope="col">${data[i]}</th>`);
}
document.write(' </tr>');
document.write(' </thead>');
document.write('  <tbody id="trData">');
document.write(addNewNode());
document.write('  </tbody>');
document.write(' </table>');
