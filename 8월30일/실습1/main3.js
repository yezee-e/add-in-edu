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

document.write('<table class="table table-color">');
document.write(' <thead>');
document.write(' <tr>');
for (let i = 0; i < data.length; i++) {
  document.write(`<th scope="col">${data[i]}</th>`);
}
document.write(' </tr>');
document.write(' <tr>');

for (var i = 0; i < stu.length; i++) {
  document.write(' <tr>');
  document.write(`<td>${stu[i].number}</td>`);
  document.write(`<td>${stu[i].name}</td>`);
  document.write(`<td>${stu[i].kor}</td>`);
  document.write(`<td>${stu[i].eng}</td>`);
  document.write(`<td>${stu[i].math}</td>`);
  document.write('</tr>');
}

document.write('     </tr>');
document.write('  </tbody>');
document.write(' </table>');
