import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getProductsByCategory, getProductsByFilter } from '../../actions/productAction'
import { getProductDetails } from '../../actions/productAction'
import { getCategories } from '../../actions/categoryAction'
import { addCartToBasket } from '../../actions/basketAction'
import Spinner from '../common/spinner/Spinner'
import ProductItem from './ProductItem';
import Categories from './Categories';
import ProductFilterSize from './ProductFilterSize';
import ProductFilterColor from './ProductFilterColor';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Products extends Component {

  state = {
    currentCategory: "1",
    color: "all",
    size: "all",
  }


  componentDidMount() {
    this.props.getProductsByCategory()
    this.props.getCategories()
    this.props.getProductDetails()
  }


  handleOnClick = (e, cart) => {
    e.preventDefault();
    const data = {
      Quantity: 1,
      ProductDetailId: cart.productDetails.map(item => item.id)[0]
    }

    this.props.addCartToBasket(data)
      .then((res) => { this.notify() })
      .catch(err => console.log(err))
  }

  categoryClick = (id) => {
    this.setState({
      currentCategory: id
    })
    this.props.getProductsByCategory(id)
    this.props.getProductDetails(id)
  }

  onClickCheckBox = (value, name) => {
    this.setState({
      [name]: value
    })
  }
  onClickFilter =  () => {
    const { currentCategory, color, size } = this.state
     this.props.getProductsByFilter(currentCategory, size, color)
  }
  notify = () => toast("Product Added Successfully !");

  render() {
    const { products, loading } = this.props.product;
    const { currentCategory, size, color } = this.state

    let productDisplay;
    
    if (loading) {
      return <Spinner classNames="spinner1" />;
    } else {
      productDisplay = products.map(product => (
        <ProductItem
          key={product.id}
          handleOnClick={e => {
            this.handleOnClick(e, product);
          }}
          product={product}
        />
      ));
    }

    return (
      <div className="mb-5">
        <div className="text-center">
          <ToastContainer
            autoClose={2000}
            hideProgressBar={true} />
        </div>
        <h3 className="text-center mt-4 mb-4">Computers</h3>
        <div className="row">
          <div className="col-md-1 ml-4 ">

            <Categories
              currentCategory={currentCategory}
              categoryClick={this.categoryClick} />

            <ProductFilterSize
              size={size}
              onClickCheckBox={this.onClickCheckBox} />

            <ProductFilterColor
              color={color}
              onClickCheckBox={this.onClickCheckBox} />

            <button className="btn btn-filter w-100" onClick={this.onClickFilter}>Filter</button>
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
  product: state.product
});
export default connect(
  mapStateToProps,
  { getProductsByCategory, getCategories, getProductDetails, addCartToBasket, getProductsByFilter }
)(Products);