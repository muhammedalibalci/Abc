using Abc.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Abc.Core.Interfaces
{
    public interface IPaymentService
    {
        Task<bool> CreateOrUpdatePaymentIntent(string basketId);
        Task<Order> UpdatePaymentOrderSucceeded(string paymentIntentId);
        Task<Order> UpdatePaymentOrderFailed(string paymentIntentId);
    }
}
