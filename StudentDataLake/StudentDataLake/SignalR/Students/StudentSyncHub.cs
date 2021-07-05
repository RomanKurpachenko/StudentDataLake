using Microsoft.AspNetCore.SignalR;
using StudentDataLake.Common.Entity.Students;
using System.Threading.Tasks;

namespace StudentDataLake.SignalR.Students
{
    public class StudentSyncHub : Hub
    {
        private readonly static string newStudentMessage = "NewStudentMessage";

        public static async Task SendNewStudentMessageAsync(
            IHubContext<StudentSyncHub> hubContext,
            Student student)
        {
            await hubContext.Clients.All.SendAsync(
                newStudentMessage,
                student);
        }
    }
}
