using Abc.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Abc.Core.Specifications
{
    public class PostSpecification : BaseSpecification<Post>
    {

        public PostSpecification(PostSpecParams postParams)

        {
            AddInclude(x => x.Category);
            AddInclude(x => x.User);
            AddOrderBy(x => x.CreatedDate);
            ApplyPaging(postParams.PageSize * (postParams.PageIndex - 1), postParams.PageSize);

           
        }
    }
}
