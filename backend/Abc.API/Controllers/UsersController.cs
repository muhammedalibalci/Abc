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
using Microsoft.EntityFrameworkCore;

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
            var user = await _userManager.Users.Include(x => x.Addresses)
                .SingleOrDefaultAsync(x => x.Id == id);

            var userDto = _mapper.Map<UserDto>(user);

            return userDto;
        }



        [HttpPost("address")]
        public async Task<ActionResult<bool>> AddAddress([FromBody] Address address)
        {
            var userId = HttpContext.User.Identity.Name;

            address.UserId = userId;
            address.IsDeleted = false;

            await _unitOfWork.Repository<Address>().Add(address);

            return true;
        }
        [HttpDelete("{id}/address")]
        public async Task<ActionResult<bool>> DeleteAddress([FromRoute] int id)
        {
            var address = await _unitOfWork.Repository<Address>().GetByIdAsync(id);
            address.IsDeleted = true;
            await _unitOfWork.Repository<Address>().Update(address);

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
        public async Task<ActionResult<IReadOnlyList<Address>>> GetAddress()
        {
            var userId = HttpContext.User.Identity.Name;

            User user = _userManager.Users
                .Include(x => x.Addresses)
                .Where(x => x.Id == userId)
                .FirstOrDefault();

            if (user.Addresses.Count == 0)
            {
                return NotFound(new APIResponse(404, "User hasn't the address"));
            }

            AddressSpecification spec = new AddressSpecification(userId);

            var addresses = await _unitOfWork.Repository<Address>().ListAsync(spec);

            if (addresses == null)
            {
                return NotFound(new APIResponse(404, "User hasn't the address"));
            }

            return Ok(addresses);
        }
    }
}
