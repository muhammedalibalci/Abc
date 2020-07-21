import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getProductsByCategory } from '../../actions/productAction'
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
  
  componentDidMount() {
    this.props.getProductsByCategory()
    this.props.getCategories()
    this.props.getProductDetails()
  }


  handleOnClick = (e, cart,notify) => {
    e.preventDefault();
    const data = {
      Quantity: 1,
      ProductDetailId: cart.productDetails.map(item => item.id)[0]
    }

    this.props.addCartToBasket(data)
        .then((res)=>{notify()})
        .catch(err=>console.log(err))
  }

  render() {
    const notify = () => toast("Product Added Successfully !");
    const { products, loading } = this.props.product;
    let productDisplay;
    if (loading) {
      return <Spinner classNames="spinner1" />;
    } else {
      productDisplay = products.map(product => (
        <ProductItem
          key={product.id}
          handleOnClick={e => {
            this.handleOnClick(e, product,notify);
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
            <Categories />
            <ProductFilterSize />
            <ProductFilterColor />
            <button className="btn btn-filter w-100">Filter</button>
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
  { getProductsByCategory, getCategories, getProductDetails, addCartToBasket }
)(Products);