using StudentDataLake.Common.Entity.Students;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace StudentDataLake.Infrastructure.Services.Students
{
    public interface IStudentService
    {
        Task<List<Student>> GetAsync();

        Task<Student> GetAsync(int id);

        Task CreateAsync(Student data);

        Task UpdateAsync(
            int id, 
            Student data);

        Task DeleteAsync(int id);
    }
}
