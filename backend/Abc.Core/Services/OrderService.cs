using Abc.Core.Entities;
using Abc.Core.Interfaces;
using Abc.Core.Specifications;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abc.Core.Services
{
    public class OrderService : IOrderService
    {

        private IUnitOfWork _unitOfWork;
        private UserManager<User> _userManager;
        public OrderService(IUnitOfWork unitOfWork, UserManager<User> userManager)
        {
            _unitOfWork = unitOfWork;
            _userManager = userManager;
        }

        public async Task<Order> Add(string userId, int addressId)
        {
            var spec = new CardItemSpecification(userId);

            var cartItems = await _unitOfWork.Repository<CartItem>().ListAsync(spec);

            var user = await _userManager.FindByIdAsync(userId);


            if (!cartItems.Any() || user == null) { return null; }


            Order order = new Order
            {
                UserId = user.Id,
                AddressId = user.AddressId,
                User = user,
                Amount = 1,
                Status = "InProgress"
            };

            var newOrder =  await _unitOfWork.Repository<Order>().Add(order);

            var items = new List<OrderItem>();

            foreach (var item in cartItems)
            {
                var productItem = await _unitOfWork.Repository<ProductDetail>().GetByIdAsync((int)item.ProductDetail.ProductId);
                var orderItem = new OrderItem();
                orderItem.OrderId = newOrder.Id;
                orderItem.Quantity = item.Quantity;
                orderItem.ProductDetailId = item.ProductDetailId;
                await _unitOfWork.Repository<OrderItem>().Add(orderItem);
                items.Add(orderItem);
            }

            return order;
        }



    }
}
