using Abc.Core.Entities;
using Abc.Core.Interfaces;
using Abc.Core.Specifications;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Abc.Core.Services
{
    public class CartItemService : ICartItemService
    {
        private IUnitOfWork _unitOfWork;
        public CartItemService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }


        public Task<IReadOnlyList<CartItem>> GetAll(string userId)
        {
            var spec = new CardItemSpecification(userId);

            var cartItems = _unitOfWork.Repository<CartItem>().ListAsync(spec);

            return cartItems;
        }

        public async Task<CartItem> Insert(CartItem cartItem, string userId)
        {
            cartItem.UserId = userId;

            var result = await _unitOfWork.Repository<CartItem>().Add(cartItem);

            var productDetail = await _unitOfWork.Repository<ProductDetail>().GetByIdAsync((int)result.ProductDetailId);
            
            var product = await _unitOfWork.Repository<Product>().GetByIdAsync((int)productDetail.ProductId);
            
            productDetail.Product = product;
            
            result.ProductDetail = productDetail;
            return result;
        }

        public async Task<CartItem> Delete(int cartItemId)
        {
            CartItem cartItem = await _unitOfWork.Repository<CartItem>().GetByIdAsync(cartItemId);

            if (cartItem == null) { return null; }


            await _unitOfWork.Repository<CartItem>().Delete(cartItem);

            return cartItem;

        }
        public async Task<CartItem> Delete(CartItem cartItem)
        {
            await _unitOfWork.Repository<CartItem>().Delete(cartItem);

            return cartItem;

        }
        public Task<CartItem> Get(string userId)
        {
            return _unitOfWork.Repository<CartItem>().GetSpecByIdAsync(x => x.UserId == userId);
        }

        public async Task<CartItem> Update(CartItem cartItem)
        {
            var result =  await _unitOfWork.Repository<CartItem>().Update(cartItem);
            await _unitOfWork.Complete();
            return result;
        }
    }
}
