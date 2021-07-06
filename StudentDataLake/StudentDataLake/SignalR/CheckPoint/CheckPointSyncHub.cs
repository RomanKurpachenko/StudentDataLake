using Microsoft.AspNetCore.SignalR;
using StudentDataLake.Common.Entity.Assessments;
using System.Threading.Tasks;

namespace StudentDataLake.SignalR.CheckPoints
{
    public class CheckPointSyncHub : Hub
    {
        private readonly static string newCheckPointMessage = "NewCheckPointMessage";

        public static async Task SendNewCheckPointMessageAsync(
            IHubContext<CheckPointSyncHub> hubContext,
            CheckPoint checkPoint)
        {
            await hubContext.Clients.All.SendAsync(
                newCheckPointMessage,
                checkPoint);
        }


    }
}