using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace StudentDataLake.Common.Entity.Assessments
{
    public enum Level
    {
        ZeroLevel = 0,
    }

    public class CheckList
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public Level Level { get; set; }

        [JsonIgnore]
        public virtual List<CheckPoint> CheckPoints { get; set; }
    }
}
