using Microsoft.AspNetCore.SignalR;
using StudentDataLake.Common.Entity.Assessments;
using System.Threading.Tasks;

namespace StudentDataLake.SignalR.Checklist
{
    public class CheckListSyncHub : Hub
    {
        private readonly static string newCheckListMessage = "NewCheckListMessage";

        public static async Task SendNewCheckListMessageAsync(
            IHubContext<CheckListSyncHub> hubContext,
            CheckList checkList)
        {
            await hubContext.Clients.All.SendAsync(
                newCheckListMessage,
                checkList);
        }
    }
}