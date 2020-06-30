using Abc.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Abc.Core.Specifications
{
    public class OrderItemSpecification : BaseSpecification<OrderItem>
    {
        public OrderItemSpecification(string id)
        {
            AddInclude(x => x.ProductDetail);
            AddInclude(x => x.ProductDetail.Product);
            AddInclude(x => x.Order);
            AddWhere(x => x.Order.UserId == id);
        }
    }
}
