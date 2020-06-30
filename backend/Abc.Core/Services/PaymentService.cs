using Abc.Core.Entities;
using Abc.Core.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Stripe;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abc.Core.Services
{
    public class PaymentService : IPaymentService
    {
        private readonly ICartItemService _cartItemService;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IConfiguration _config;
        public PaymentService(
            ICartItemService cartItemService,
            IUnitOfWork unitOfWork,
            IConfiguration config)
        {
            _config = config;
            _unitOfWork = unitOfWork;
            _cartItemService = cartItemService;
        }

        public async Task<bool> CreateOrUpdatePaymentIntent(string userId)
        {
            StripeConfiguration.ApiKey = _config["StripeSettings:SecretKey"];

            var carts =  _cartItemService.GetAll(userId).Result;

            var service = new PaymentIntentService();

            int amount = 0;

            foreach (var item in carts)
            {
                amount += item.Quantity + item.ProductDetail.Product.Price;
            }


            var options = new PaymentIntentCreateOptions
            {
                Amount = amount * 100,
                Currency = "usd",
                PaymentMethodTypes = new List<string> { "card" }
            };
            await service.CreateAsync(options);

           
            return true;
        }

        public Task<Core.Entities.Order> UpdatePaymentOrderFailed(string paymentIntentId)
        {
            throw new NotImplementedException();
        }

        public Task<Core.Entities.Order> UpdatePaymentOrderSucceeded(string paymentIntentId)
        {
            throw new NotImplementedException();
        }
    }
}
