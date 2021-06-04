using StudentDataLake.Common.Entity.Students;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using System.Text.Json.Serialization;

namespace StudentDataLake.Common.Entity.Assessments
{
    public class CheckPoint
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int CheckListId { get; set; }

        [JsonIgnore]
        [ForeignKey("CheckListId")]
        public virtual CheckList CheckList { get; set; }

        [Required]
        public string Name { get; set; }

        [JsonIgnore]
        public virtual List<StudentCheckPoint> StudentsCheckPoints { get; set; }
    }
}
