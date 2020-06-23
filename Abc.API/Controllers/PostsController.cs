using Abc.API.DTO;
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
        private IPostService _postServce;
        private IMapper _mapper;
        public PostsController(IPostService postServce, IMapper mapper)
        {
            _postServce = postServce;
            _mapper = mapper;
        }

        [HttpGet]
        public async  Task<ActionResult<IReadOnlyList<Post>>> GetAll()
        {
            return Ok(await _postServce.GetAll());
        }


        [HttpPost]
        public async Task<ActionResult<Post>> AddPost([FromBody] Post post)
        {
            return Ok(await _postServce.Add(post));
        }

        [HttpPut]
        public async Task<ActionResult<Post>> UpdatePost([FromBody] Post post)
        {
            return Ok(await _postServce.Update(post));
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Post>> AddPost([FromRoute] int id)
        {
            return Ok(await _postServce.Delete(id));
        }


    }
}
