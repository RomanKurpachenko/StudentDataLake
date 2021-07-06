using Microsoft.EntityFrameworkCore;
using StudentDataLake.Common.Entity.Assessments;
using StudentDataLake.Infrastructure.Databases;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentDataLake.Infrastructure.Services.CheckPoints
{
	public class CheckPointService : ICheckPointService
	{
		private readonly StudentDataLakeContext _db;

		public CheckPointService(StudentDataLakeContext studentDataLakeContext)
		{
			_db = studentDataLakeContext;
		}

		public async Task CreateAsync(CheckPoint data)
		{
			if(data.Id <= 0)
			{
				if(!(await _db.CheckPoints.AnyAsync(checkPoint =>  checkPoint.Id.Equals(data.Id))))
				{
					_db.CheckPoints.Add(data);

					await _db.SaveChangesAsync();
				}
			}
		}

		public async Task DeleteAsync(int id)
		{
			var checkPoint = await _db.CheckPoints.FindAsync(id);

			if(checkPoint != null)
			{
				_db.CheckPoints.Remove(checkPoint);

				await _db.SaveChangesAsync();
			}
		}

		public async Task<List<CheckPoint>> GetAsync()
		{
			var checkPoint = await _db.CheckPoints.ToListAsync();

			return checkPoint;
		}

		public async Task<CheckPoint> GetAsync(int id)
		{
			var checkPoint = await _db.CheckPoints.FindAsync(id);

			return checkPoint;
		}

		public async Task UpdateAsync(
			int id,
			CheckPoint data)
		{
			if(id == data.Id)
			{
				var checkPoint = await _db.CheckPoints.FindAsync(id);

				if(checkPoint != null)
				{
					checkPoint = data;

					_db.CheckPoints.Update(checkPoint);

					await _db.SaveChangesAsync();
				}
			}
		}
	}
}
