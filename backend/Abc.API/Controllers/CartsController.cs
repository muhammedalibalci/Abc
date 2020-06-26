using Abc.API.Errors;
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
        [HttpGet]
        public async Task<ActionResult<CartItem>> GetAll()
        {

            var userId = HttpContext.User.Identity.Name;

            var order = await _cartItemService.GetAll(userId);

            return Ok(order);
        }

        [HttpPost]
        public async Task<ActionResult<CartItem>> AddCart([FromBody] CartItem cartItem)
        {

            var userId = HttpContext.User.Identity.Name;

            var cart = await _cartItemService.Insert(cartItem, userId);

            return Ok(cart);
        }
        [HttpPut]
        public async Task<ActionResult<CartItem>> UpdateCart([FromBody] CartItem cartItem)
        {
            var userId = HttpContext.User.Identity.Name;
            cartItem.UserId = userId;
            var result = await _cartItemService.Update(cartItem);
            return Ok(result);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<CartItem>> DeleteCart([FromRoute] int id)
        {

            var result = await _cartItemService.Delete(id);

            if (result == null)
            {
                return NotFound(new APIResponse(404, "Such an id not found"));
            }

            return Ok(result);
        }
    }
}
