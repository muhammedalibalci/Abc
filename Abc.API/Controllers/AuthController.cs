using Abc.API.DTO;
using Abc.API.Errors;
using Abc.Core.Entities;
using Abc.Core.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace Abc.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private ITokenService _tokenService;
        readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        public AuthController(
            ITokenService tokenService,
            UserManager<User> userManager,
            SignInManager<User> signInManager)
        {
            _tokenService = tokenService;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpGet("emailexists")]
        public async Task<ActionResult<bool>> CheckEmailExistsAsync([FromQuery] string email)
        {
            return await _userManager.FindByEmailAsync(email) != null;
        }


        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(AuthDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);

            if (user == null)
            {
                return Unauthorized(new APIResponse(401));
            }

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (!result.Succeeded)
            {
                return Unauthorized(new APIResponse(401));
            }

            return new UserDto
            {
                Id = user.Id,
                Token = _tokenService.CreateToken(user),
                Name = user.Name
            };
        }



        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {


            if (CheckEmailExistsAsync(registerDto.Email).Result.Value)
            {
                return new BadRequestObjectResult(new APIValidationError { Errors = new[] { "Email address is already in use" } });
            }

            var user = new User
            {
                Name = registerDto.Name,
                Email = registerDto.Email,
            };


            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (!result.Succeeded) return BadRequest(new APIResponse(400));

            return new UserDto
            {
                Id = user.Id,
                Name = registerDto.Name,
                Token = _tokenService.CreateToken(user),
            };

        }

    }
}
