import React from 'react'
import { connect } from 'react-redux';

const ProductFilterColor = ({ productDetails }) => {
    return (
        <div >
            <h5>Color</h5>
            <div className="form-check" >
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">All</label>
            </div>
            {productDetails && productDetails.map(detail => {
                return (
                    <div className="form-check" key={detail.id}>
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                            style={{ borderColor: detail.color }} />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            {detail.color}
                        </label>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    productDetails: state.product.productsDetails
});
export default connect(
    mapStateToProps,
)(ProductFilterColor);