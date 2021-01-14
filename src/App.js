import './App.scss';
import { useState } from "react";// para usar estado useState(hooks)
import Courses from './components/Courses';
import Search from './components/Search';
function App() {

  // Estas podrian pasarse como props, pero es mejor hacerlo como objeto en este caso( por que son muchas)
  const courses = [
    {
      name: 'HTML y CSS',
      color: '#2FA4AB',
      img: 'https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/html-css.png',
      desc: 'Aprendé a estructurar páginas web con HTML y desatá todo su potencial visual con CSS siguiendo los estándares de la industria'
    },
    {
      name: 'javascript',
      color: '#DE9103',
      img: 'https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/javascript.png',
      desc: 'Aprendé a programar junto al lenguaje que domina el mundo del desarrollo web'

    },
    {
      name: 'Terminal',
      color: 'rgb(113, 44, 125)',
      img: 'https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/terminal.png',
      desc: 'La terminal es una herramienta esencial para programar, en este curso aprendé sus conceptos básicos'
    },
    {
      name: 'Git y Github',
      color: 'rgb(15, 29, 68)',
      img: 'https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/git.png',
      desc: 'La herramienta principal para compartir código, en este curso te enseñamos todo lo que tenés que saber sobre crear y compartir repositorios'
    },
  ]

  const [inputValue, setInputValue] = useState(courses);

  function handleInputCourses(value) {//Function Evento para input//FUNC SIN EJECUTAR PASADA POR PROPS AL HIJE
    //const { value } = e.target;// agarro el valor

    if (value == '') {
      setInputValue(courses);// si el input serch esta vacio, que se muestren todos los cursos del array de objetos
    }

    const filtered = courses.filter(course => {
      return course.name.toLowerCase().includes(value.toLowerCase());
    });// filtra los nombres del array de objetos courses(transform a  minuscula)
    // y de esos nombres filtramos lo que de true del include,en caso que lo del input combine con algo del array
    // si el include da false, no se filtrara nada
    // devueklve un array de objetos en este caso( o nada si nada combina en la)

    setInputValue(filtered);
  }// end function handleInputCourses




  return (
    <div className="App">
      <div className="inputWrapper">
        <Search classProp="inputCards" handleCallback={handleInputCourses} /> {/*paso funcion a Hije */}
      </div>

      <div className="cardsContainer">
        {/* aca van los cursos */}
        <Courses data={inputValue} />
      </div>
    </div >

  );
}

export default App;
