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
        private UserManager<User> _userManager;
        public CartItemService(IUnitOfWork unitOfWork, UserManager<User> userManager)
        {
            _unitOfWork = unitOfWork;
            _userManager = userManager;
        }

        public Task<IReadOnlyList<CartItem>> GetAll(string userId)
        {
            var spec = new CardItemSpecification(userId);

            var cartItems = _unitOfWork.Repository<CartItem>().ListAsync(spec);

            return cartItems;
        }

        public async Task<CartItem> Insert(CartItem cartItem,string userId)
        {
            cartItem.UserId = userId;

            await _unitOfWork.Repository<CartItem>().Add(cartItem);

            return cartItem;
        }

       
    }
}
