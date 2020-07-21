import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Categories = ({ categories }) => {
    return (
        <div >
            <h5>Categories</h5>
            {categories && categories.map(category => {
                return (
                    <div className="form-check" key={category.id}>
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">{category.name}</label>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    categories: state.category.categories
});
export default connect(
    mapStateToProps,
)(Categories);