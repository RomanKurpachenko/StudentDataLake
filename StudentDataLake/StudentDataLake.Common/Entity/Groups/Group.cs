using System;
using System.ComponentModel.DataAnnotations;

namespace StudentDataLake.Common.Entity.Groups
{
    public class Group
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public DateTime StartDate { get; set; }

        [Required]
        public DateTime EndDate { get; set; }
    }
}
