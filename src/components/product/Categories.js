import React from 'react'
import { connect } from 'react-redux';
import Spinner from '../common/spinner/Spinner';

const Categories = ({ category, currentCategory,categoryClick }) => {
    const { categories, loading } = category
    let categoriesDisplay;
    const handleFormChange = () => {}
    if (loading) {
        return <Spinner classNames="spinner1" />;
    } else {
        categoriesDisplay = (
            categories && categories.map(category => {
                return (
                    <div className="form-check" key={category.id}>
                        <input
                            type="checkbox"
                            checked={currentCategory == category.id}
                            value={category.id}
                            onChange={()=>categoryClick(category.id) || handleFormChange}
                            className="form-check-input"
                            id="exampleCheck1" />
                        <label
                            className="form-check-label"
                            htmlFor="exampleCheck1">{category.name}</label>
                    </div>
                )
            })
        )
    }



    return (
        <div >
            <h5>Categories</h5>
            {categoriesDisplay}
            <hr />
        </div>
    )
}

const mapStateToProps = state => ({
    category: state.category
});
export default connect(
    mapStateToProps,
)(Categories);