using Abc.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Abc.Core.Specifications
{
    public class ProductSpecification : BaseSpecification<Product>
    {

        public ProductSpecification(ProductSpecParams productParams)

        {
            AddInclude(x => x.Category);
            ApplyPaging(productParams.PageSize * (productParams.PageIndex - 1), productParams.PageSize);

           
        }
    }
}
