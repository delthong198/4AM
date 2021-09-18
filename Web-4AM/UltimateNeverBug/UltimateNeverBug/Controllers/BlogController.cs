using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UltimateNeverBug.Models;
using UltimateNeverBug.Models.Repository;

namespace UltimateNeverBug.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly IDataRepository<Blog> _dataRepository;
        public BlogController(IDataRepository<Blog> dataRepository)
        {
            _dataRepository = dataRepository;
        }
        // GET: api/Blog
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Blog> blogs = _dataRepository.GetAll();
            return Ok(blogs);
        }
        // GET: api/Blog/5
        [HttpGet("{id}")]
        public IActionResult Get(long id)
        {
            Blog blog = _dataRepository.Get(id);

            if (blog == null)
            {
                return NotFound("The Blog record couldn't be found.");
            }
            return Ok(blog);
        }
        // POST: api/Blog
        [HttpPost]
        public IActionResult Post([FromBody] Blog blog)
        {
            if (blog == null)
            {
                return BadRequest("Blog is null.");
            }
            _dataRepository.Add(blog);
            return CreatedAtRoute(
                  "Get",
                  new { Id = blog.BlogID },
                  blog);
        }
        // PUT: api/Blog/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] Blog blog)
        {
            if (blog == null)
            {
                return BadRequest("Blog is null.");
            }
            Blog blogToUpdate = _dataRepository.Get(id);
            if (blogToUpdate == null)
            {
                return NotFound("The Blog record couldn't be found.");
            }
            _dataRepository.Update(blogToUpdate, blog);
            return NoContent();
        }
        // DELETE: api/Employee/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Blog blog = _dataRepository.Get(id);
            if (blog == null)
            {
                return NotFound("The Blog record couldn't be found.");
            }
            _dataRepository.Delete(blog);
            return NoContent();
        }
    }
}
