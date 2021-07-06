using Microsoft.EntityFrameworkCore;
using StudentDataLake.Common.Entity.Assessments;
using StudentDataLake.Infrastructure.Databases;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentDataLake.Infrastructure.Services.CheckLists
{
	public class CheckListService : ICheckListService
	{
		private readonly StudentDataLakeContext _db;

		public CheckListService(StudentDataLakeContext studentDataLakeContext)
		{
			_db = studentDataLakeContext;
		}

		public async Task<CheckList> CreateAsync(CheckList data)
		{
			if (data.Id <= 0)
			{
				if (!(await _db.CheckLists.AnyAsync(checkList => checkList.Id.Equals(data.Id))))
				{
					_db.CheckLists.Add(data);

					await _db.SaveChangesAsync();

					return data;
				}
			}

			return data;
		}

		public async Task DeleteAsync(int id)
		{
			var checkList = await _db.CheckLists.FindAsync(id);

			if (checkList != null)
			{
				_db.CheckLists.Remove(checkList);

				await _db.SaveChangesAsync();
			}
		}

		public async Task<List<CheckList>> GetAsync()
		{
			var checkList = await _db.CheckLists.ToListAsync();

			return checkList;
		}

		public async Task<CheckList> GetAsync(int id)
		{
			var checkList = await _db.CheckLists.FindAsync(id);

			return checkList;
		}

		public async Task<CheckList> UpdateAsync(
			int id,
			CheckList data)
		{
			if (id == data.Id)
			{
				var checkList = await _db.CheckLists.FindAsync(id);

				if (checkList != null)
				{
					checkList.Name = data.Name;

					_db.Update(checkList);

					await _db.SaveChangesAsync();

					return checkList;
				}
			}

			return null;
		}
	}
}