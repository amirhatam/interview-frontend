import { MDBBtn, MDBCol, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'

export default function PickTimes(props) {
    return (
        <MDBRow>
            {
                props.timeList.map((e, i) => {
                    return (
                        <MDBCol className="col-1 my-5" key={i}>
                            <MDBBtn key={i} color="info">
                                {e.start.substring(10)}
                            </MDBBtn>
                        </MDBCol>
                    )
                })
            }
        </MDBRow>
    )
}
