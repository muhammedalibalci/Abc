using Abc.API.Errors;
using Abc.Core.Entities;
using Abc.Core.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
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
        public ProductsController(IProductService productService, IMapper mapper)
        {
            _productService = productService;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Product>>> GetAll()
        {
            return Ok(await _productService.GetAll());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> Get([FromRoute] int id)
        {
            Product product = await _productService.Get(id);

            if (product == null)
                return NotFound(new APIResponse(404));

            return Ok(product);
        }


        [HttpPost]
        public async Task<ActionResult<Product>> AddPost([FromBody] Product post)
        {
            return Ok(await _productService.Add(post));
        }

        [HttpPut]
        public async Task<ActionResult<Product>> UpdatePost([FromBody] Product post)
        {
            return Ok(await _productService.Update(post));
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Product>> AddPost([FromRoute] int id)
        {
            Product product = await _productService.Delete(id);


            if (product == null)
                return NotFound(new APIResponse(404));


            return Ok(product);
        }


    }
}
