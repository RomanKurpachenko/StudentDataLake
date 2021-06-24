using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using StudentDataLake.Common.Entity.Assessments;

namespace StudentDataLake.Infrastructure.Services.CheckLists
{
	public interface ICheckListService
	{
		Task<List<CheckList>> GetAsync();

		Task<CheckList> GetAsync(int id);

		Task CreateAsync(CheckList data);

		Task UpdateAsync(
			int id,
			CheckList data);

		Task DeleteAsync(int id);
	}
}
