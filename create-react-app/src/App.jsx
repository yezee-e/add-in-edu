import { useRef, useState } from 'react';
import { Table } from 'react-bootstrap';
import './App.css';

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
          {studentList.map((student) => (
            <tr key={student.name}>
              <td>{student.name}</td>
              <td>{student.kor}</td>
              <td>{student.eng}</td>
              <td>{student.math}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
