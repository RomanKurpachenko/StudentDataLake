using System.Collections.Generic;
using System.Threading.Tasks;
using StudentDataLake.Common.Entity.Assessments;

namespace StudentDataLake.Infrastructure.Services.CheckLists
{
	public interface ICheckListService
	{
		Task<List<CheckList>> GetAsync();

		Task<CheckList> GetAsync(int id);

		Task<CheckList> CreateAsync(CheckList data);

		Task<CheckList> UpdateAsync(
			int id,
			CheckList data);

		Task DeleteAsync(int id);
	}
}