using Abc.Core.Data;
using Abc.Core.Entities;
using Abc.Core.Interfaces;
using Abc.Core.Specifications;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;

namespace Abc.Core.Services
{
    public class ProductService : IProductService
    {
        private IUnitOfWork _unitOfWork;
        public ProductService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
      
        public async Task<Product> Get(int id)
        {
            ProductSpecification spec = new ProductSpecification(id);

            return await _unitOfWork.Repository<Product>().GetEntityWithSpec(spec);

        }

        public  List<Product> GetAll(int id,ProductFilter filter)
        {
            var query = _unitOfWork.Repository<Product>().GetTable(new Product());
            var productDetailTable =  _unitOfWork.Repository<ProductDetail>().GetTable(new ProductDetail());

            query = from o in query
                    where o.CategoryId == id
                    select o;

            if (String.IsNullOrEmpty(filter.Color) && String.IsNullOrEmpty(filter.Size))
            {
                return query.ToList();
            }

            if (filter.Color == "all")
                filter.Color = null;

            if (filter.Size == "all")
                filter.Size = null;

            if (!String.IsNullOrEmpty(filter.Color))
            {
                query = from p in query
                        join oi in productDetailTable on p.Id equals oi.ProductId
                        where oi.Color == filter.Color
                        select p;
            }

            if (!String.IsNullOrEmpty(filter.Size))
            {
                query = from p in query
                        join oi in productDetailTable on p.Id equals oi.ProductId
                        where oi.Size == filter.Size
                        select p;
            }
            return query.ToList();
        }

        public async Task<IReadOnlyList<ProductDetail>> GetAllProductDetailsByCategoryId(int categoryId)
        {
            ProductDetailSpecification spec = new ProductDetailSpecification(categoryId);

            var data = await _unitOfWork.Repository<ProductDetail>().ListAsync(spec);

            return data;
        }
        public  Task<Product> Add(Product post)
        {
            return _unitOfWork.Repository<Product>().Add(post);
        }

        public async Task<Product> Delete(int id)
        {
            Product product = await Get(id);

            if (product == null)
                return null;

            return await _unitOfWork.Repository<Product>().Delete(product);
        }

        public async Task<Product> Update(Product post)
        {
            var result =  await _unitOfWork.Repository<Product>().Update(post);
            await _unitOfWork.Complete();
            return result;
        }

        
    }
}
