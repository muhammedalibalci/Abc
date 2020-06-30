﻿using Abc.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Abc.Core.Specifications
{
    public class ProductSpecification : BaseSpecification<Product>
    {

        public ProductSpecification(ProductSpecParams productParams,int id)

        {
            AddWhere(x => x.CategoryId == id);
            AddInclude(x => x.ProductDetails);
            ApplyPaging(productParams.PageSize * (productParams.PageIndex - 1), productParams.PageSize);

           
        }
        public ProductSpecification()
        {
            AddInclude(x => x.ProductDetails);
        }
    }
}
