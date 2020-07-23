import React from 'react'

export const CheckBox = ({ productDetails, click, state, title, name }) => {
    const handleFormChange = () => { }
    return (
        <div >
            <h5>{title}</h5>
            <div className="form-check" >
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    checked={state === "all"}
                    value="all"
                    onChange={() => click("all",name) || handleFormChange}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">All</label>
            </div>
            {productDetails && [...new Map(productDetails.map(item => [item[name], item])).values()].map(detail => {
                return (
                    <div className="form-check" key={detail.id}>
                        <input
                            type="checkbox"
                            className="form-check-input"
                            checked={state === detail[name]}
                            onChange={() => click(detail[name], name) || handleFormChange}
                            value={detail.id}
                            id="exampleCheck1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="exampleCheck1">{detail[name]}</label>
                    </div>
                )
            })}
        </div>
    )
}
