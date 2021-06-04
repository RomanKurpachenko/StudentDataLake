using StudentDataLake.Common.Entity.Assessments;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace StudentDataLake.Common.Entity.Students
{
    public class StudentCheckPoint
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int CheckPointId { get; set; }

        [JsonIgnore]
        [ForeignKey("CheckPointId")]
        public virtual CheckPoint CheckPoint { get; set; }

        [Required]
        public int StudentId { get; set; }

        [ForeignKey("StudentId")]
        [JsonIgnore]
        public virtual Student Student { get; set; }

        [Required]
        public DateTime LastChanges { get; set; }

        [Required]
        public bool Checked { get; set; }

        public Mark Mark { get; set; }

        public string Comment { get; set; }

        public string Recommendations { get; set; }
    }
}
