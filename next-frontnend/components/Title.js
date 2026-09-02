'use client';

function Title({ collegeName, rollNumber, schoolName, rollNo }) {
    return (
        <div>
            <h1 style={{ fontSize: 40, color: "red" }} >{collegeName}</h1>
            <h1 style={{ fontSize: 40, color: "red" }} >{rollNumber}</h1>
            <h1 style={{ fontSize: 40, color: "red" }} >{schoolName}</h1>
            <h1 style={{ fontSize: 40, color: "red" }} >{rollNo}</h1>
        </div>
    )
}
export default Title