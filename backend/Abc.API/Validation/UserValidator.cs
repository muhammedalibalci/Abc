using Abc.API.DTO;
using Abc.Core.Entities;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Abc.API.Validation
{
    public class UserValidator : AbstractValidator<RegisterDto>
    {
        public UserValidator()
        {
            RuleFor(c => c.Name).NotEmpty().WithMessage("First name must be filled out");
            RuleFor(c => c.LastName).NotEmpty().WithMessage("Last name must be filled out");
            RuleFor(c => c.Password).NotEmpty().WithMessage("Password name must be filled out")
                .Must(d => d.Length >= 6).WithMessage("Passowrd must be 6 to 20 character")
                .Matches("[A-Z]").WithMessage("Should have at least one upper case")
            .Matches("[a-z]").WithMessage("Should have at least one lower case")
            .Matches("[0-9]").WithMessage("Should have at least one number")
            .Matches("[^a-zA-Z0-9]").WithMessage("Should have at least one special character");

            RuleFor(c => c.Email).NotEmpty().WithMessage("Email name must be filled out")
                .EmailAddress().WithMessage("A valid email address is required");
        }
    }
}
