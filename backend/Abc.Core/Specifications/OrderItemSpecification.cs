using Abc.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Abc.Core.Specifications
{
    public class OrderItemSpecification : BaseSpecification<OrderItem>
    {
        public OrderItemSpecification(int id)
        {
            AddInclude(x => x.ProductDetail);
            AddWhere(x => x.Id == id);
        }
    }
}
