using StudentDataLake.Common.Entity.Students;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace StudentDataLake.Infrastructure.Services.Students
{
    public interface IStudentService
    {
        Task<List<Student>> GetAsync();

        Task<Student> GetAsync(int id);

        Task<Student> CreateAsync(Student data);

        Task<Student> UpdateAsync(
            int id, 
            Student data);

        Task DeleteAsync(int id);
    }
}
