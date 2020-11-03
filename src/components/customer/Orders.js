import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCustomer } from '../../actions/customerAction'
import Axios from 'axios';
import { OrderItem } from './OrderItem';
import Spinner from '../common/spinner/Spinner';
import { URL } from '../../utils/apiUrl';
class Orders extends Component {
    state = {
        orders: [],
        loading:true
    }


    async componentDidMount() {
        const token = localStorage.getItem('token')
        await Axios.get(URL, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => {
            this.setState({
                orders: [...res.data],
                loading:false
            })
        }).catch(err=>{
            this.setState({
                loading:false
            })
        })
    }

    render() {
        const {orders,loading} = this.state
        return (
            <div>
                <div onClick={() => this.props.history.push('/my-account')}>
                    <i className="fa fa-arrow-circle-left"></i>
                </div>
                {loading && <Spinner classNames="spinner1"/>}
                {
                    orders.map(order => {
                        return <OrderItem key={order.id} order={order} />
                    })
                }
            </div>
        )
    }
}
const mapStateToProps = state => ({
    customer: state.customer
});
export default connect(
    mapStateToProps,
    { getCustomer }
)(Orders);