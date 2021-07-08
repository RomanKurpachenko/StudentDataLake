using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;
using StudentDataLake.Common.Entity.Assessments;
using StudentDataLake.Infrastructure.Services.CheckLists;
using StudentDataLake.SignalR.Checklist;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace StudentDataLake.Controllers
{

	[Route("api/[controller]")]
	[ApiController]

	public class CheckListsController : ControllerBase
	{
		private readonly ILogger<CheckListsController> _logger;

		private readonly IHubContext<CheckListSyncHub> _hubContext;

		private readonly ICheckListService _checkListService;

		public CheckListsController(
			ICheckListService checkListService,
			IHubContext<CheckListSyncHub> hubContext,
			ILogger<CheckListsController> logger)
		{
			_checkListService = checkListService;
			_logger = logger;
			_hubContext = hubContext;
		}

		[HttpGet]
		//Get all

		public async Task<ActionResult<List<CheckListsController>>> GetAsync()
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
						var result = await _checkListService.CreateAsync(data);

						if (result != null) 
						{
							await CheckListSyncHub.SendNewCheckListMessageAsync(
								_hubContext,
								result);

							_logger.LogInformation("CheckList was added");
						}
					}
				}
			}
			catch (Exception ex)
			{
				_logger.LogError(
					$"[{nameof(CheckListsController)}][{nameof(CreateAsync)}]",
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
					$"[{nameof(CheckListsController)}][{nameof(UpdateAsync)}]",
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
					$"[{nameof(CheckListsController)}][{nameof(DeleteAsync)}]",
					ex);
			}
		}
	}

}