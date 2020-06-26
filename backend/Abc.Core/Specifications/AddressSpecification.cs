using Abc.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Abc.Core.Specifications
{
    public class AddressSpecification : BaseSpecification<Address>
    {
        public AddressSpecification(string id)
        {
            AddWhere(x => x.UserId == id);
        }
    }
}
