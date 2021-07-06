using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using StudentDataLake.Common.Entity.Assessments;
using StudentDataLake.Infrastructure.Services.CheckPoints;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentDataLake.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class CheckPointController : ControllerBase
	{
		private readonly ICheckPointService _checkPointService;

		private readonly ILogger<CheckPointController> _logger;

		public CheckPointController(
			ICheckPointService checkPointService,
			ILogger<CheckPointController> logger)
		{
			_checkPointService = checkPointService;
			_logger = logger;
		}

		[HttpGet("{id}")]
		//Get all

		public async Task<ActionResult<List<CheckPointController>>> GetAsync(int checkListId)
		{
			try
			{
				var checkPoints = await _checkPointService.GetAsync();

				return Ok(checkPoints);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[HttpPost]
		//Create CheckPoint

		public async Task CreateAsync([FromBody] CheckPoint data)
		{
			try
			{
				if (data != null)
				{
					if (ModelState.IsValid)
					{
						await _checkPointService.CreateAsync(data);

						_logger.LogInformation("CheckPoint was added");
					}
				}
			}
			catch (Exception ex)
			{
				_logger.LogError(
					$"[{nameof(CheckPointController)}][{nameof(CreateAsync)}]",
					ex);
			}
		}

		public async Task UpdateAsync(int id, [FromBody] CheckPoint data)
		{
			try
			{
				if (data != null)
				{
					if (ModelState.IsValid)
					{
						if (id == data.Id)
						{
							await _checkPointService.UpdateAsync(
								id,
								data);
						}
					}
				}
			}
			catch (Exception ex)
			{
				_logger.LogError(
					$"[{nameof(CheckPointController)}][{nameof(UpdateAsync)}]",
					ex);
			}
		}

		[HttpDelete("{id}")]
		//Delete checkPoint

		public async Task DeleteAsync(int id)
		{
			try
			{
				await _checkPointService.DeleteAsync(id);
			}
			catch (Exception ex)
			{
				_logger.LogError(
					$"[{nameof(CheckPointController)}][{nameof(DeleteAsync)}]",
					ex);
			}
		}

	}
}