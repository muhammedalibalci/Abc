using Abc.Core.Entities;
using Abc.Core.Interfaces;
using Abc.Core.Specifications;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

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
            return await _unitOfWork.Repository<Product>().GetByIdAsync(id);
        }

        public async Task<IReadOnlyList<Product>> GetAll()
        {
            ProductSpecParams ProductSpecParams = new ProductSpecParams();
            var spec = new ProductSpecification(ProductSpecParams);
            var data = await _unitOfWork.Repository<Product>().ListAsync(spec);
           
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
            return await _unitOfWork.Repository<Product>().Update(post);
        }
    }
}
