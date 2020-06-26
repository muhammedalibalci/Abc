using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abc.API.DTO;
using Abc.API.Errors;
using Abc.Core.Entities;
using Abc.Core.Interfaces;
using Abc.Core.Specifications;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Abc.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private UserManager<User> _userManager;
        private IUnitOfWork _unitOfWork;
        private IMapper _mapper;
        public UsersController(UserManager<User> userManager, IMapper mapper, IUnitOfWork unitOfWork)
        {
            _userManager = userManager;
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<UserDto>> GetUser([FromRoute] string id)
        {
            var user = await _userManager.FindByIdAsync(id);

            var userDto = _mapper.Map<UserDto>(user);

            return userDto;
        }



        [HttpPost("address")]
        public async Task<ActionResult<bool>> AddAddress([FromBody] Address address)
        {
            var userId = HttpContext.User.Identity.Name;
            

            var result = await _unitOfWork.Repository<Address>().Add(address);

            User user = await _userManager.FindByIdAsync(userId);

            user.AddressId = result.Id;

            result.UserId = userId;

            await _userManager.UpdateAsync(user);

            return true;
        }
        [HttpPut("address")]
        public async Task<ActionResult<bool>> UpdateAddress([FromBody] Address address)
        {
            var userId = HttpContext.User.Identity.Name;


            await _unitOfWork.Repository<Address>().Update(address);
            await _unitOfWork.Complete();
            return true;
        }
        [HttpGet("address")]
        public async Task<ActionResult<Address>> GetAddress()
        {
            var userId = HttpContext.User.Identity.Name;

            User user = _userManager.Users.Where(x => x.Id == userId).FirstOrDefault();

            if (user.AddressId == null)
            {
                return NotFound(new APIResponse(404, "User hasn't the address"));
            }

            var address = await _unitOfWork.Repository<Address>().GetSpecByIdAsync(x => x.UserId == userId);

            if (address == null)
            {
                return NotFound(new APIResponse(404, "User hasn't the address"));
            }

            return address;
        }
    }
}
