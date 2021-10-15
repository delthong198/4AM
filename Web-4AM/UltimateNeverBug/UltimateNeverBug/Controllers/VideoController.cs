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
    public class VideoController : ControllerBase
    {
        private readonly IDataRepository<Video> _dataRepository;
        public VideoController(IDataRepository<Video> dataRepository)
        {
            _dataRepository = dataRepository;
        }
        // GET: api/Video
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Video> Videos = _dataRepository.GetAll();
            return Ok(Videos);
        }
        // GET: api/Video/5
        [HttpGet("{id}")]
        public IActionResult Get(long id)
        {
            Video Video = _dataRepository.Get(id);
            if (Video == null)
            {
                return NotFound("The Video record couldn't be found.");
            }
            return Ok(Video);
        }
        // POST: api/Video
        [HttpPost]
        public IActionResult Post([FromBody] Video Video)
        {
            if (Video == null)
            {
                return BadRequest("Video is null.");
            }
            _dataRepository.Add(Video);
            return CreatedAtRoute(
                  "Get",
                  new { Id = Video.VideoId },
                  Video);
        }
        // PUT: api/Video/5
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] Video Video)
        {
            if (Video == null)
            {
                return BadRequest("Video is null.");
            }
            Video VideoToUpdate = _dataRepository.Get(id);
            if (VideoToUpdate == null)
            {
                return NotFound("The Video record couldn't be found.");
            }
            _dataRepository.Update(VideoToUpdate, Video);
            return NoContent();
        }
        // DELETE: api/Video/5
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Video Video = _dataRepository.Get(id);
            if (Video == null)
            {
                return NotFound("The Video record couldn't be found.");
            }
            _dataRepository.Delete(Video);
            return NoContent();
        }
    }
}
