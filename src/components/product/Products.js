import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getProductsByCategory } from '../../actions/productAction'
import { getProductDetails } from '../../actions/productAction'
import { getCategories } from '../../actions/categoryAction'
import Spinner from '../common/spinner/Spinner'
import ProductItem from './ProductItem';
import Categories from './Categories';
import ProductFilterSize from './ProductFilterSize';
import ProductFilterColor from './ProductFilterColor';


class Products extends Component {
  state = {
    volume: 0
  }
  componentDidMount() {
    this.props.getProductsByCategory()
    this.props.getCategories()
    this.props.getProductDetails()
  }


  handleOnChange = (value) => {
    this.setState({
      volume: value
    })
  }

  render() {
    const { products, loading, errors } = this.props.products;
    let productDisplay;
    if (loading) {
      return <Spinner classNames="spinner1" />;
    } else {
      productDisplay = products.map(product => (
        <ProductItem
          key={product.id}
          handleOnClick={e => {
            this.handleOnClick(e, product._id, product.stock);
          }}
          product={product}
        />
      ));
    }


    return (
      <div className="mb-5">
        <h3 className="text-center mt-4 mb-4">Computers</h3>
        <div className="row">
          <div className="col-md-1 ml-4 ">
            <Categories />
            <ProductFilterSize />
            <ProductFilterColor />
          </div>
          <div className="col-md-10">
            <section className="product-container">{productDisplay}</section>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.product
});
export default connect(
  mapStateToProps,
  { getProductsByCategory, getCategories, getProductDetails }
)(Products);