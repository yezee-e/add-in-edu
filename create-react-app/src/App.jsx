import { useRef, useState } from 'react';
import { Table } from 'react-bootstrap';
import './App.css';
import CountUp from './CountUp';
import ListExample from './ListExample';

function App() {
  const [studentList, setStudentList] = useState([]);

  const Name = useRef();
  const Kor = useRef();
  const Eng = useRef();
  const Math = useRef();

  const AddStudents = (e) => {
    const newStudent = {
      name: Name.current.value,
      kor: Kor.current.value,
      eng: Eng.current.value,
      math: Math.current.value,
    };

    setStudentList([...studentList, newStudent]);
    Name.current.value = '';
    Kor.current.value = '';
    Eng.current.value = '';
    Math.current.value = '';
  };

  const modifyStudent = (list) => {
    const newName = window.prompt(
      `${list.name}을 수정시겠습니까?`,
      '새로운 이름을 입력하세요'
    );
    if (newName) {
      setStudentList.replace(list.name, newName);
    } else {
      return;
    }
  };

  const deleteStudent = (list) => {
    const userAnswer = window.confirm(`${list.name}을 삭제하시겠습니까?`);
    if (userAnswer) {
      setStudentList(studentList.replace(list.name, userAnswer));
      console.log('Df', studentList);
    }
    return;
  };

  return (
    <div className='App'>
      <div>
        이름: <input type='text' ref={Name} />
        국어:
        <input type='text' ref={Kor} />
        영어:
        <input type='text' ref={Eng} />
        수학:
        <input type='text' ref={Math} />
        <button onClick={() => AddStudents()}>추가</button>
      </div>
      <Table striped bordered hover className='table-area'>
        <thead>
          <tr>
            <th>이름</th>
            <th>국어</th>
            <th>엉어</th>
            <th>수학</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student, i) => (
            <tr key={student.name}>
              <td>
                {student.name}
                <button
                  className='profile-btn'
                  onClick={() => {
                    modifyStudent(student);
                  }}
                >
                  ✏️
                </button>
                <button
                  className='profile-btn'
                  onClick={() => deleteStudent(student)}
                >
                  🗑️
                </button>
              </td>
              <td>{student.kor}</td>
              <td>{student.eng}</td>
              <td>{student.math}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <CountUp />
      <ListExample />
    </div>
  );
}

export default App;
