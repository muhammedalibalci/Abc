import React from 'react'
import { connect } from 'react-redux';
import { CheckBox } from '../common/input/CheckBox';

const ProductFilterSize = ({ productDetails, sizeClick, size ,onClickCheckBox }) => {
    return (
        <div >
            <CheckBox
                productDetails = {productDetails}
                click = {onClickCheckBox}
                state = {size}
                title = "Size"
                name='size'
            />
        </div>
    )
}

const mapStateToProps = state => ({
    productDetails: state.product.productsDetails
});
export default connect(
    mapStateToProps,
)(ProductFilterSize);