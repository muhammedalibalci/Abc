using Abc.API.DTO;
using Abc.API.Errors;
using Abc.API.Validation;
using Abc.Core.Entities;
using Abc.Core.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
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

            if (String.IsNullOrEmpty(loginDto.Email))
            {
                return BadRequest(new APIResponse(400, "email is not allowed to be empty"));
            }

            if (String.IsNullOrEmpty(loginDto.Password))
            {
                return BadRequest(new APIResponse(400, "password is not allowed to be empty"));
            }

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
                UserName = user.UserName
            };
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register([FromBody] RegisterDto registerDto)
        {

            var validation = new UserValidator();
            var resultValidaton = validation.Validate(registerDto).Errors;
            var errors = new Dictionary<string, string>();
            int count = 0;

            foreach (var validationFailure in resultValidaton)
            {
                var checkPrevValue = errors.Where(x => x.Key == validationFailure.PropertyName).FirstOrDefault();
                if (checkPrevValue.Value != null)
                {
                    count++;
                    errors.Add(validationFailure.PropertyName + count, validationFailure.ErrorMessage);
                }
                else
                {
                    errors.Add(validationFailure.PropertyName, validationFailure.ErrorMessage);
                }

            }
            if (errors.Count != 0)
            {
                return BadRequest(new APIResponse(400, errors));
            }

            if (CheckEmailExistsAsync(registerDto.Email).Result.Value)
            {
                errors.Add("Email", "Email address is already in use");
                return  BadRequest(new APIResponse(400,errors));
            }

            if (_userManager.FindByNameAsync(registerDto.UserName).Result != null)
            {
                errors.Add("Email",  "User name is already in use");
                return  BadRequest(new APIResponse(400, errors));
            }


            var user = new User
            {
                Name = registerDto.Name,
                Email = registerDto.Email,
                UserName = registerDto.UserName
            };

            var result = await _userManager.CreateAsync(user, registerDto.Password);
            if (!result.Succeeded) return BadRequest(new APIResponse(400));

            return new UserDto
            {
                Id = user.Id,
                Token = _tokenService.CreateToken(user),
            };

        }

    }
}
