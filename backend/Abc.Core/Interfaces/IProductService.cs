using Abc.Core.Data;
using Abc.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abc.Core.Interfaces
{
    public interface IProductService
    {
        List<Product> GetAll(int id, ProductFilter filter);
        Task<IReadOnlyList<ProductDetail>> GetAllProductDetailsByCategoryId(int categoryId);
        Task<Product> Get(int id);
        Task<Product> Add(Product product);
        Task<Product> Delete(int id);
        Task<Product> Update(Product product);
    }
}
