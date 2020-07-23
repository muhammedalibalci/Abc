using Abc.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Abc.API.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class PaymentsController : ControllerBase
    {
        private IPaymentService _paymentService;
        public PaymentsController(IPaymentService paymentService)
        {
            _paymentService = paymentService;
        }

        [HttpPost("{id}")]
        public async Task<string> Payment([FromRoute] string id)
        {
            var result = await _paymentService.CreateOrUpdatePaymentIntent(id);
            if (result)
            {
                return "Payment Successfully";
            }
            return "There is a error in while payment";
        }


    }
}
