using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace StudentDataLake.Common.Entity.Students
{
    public class Student
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string FirstNativeName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string LastNativeName { get; set; }

        [JsonIgnore]
        public List<StudentStageInfo> Stages { get; set; }

        [JsonIgnore]
        public List<StudentCheckPoint> CheckPoints { get; set; }

        public virtual List<StudentGroup> Groups { get; set; }
    }
}
