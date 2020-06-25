using Abc.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Abc.Core.Specifications
{
    public class CardItemSpecification : BaseSpecification<CartItem>
    {
        public CardItemSpecification(string id)
        {
            AddInclude(x => x.ProductDetail);
            AddInclude(x => x.ProductDetail.Product);
            AddWhere(x => x.UserId == id);
        }
    }
}
