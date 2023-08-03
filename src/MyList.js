import React, { Fragment } from 'react'

export default function MyList() {

    // return (
    //     <>
    //         <>
    //             <li>Watermelon</li>
    //             <li>Apple</li>
    //             <li>Mango</li>
    //         </>
    //         <>
    //             <li>Mercedes</li>
    //             <li>BMW</li>
    //             <li>Kia</li>
    //         </>
    //     </ >
    // )

    return (
        <Fragment>
            <Fragment>
                <li>Watermelon</li>
                <li>Apple</li>
                <li>Mango</li>
            </Fragment>
            <Fragment>

                <li>Mercedes</li>
                <li>BMW</li>
                <li>Kia</li>
            </Fragment>
        </Fragment >
    )
}
