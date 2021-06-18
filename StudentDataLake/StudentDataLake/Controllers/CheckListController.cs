using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using StudentDataLake.Common.Entity.Assessments;
using StudentDataLake.Infrastructure.Services.CheckLists;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace StudentDataLake.Controllers
{

	[Route("api/[controller]")]
	[ApiController]

	public class CheckListController : ControllerBase
	{
		private readonly ICheckListService _checkListService;

		private readonly ILogger<CheckListController> _logger;

		public CheckListController(
			ICheckListService checkListService,
			ILogger<CheckListController> logger)
		{
			_checkListService = checkListService;
			_logger = logger;
		}

		[HttpGet]
		//Get all

		public async Task<ActionResult<List<CheckListController>>> GetAsync()
		{
			try
			{
				var checkLists = await _checkListService.GetAsync();

				return Ok(checkLists);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[HttpGet("{id}")]
		//Get CheckList by id

		public async Task<ActionResult<CheckList>> GetAsync(int id)
		{
			try
			{
				var checkList = await _checkListService.GetAsync(id);

				return Ok(checkList);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[HttpPost]
		//Create CheckList

		public async Task CreateAsync([FromBody] CheckList data)
		{
			try
			{
				if (data != null)
				{
					if (ModelState.IsValid)
					{
						await _checkListService.CreateAsync(data);

						_logger.LogInformation("CheckList was added");
					}
				}
			}
			catch (Exception ex)
			{
				_logger.LogError(
					$"[{nameof(CheckListController)}][{nameof(CreateAsync)}]",
					ex);
			}
		}

		public async Task UpdateAsync(int id, [FromBody] CheckList data)
		{
			try
			{
				if (data != null)
				{
					if (ModelState.IsValid)
					{
						if (id == data.Id)
						{
							await _checkListService.UpdateAsync(
								id,
								data);
						}
					}
				}
			}
			catch (Exception ex)
			{
				_logger.LogError(
					$"[{nameof(CheckListController)}][{nameof(UpdateAsync)}]",
					ex);
			}
		}

		[HttpDelete("{id}")]
		//Delete checkList

		public async Task DeleteAsync(int id)
		{
			try
			{
				await _checkListService.DeleteAsync(id);
			}
			catch (Exception ex)
			{
				_logger.LogError(
					$"[{nameof(CheckListController)}][{nameof(DeleteAsync)}]",
					ex);
			}
		}
	}

}
