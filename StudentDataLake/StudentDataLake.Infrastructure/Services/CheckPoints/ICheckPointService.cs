using StudentDataLake.Common.Entity.Assessments;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentDataLake.Infrastructure.Services.CheckPoints
{
	public interface ICheckPointService
	{
		Task<List<CheckPoint>> GetAsync();

		Task<CheckPoint> GetAsync(int id);

		Task<CheckPoint> CreateAsync(CheckPoint data);

		Task<CheckPoint> UpdateAsync(
			int id,
			CheckPoint data);

		Task DeleteAsync(int id);
	}
}