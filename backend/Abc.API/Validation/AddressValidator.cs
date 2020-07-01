using Abc.Core.Entities;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Abc.API.Validation
{
    public class AddressValidator : AbstractValidator<Address>
    {
        public AddressValidator()
        {
            RuleFor(c => c.Address1).NotEmpty().WithMessage("Address must be filled out")
                .Must(d => d.Length <= 120).WithMessage("Address must be less than 120 character");
            RuleFor(c => c.City).NotEmpty().WithMessage("City name must be filled out");
            RuleFor(c => c.Phone).NotEmpty().WithMessage("Phone name must be filled out")
            .Matches("[0-9]").WithMessage("Should have just numbers")
                .Must(d => d.Length >= 6).WithMessage("Phone must be 6 to 20 character");
            RuleFor(c => c.PostCode).NotEmpty().WithMessage("PostCode name must be filled out");
            RuleFor(c => c.FullName).NotEmpty().WithMessage("Full Name name must be filled out");
        }
    }
}
