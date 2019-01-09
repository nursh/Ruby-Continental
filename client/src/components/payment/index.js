import React, { Component } from 'react';
import { connect } from 'react-redux';


import Header from '../header';
import card from '../../img/card.svg';
import Checkout from './Checkout';
import EmptyComponent from '../EmptyComponent';
import { calcTotal } from '../../actions';

class Payment extends Component {

  componentDidMount() {
    this.props.calcTotal(this.props.items);
  }

  render() {
    return (
      <div className="payment">
        <Header activeLink={2} />
        {
          (this.props.items.length < 1)
            ? <EmptyComponent
                heading="Payment"
                img={true}
                src=""
                message="No Item(s) have been ordered"
              />
            : <PaymentForm total={this.props.total} />
        }
      </div>
    )
  }
}

const PaymentForm = ({ total }) => (
  <div>
    <h2 className="page__heading">
      <img src={card} alt="Payment card" className="page__heading-image" />
      <span>Payment</span> 
    </h2>
    <div className="content content--margin">
      <h3 className="payment__total">Total - &#8358;{total}</h3>
      <Checkout total={total} />
    </div>
  </div>
);

const mapStateToProps = ({ items, total }) => ({ items, total });
export default connect(mapStateToProps, { calcTotal })(Payment);