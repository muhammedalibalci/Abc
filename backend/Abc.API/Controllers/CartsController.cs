using Abc.Core.Entities;
using Abc.Core.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Abc.API.Controllers
{
    [Route("api/{controller}")]
    [ApiController]
    public class CartsController : ControllerBase
    {
        private ICartItemService _cartItemService;
        private UserManager<User> _userManager;


        public CartsController(ICartItemService cartItemService, UserManager<User> userManager)
        {
            _cartItemService = cartItemService;
            _userManager = userManager;
        }


        [HttpPost]
        public async Task<ActionResult<CartItem>> AddOrder([FromBody] CartItem cartItem)
        {

            var userId = HttpContext.User.Identity.Name;
            var order = await _cartItemService.Insert(cartItem, userId);
            return Ok();
        }
    }
}
