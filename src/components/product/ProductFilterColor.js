import React from 'react'
import { connect } from 'react-redux';
import { CheckBox } from '../common/input/CheckBox';

const ProductFilterColor = ({ productDetails ,color,onClickCheckBox}) => {
    return (
        <div >
             <CheckBox
                productDetails = {productDetails}
                click = {onClickCheckBox}
                state = {color}
                title = "Color"
                name='color'
            />
        </div>
    )
}

const mapStateToProps = state => ({
    productDetails: state.product.productsDetails
});
export default connect(
    mapStateToProps,
)(ProductFilterColor);