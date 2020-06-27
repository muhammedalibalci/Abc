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

        [HttpPost]
        public string Demo()
        {
            var userId = HttpContext.User.Identity.Name;

            _paymentService.CreateOrUpdatePaymentIntent(userId);

            return "Demo";
        }


    }
}
