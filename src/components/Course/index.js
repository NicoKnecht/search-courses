function Course(props) {
    return (
        <div className="courseCard">
            <div className="imgWrapper" style={{//styles en linea
                backgroundColor: props.course.color,

            }}>
                <img className="courseImg" src={props.course.img} />
            </div>
            <div className="titleDescWrapper" >
                <h2 className="courseTitle" >{props.course.name}</h2>
                <p className="courseDescription" >{props.course.desc}</p>
            </div>
        </div >
    )
}

export default Course;