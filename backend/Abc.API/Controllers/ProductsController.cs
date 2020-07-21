using Abc.API.Errors;
using Abc.API.Helpers;
using Abc.Core.Entities;
using Abc.Core.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Abc.API.Controllers
{
    [Route("api/{controller}")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private IProductService _productService;
        private IMapper _mapper;
        [Obsolete]
        private readonly IHostingEnvironment _hostingEnvironment;

        [Obsolete]
        public ProductsController(IProductService productService, IMapper mapper, IHostingEnvironment hostingEnvironment)
        {
            _productService = productService;
            _mapper = mapper;
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpGet("{id}/category")]
        public async Task<ActionResult<IReadOnlyList<Product>>> GetAll([FromRoute] int id)
        {
            return Ok(await _productService.GetAll(id));
        }


        [HttpGet("productDetail/{id}")]
        public async Task<ActionResult<IReadOnlyList<Product>>> GetAllProductDetails([FromRoute] int id)
        {
            return Ok(await _productService.GetAllProductDetailsByCategoryId(id));
        }

        [HttpGet("{id}")]
        [Obsolete]
        public async Task<ActionResult<Product>> Get([FromRoute] int id)
        {
            Product product = await _productService.Get(id);

            if (product == null)
                return NotFound(new APIResponse(404));

            return Ok(product);
        }

        [HttpPost]
        public async Task<ActionResult<Product>> AddProduct([FromBody] Product product)
        {
            return Ok(await _productService.Add(product));
        }

        [HttpPut]
        public async Task<ActionResult<Product>> UpdateProduct([FromBody] Product product)
        {
            return Ok(await _productService.Update(product));
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Product>> DeleteProduct([FromRoute] int id)
        {
            Product product = await _productService.Delete(id);

            if (product == null)
                return NotFound(new APIResponse(404));

            return Ok(product);
        }


    }
}
