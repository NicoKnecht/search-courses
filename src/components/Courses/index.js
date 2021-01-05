import Course from '../Course';

function Courses(props) {
    return (
        <>
            {props.data.map((course, key) => {// itera  segun lo puesto en el input// el padre pasa por porp el valor del imput

                return <Course key={key} course={course} />;


            })}

        </>


    );
}

export default Courses;

