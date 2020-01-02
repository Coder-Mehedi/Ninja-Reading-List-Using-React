import React, { useState } from 'react'

const Calculator = () => {
    const [total, setTotal ] = useState(0)
    const [points, setPoints] = useState([
        {point: '0.0', grade: ''},
        {point: '5.0', grade: 'A+'},
        {point: '4.0', grade: 'A'},
        {point: '3.5', grade: 'A-'},
        {point: '3.0', grade: 'B'}
    ])

    const [subjects, setSubjects] = useState([
        {id: 1, label: 'Bangla'},
        {id: 2, label: 'English'},
        {id: 3, label: 'Science'},
        {id: 4, label: 'Math'}
    ])  
    const [marks, setMarks] = useState(
        {Bangla: 0, English: 0, Science: 0, Math: 0}
    )

    const handleSubmit = () => {
        const grandTotal = parseFloat(marks.Bangla) + parseFloat(marks.English) + parseFloat(marks.Science) 
        + parseFloat(marks.Math)
        setTotal(grandTotal)

    }


    return ( 
        <div>
            {total}
            {subjects.map(subject => (
                <div key={subject.id}>
                    <label >{ subject.label }</label>
                    <select 
                    className="custom-select"
                    onChange={e => setMarks({...marks, [e.target.id]: e.target.value })} id={subject.label}>
                        {points.map(point => (
                            <option value={ point.point } key={ point.point }>{ point.grade }</option>
                        ))}
                    </select>

                </div>
                )
            )}
            <div className="mx-auto w-100 center">
                <button className="btn mt-2 w-75 btn-info" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
     );
}
 
export default Calculator;