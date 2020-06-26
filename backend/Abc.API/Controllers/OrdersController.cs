﻿using Abc.API.DTO;
using Abc.Core.Entities;
using Abc.Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Abc.API.Controllers
{
    [Route("api/{controller}")]
    [ApiController]
    public class OrdersController : ControllerBase
    {

        private IOrderService _orderService;
        private UserManager<User> _userManager;


        public OrdersController(IOrderService orderService, UserManager<User> userManager)
        {
            _orderService = orderService;
            _userManager = userManager;
        }


        [HttpPost("{id}")]
        public async Task<ActionResult<Order>> AddOrder([FromRoute] int id)
        {

            var userId = HttpContext.User.Identity.Name;
            var order = await _orderService.Add( userId, id);

            return Ok(order);
        }
    }
}
