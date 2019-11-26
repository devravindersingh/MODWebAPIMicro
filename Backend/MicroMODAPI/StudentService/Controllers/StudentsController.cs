using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DtoLibrary;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StudentLibrary.Repository;

namespace StudentService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        IStudentRepository repository;

        public StudentsController(IStudentRepository repository)
        {
            this.repository = repository;
        }
        // GET: api/Student
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Student/5
        [HttpGet("{id}")]
        public IActionResult GetStudent(string id)
        {
            var result = repository.GetStudentDetails(id);
            return Ok(result);
        }

        // POST: api/Student
        /*[HttpPost]
        public void Post([FromBody] )
        {
        }*/

        // PUT: api/Student/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        [Route("SearchWP")]
        // searchtry
        [HttpPost]
        public IActionResult SearchWP([FromBody] SearchDTO model)
        {
            var result = repository.SearchIt(model);
            if (!result.Any())
            {
                return NoContent();
            }
            return Ok(result);
        }

        [Route("Search")]
        [HttpGet]
        public IActionResult Search()
        {
            var result = repository.Search();
            if (!result.Any())
            {
                return NoContent();
            }
            return Ok(result);

        }

        [Route("PostRequest")]
        // searchtry
        [HttpPost]
        public async Task<IActionResult> PostReq([FromBody] CourseRequestDto course)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.AddReq(course);
                if (result)
                {
                    return Ok("ReqDone");
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }

        [Route("PutRequest")]
        // searchtry
        [HttpPut]
        public async Task<IActionResult> PutReq([FromBody] StatusIDDto status)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.UpdateReq(status);
                if (result)
                {
                    return Ok("ReqDone");
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }



        [HttpGet("request/{id}")]
        public IActionResult GetAllReq(string id)
        {
            var result = repository.getAllReq(id);
            return Ok(result);
        }


    }
}
