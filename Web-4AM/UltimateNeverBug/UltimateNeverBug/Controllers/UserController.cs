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
    public class UserController : ControllerBase
    {
        private readonly IDataRepository<User> _dataRepository;
        public UserController(IDataRepository<User> dataRepository)
        {
            _dataRepository = dataRepository;
        }
        // GET: api/User
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<User> Users = _dataRepository.GetAll();
            return Ok(Users);
        }
        // GET: api/User/5
        [HttpGet("{id}",Name = "Get")]
        public IActionResult Get(long id)
        {
            User User = _dataRepository.Get(id);
            if (User == null)
            {
                return NotFound("The User record couldn't be found.");
            }
            return Ok(User);
        }
        // POST: api/User
        [HttpPost]
        public IActionResult Post([FromBody] User User)
        {
            if (User == null)
            {
                return BadRequest("User is null.");
            }
            _dataRepository.Add(User);
            return CreatedAtRoute(
                  "Get",
                  new { Id = User.UserId },
                  User);
        }
        // PUT: api/User/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] User User)
        {
            if (User == null)
            {
                return BadRequest("User is null.");
            }
            User UserToUpdate = _dataRepository.Get(id);
            if (UserToUpdate == null)
            {
                return NotFound("The User record couldn't be found.");
            }
            _dataRepository.Update(UserToUpdate, User);
            return NoContent();
        }
        // DELETE: api/User/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            User User = _dataRepository.Get(id);
            if (User == null)
            {
                return NotFound("The User record couldn't be found.");
            }
            _dataRepository.Delete(User);
            return NoContent();
        }
    }
}

