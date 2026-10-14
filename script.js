let students = [
  {id: 0, name: 'Satoru Gojo', program: 'Bachelor of Science in Information Technology'},
  {id: 1, name: 'Nanami Kento', program: 'Bachelor of Science in Information Technology'},
  {id: 2, name: 'Suguru Geto', program: 'Bachelor of Science in Information Technology'},
  {id: 3, name: 'Megumi Fushiguro', program: 'Bachelor of Science in Information Technology'},
  {id: 4, name: 'Choso Kamo', program: 'Bachelor of Science in Information Technology'},
];

const createStudent = (name, program) => {
const article = document.createElement('article');
const h2 = document.createElement('h2');
const p = document.createElement('p');
const button = document.createElement('button');

h2.innerHTML =  name;
p.innerHTML = program;
button.innerHTML = 'Delete';

article.append(h2);
article.append(p);
article.append(button);

article.classList.add("list-item");

return article;
}

const studentList = students.map((s) =>{
    const student = createStudent(s.name, s.program)
});

const listContainer =document.querySelector("#listContainer")
studentList.forEach((s) => {
    listContainer.append(s);
});




