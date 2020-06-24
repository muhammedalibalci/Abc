using Abc.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Abc.Core.Interfaces
{
    public interface IProductService
    {
        Task<IReadOnlyList<Product>> GetAll();
        Task<Product> Get(int id);
        Task<Product> Add(Product product);
        Task<Product> Delete(int id);
        Task<Product> Update(Product product);
    }
}
