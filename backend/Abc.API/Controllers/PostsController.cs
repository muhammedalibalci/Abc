using Abc.API.DTO;
using Abc.API.Errors;
using Abc.Core.Entities;
using Abc.Core.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Abc.API.Controllers
{
    [Route("api/{controller}")]
    [ApiController]
    public class PostsController: ControllerBase
    {
        private IPostService _postService;
        private IMapper _mapper;
        public PostsController(IPostService postServce, IMapper mapper)
        {
            _postService = postServce;
            _mapper = mapper;
        }

        [HttpGet]
        public async  Task<ActionResult<IReadOnlyList<Post>>> GetAll()
        {
            return Ok(await _postService.GetAll());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Post>> Get([FromRoute] int id)
        {
           Post post = await _postService.Get(id);

            if (post == null)
                return NotFound(new APIResponse(404));

            return Ok(post);
        }


        [HttpPost]
        public async Task<ActionResult<Post>> AddPost([FromBody] Post post)
        {
            return Ok(await _postService.Add(post));
        }

        [HttpPut]
        public async Task<ActionResult<Post>> UpdatePost([FromBody] Post post)
        {
            return Ok(await _postService.Update(post));
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Post>> AddPost([FromRoute] int id)
        {
            Post post = await _postService.Delete(id);


            if (post == null)
                return NotFound(new APIResponse(404));


            return Ok(post);
        }


    }
}
