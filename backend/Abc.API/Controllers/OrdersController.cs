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



        [HttpGet] 
        public async Task<ActionResult<IReadOnlyList<OrderItem>>> GetAll()
        {
            var userId = HttpContext.User.Identity.Name;

            return Ok(await _orderService.GetAll(userId));
        }



        [HttpPost]
        public async Task<ActionResult<Order>> AddOrder([FromBody] OrderDTO orderDTO)
        {

            var order = await _orderService.Add(orderDTO.UserId, orderDTO.AddressId);

            return Ok(order);
        }
    }
}
