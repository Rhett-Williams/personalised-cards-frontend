import React, { useEffect, useState } from 'react';

type Props = {
  payload?: any
}

const OrderOnTheWay: React.FC = ({payload}: Props) => {

  return (
    <div>
      <div>Order on the way?</div>
      <div>{payload?.productType}</div>
      <img src={payload?.image ?? payload?.coverImage}/>
    </div>
  );
};

export default OrderOnTheWay;