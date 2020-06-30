using Abc.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Abc.Core.Specifications
{
    public class OrderSpecification : BaseSpecification<Order>
    {
        public OrderSpecification(string id)
        {
            AddInclude(x => x.User);
            AddInclude(x => x.Address);
            AddWhere(x => x.UserId == id);
        }
    }
}
