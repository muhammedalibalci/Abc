import React from 'react'
import Header from './layout/header/Header'
import './App.css'
import { connect } from 'react-redux'
function App(props) {
    return (
        <div >
            <Header />
            {props.children}
        </div>
    )
}


const mapStateToProps = state => ({
    loading: state.product.loading
});
export default connect(
    mapStateToProps,
)(App);
