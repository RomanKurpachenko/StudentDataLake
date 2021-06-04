using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace StudentDataLake.Common.Entity.Students
{
    public enum Mark
    {
        Bad = 0,
        NotGood = 1,
        Fine = 2,
        Good = 3,
        Excellent = 4
    }

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
    }
}
