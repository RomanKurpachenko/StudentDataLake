using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using StudentDataLake.Common.Entity.Students;
using StudentDataLake.Infrastructure.Services.Students;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace StudentDataLake.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudentService _studentService;

        private readonly ILogger<StudentController> _logger;

        public StudentController(
            IStudentService studentService,
            ILogger<StudentController> logger)
        {
            _studentService = studentService;
            _logger = logger;
        }

        [HttpGet]
        //Get all
        public async Task<ActionResult<List<Student>>> GetAsync()
        {
            try
            {
                var students = await _studentService.GetAsync();

                return Ok(students);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        //Get student by id
        public async Task<ActionResult<Student>> GetAsync(int id)
        {
            try
            {
                var student = await _studentService.GetAsync(id);

                return Ok(student);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        //Create student
        public async Task CreateAsync([FromBody] Student data)
        {
            try
            {
                if(data != null)
                {
                    if (ModelState.IsValid)
                    {
                        await _studentService.CreateAsync(data);

                        _logger.LogInformation("Student was added");
                    }
                }
            }
            catch(Exception ex)
            {
                _logger.LogError(
                    $"[{nameof(StudentController)}][{nameof(CreateAsync)}]",
                    ex);
            }
        }

        [HttpPut("{id}")]
        //Edit student
        public async Task UpdateAsync(int id, [FromBody] Student data)
        {
            try
            {
                if (data != null)
                {
                    if (ModelState.IsValid)
                    {
                        if(id == data.Id)
                        {
                            await _studentService.UpdateAsync(
                                id,
                                data);
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(
                    $"[{nameof(StudentController)}][{nameof(UpdateAsync)}]",
                    ex);
            }
        }

        [HttpDelete("{id}")]
        //Delete student
        public async Task DeleteAsync(int id)
        {
            try
            {
                await _studentService.DeleteAsync(id);
            }
            catch(Exception ex)
            {
                _logger.LogError(
                    $"[{nameof(StudentController)}][{nameof(DeleteAsync)}]",
                    ex);
            }
        }
    }
}
