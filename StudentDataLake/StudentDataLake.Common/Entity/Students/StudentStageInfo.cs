using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace StudentDataLake.Common.Entity.Students
{
    public class StudentStageInfo
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int SrudentId { get; set; }

        [JsonIgnore]
        public virtual Student Student { get; set; }

        public string GitLink { get; set; }

        public string LinkToRecord { get; set; }

        public Mark Mark { get; set; }

        public string Comment { get; set; }

        public string Recommendations { get; set; }
    }
}
