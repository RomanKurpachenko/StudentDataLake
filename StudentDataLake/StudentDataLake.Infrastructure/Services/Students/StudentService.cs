using Microsoft.EntityFrameworkCore;
using StudentDataLake.Common.Entity.Students;
using StudentDataLake.Infrastructure.Databases;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace StudentDataLake.Infrastructure.Services.Students
{
    public class StudentService : IStudentService
    {
        private readonly StudentDataLakeContext _db;

        public StudentService(StudentDataLakeContext studentDataLakeContext)
        {
            _db = studentDataLakeContext;
        }

        public async Task CreateAsync(Student data)
        {
            if(data.Id <= 0)
            {
                if (!(await _db.Students.AnyAsync(student => student.Email.Equals(data.Email))))
                {
                    _db.Students.Add(data);

                    await _db.SaveChangesAsync();
                }
            }
        }

        public async Task DeleteAsync(int id)
        {
            var student = await _db.Students.FindAsync(id);

            if(student != null)
            {
                _db.Students.Remove(student);

                await _db.SaveChangesAsync();
            }
        }

        public async Task<List<Student>> GetAsync()
        {
            var students = await _db.Students.ToListAsync();

            return students;
        }

        public async Task<Student> GetAsync(int id)
        {
            var student = await _db.Students.FindAsync(id);

            return student;
        }

        public async Task UpdateAsync(
            int id, 
            Student data)
        {
            if (id == data.Id)
            {
                var student = await _db.Students.FindAsync(id);

                if (student != null)
                {
                    student.Email = data.Email;

                    student.FirstName = data.FirstName;

                    student.FirstNativeName = data.FirstNativeName;

                    student.LastName = data.LastName;

                    student.LastNativeName = student.LastNativeName;

                    _db.Update(student);

                    await _db.SaveChangesAsync();
                }
            }
        }
    }
}
