using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DtoLibrary;
using MentorLibrary.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MentorService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MentorsController : ControllerBase
    {
        IMentorRepository repository;

        public MentorsController(IMentorRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet("{id}")]
        public IActionResult GetMentor(string id)
        {
            var result = repository.GetMentorDetails(id);
            return Ok(result);
        }

        // POST: api/Mentors
        [HttpPost]
        public async Task<IActionResult> PostCourse([FromBody] CourseDto course)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.AddCourse(course);
                if (result)
                {
                    return Ok("AddCourse");
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }

        //update mentor
        // PUT: api/Mentors/5
        [HttpPut("{id}")]
        public IActionResult PutMentor(int id, [FromBody] MentorsDTO model)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.UpdateMentor(id, model);
                if (result)
                {
                    return Ok();
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }




        [Route("Count")]
        [HttpGet]
        public IActionResult Count()
        {
            var result = repository.CountDb();
            return Ok(result);
        }

        [HttpGet("myCourses/{id}")]
        public IActionResult GetAllCourses(string id)
        {
            var result = repository.GetAllCourses(id);
            return Ok(result);
        }

        [HttpGet("request/{id}")]
        public IActionResult GetAllReq(string id)
        {
            var result = repository.getAllReq(id);
            return Ok(result);
        }

        [HttpGet("count/{id}")]
        public IActionResult GetCountReq(string id)
        {
            var result = repository.getAllReq(id).Count();
            return Ok(result);

        }

        [HttpPut("requestUp/")]
        public IActionResult RequestUp([FromBody] StatusIDDto model)
        {
            var result = repository.UpdateReq(model);
            return Ok(result);

        }




    }
}
