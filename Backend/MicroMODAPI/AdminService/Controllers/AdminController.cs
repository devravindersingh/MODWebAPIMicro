using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AdminLibrary.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ModelLibrary;

namespace AdminService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        IAdminRepository repository;

        public AdminController(IAdminRepository repository)
        {
            this.repository = repository;
        }
        [Route("Technolgies")]
        // GET: api/Admin
        [HttpGet]
        public IEnumerable<Technology> GetTechnologies()
        {
            return repository.GetTechnologies();
        }

        [Route("addTech")]
        // POST: api/Admin
        [HttpPost]
        public IActionResult PostTechnology([FromBody] Technology tech)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.AddTechnology(tech);
                if (result)
                {
                    /*return CreatedAtAction("AddActor", actor.Id);*/
                    return Created("AddTechnology", tech.Id);
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }



        //PUT: api/Admin/5
        [HttpGet("toggleBlock/{id}")]
        public void BlockUnblock(string id)
        {
            repository.blockUser(id);
        }

        [Route("delTech")]
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void DeleteTechnology(int id)
        {
            repository.DeleteTech(id);
        }

        [Route("mentors")]
        //get allmentors
        [HttpGet]
        public IActionResult GetMentors()
        {
            var result = repository.GetMentors();
            if (!result.Any())
            {
                return NoContent();
            }
            return Ok(result);
        }
        //get allusers
        [Route("Users")]
        [HttpGet]
        public IActionResult GetUsers()
        {
            var result = repository.GetUsers();
            if (!result.Any())
            {
                return NoContent();
            }
            return Ok(result);
        }
        //get allstudent
        [Route("students")]
        [HttpGet]
        public IActionResult GetStudents()
        {
            var result = repository.GetStudents();
            if (!result.Any())
            {
                return NoContent();
            }
            return Ok(result);
        }

        [Route("Count")]
        [HttpGet]
        public IActionResult Count()
        {
            var result = repository.CountDb();
            return Ok(result);
        }

    }
}
