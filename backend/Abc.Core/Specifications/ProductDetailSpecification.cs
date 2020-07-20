using Abc.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Abc.Core.Specifications
{
   public class ProductDetailSpecification : BaseSpecification<ProductDetail>
    {
        public ProductDetailSpecification(int id)
        {
            AddInclude(x => x.Product);
            AddWhere(x => x.Product.CategoryId == id);
        }
    }
}
