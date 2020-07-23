using Abc.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Abc.Core.Interfaces
{
    public interface IProductRepository<Product> : IRepository<Product> where Product : BaseEntity
    {
        IQueryable<Product> GetAll(int categoryId);
    }
}
