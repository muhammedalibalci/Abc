import React from 'react'
import Header from './layout/header/Header'
import './App.css'
import { Footer } from './layout/footer/Footer'
import { connect } from 'react-redux'
function App(props) {
    return (
        <div >
            <Header />
            {props.children}
            {!props.loading && <Footer />}
        </div>
    )
}


const mapStateToProps = state => ({
    loading: state.product.loading
});
export default connect(
    mapStateToProps,
)(App);
