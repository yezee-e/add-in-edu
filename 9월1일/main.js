const MemberJoinBtn = document.querySelector('.memberJoinBtn');
const CheckAll = document.querySelector('.check-all');
const Terms = document.querySelectorAll('.terms');

MemberJoinBtn.addEventListener('click', function () {
  console.log('b');
});

CheckAll.addEventListener('click', (e) => {
  Terms.forEach((term) => {
    term.checked = e.target.checked;
  });
});
