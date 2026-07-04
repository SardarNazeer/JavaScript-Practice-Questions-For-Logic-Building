// function calcTotal()
// function CalculatePer()
// function calcGrade()
// function displayResult()

const calculateBtn = document.getElementById("calculateBtn");
const saveBtn = document.getElementById("saveBtn");

const totalMarks = document.getElementById("totalMarks");
const percentage = document.getElementById("percentage");
const grade = document.getElementById("grade");
const result = document.getElementById("result");

let students = [];

calculateBtn.addEventListener("click", calculateResult);

function calculateResult(){

    const math = Number(document.getElementById("math").value);
    const english = Number(document.getElementById("english").value);
    const science = Number(document.getElementById("science").value);
    const computer = Number(document.getElementById("computer").value);
    const urdu = Number(document.getElementById("urdu").value);

    let total = math + english + science + computer + urdu;

    let per = (total/500)*100;

    let g = "";
    let res = "";

    if(per>=90){
        g="A+";
    }
    else if(per>=80){
        g="A";
    }
    else if(per>=70){
        g="B";
    }
    else if(per>=60){
        g="C";
    }
    else if(per>=50){
        g="D";
    }
    else{
        g="F";
    }

    res = per>=50 ? "Pass" : "Fail";

    totalMarks.innerHTML = `${total} / 500`;
    percentage.innerHTML = `${per.toFixed(2)} %`;
    grade.innerHTML = g;
    result.innerHTML = res;
}

saveBtn.addEventListener("click",saveStudent);

function saveStudent(){

    const name = document.getElementById("studentName").value.trim();

    if(name==""){

        alert("Enter Student Name");

        return;

    }

    const math = Number(document.getElementById("math").value);
    const english = Number(document.getElementById("english").value);
    const science = Number(document.getElementById("science").value);
    const computer = Number(document.getElementById("computer").value);
    const urdu = Number(document.getElementById("urdu").value);

    const total = math + english + science + computer + urdu;
    const per = ((total/500)*100).toFixed(2);

    let grade,result;

    if(per>=90){
        grade="A+";
    }
    else if(per>=80){
        grade="A";
    }
    else if(per>=70){
        grade="B";
    }
    else if(per>=60){
        grade="C";
    }
    else if(per>=50){
        grade="D";
    }
    else{
        grade="F";
    }

    result = per>=50 ? "Pass":"Fail";

    const student = {

        name,
        math,
        english,
        science,
        computer,
        urdu,
        total,
        per,
        grade,
        result

    };

    if(editIndex==-1){

        students.push(student);

    }

    else{

        students[editIndex]=student;

        editIndex=-1;

    }

    localStorage.setItem("students",JSON.stringify(students));

    displayStudents();

    resetForm();

}

function displayStudents(list = students){

    const table = document.getElementById("studentTable");

    table.innerHTML="";

    list.forEach((student,index)=>{

        table.innerHTML+=`

        <tr>

        <td>${index+1}</td>

        <td>${student.name}</td>

        <td>${student.math}</td>

        <td>${student.english}</td>

        <td>${student.science}</td>

        <td>${student.computer}</td>

        <td>${student.urdu}</td>

        <td>${student.total}</td>

        <td>${student.per}%</td>

        <td>${student.grade}</td>

        <td>${student.result}</td>

        <td>

        <button onclick="editStudent(${index})">
        ✏️
        </button>

        <button onclick="deleteStudent(${index})">
        🗑️
        </button>

        </td>

        </tr>

        `;

    });

}
function deleteStudent(index){

    students.splice(index,1);

    displayStudents();

}

const searchInput = document.getElementById("searchInput");
const resetBtn = document.getElementById("resetBtn");

let editIndex = -1;

window.onload = function () {

    const data = localStorage.getItem("students");

    if(data){

        students = JSON.parse(data);

        displayStudents();

    }

}

function editStudent(index){

    editIndex=index;

    let s=students[index];

    studentName.value=s.name;
    math.value=s.math;
    english.value=s.english;
    science.value=s.science;
    computer.value=s.computer;
    urdu.value=s.urdu;

}

function deleteStudent(index){

    if(confirm("Delete Student?")){

        students.splice(index,1);

        localStorage.setItem("students",JSON.stringify(students));

        displayStudents();

    }

}

searchInput.addEventListener("keyup",()=>{

    let value=searchInput.value.toLowerCase();

    let filter=students.filter(student=>{

        return student.name.toLowerCase().includes(value);

    });

    displayStudents(filter);

});

resetBtn.addEventListener("click",resetForm);

function resetForm(){

    studentName.value="";
    math.value="";
    english.value="";
    science.value="";
    computer.value="";
    urdu.value="";

    totalMarks.innerHTML="0 / 500";
    percentage.innerHTML="0%";
    grade.innerHTML="-";
    result.innerHTML="-";

}