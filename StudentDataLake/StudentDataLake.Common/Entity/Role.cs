using System.ComponentModel.DataAnnotations;

namespace StudentDataLake.Common.Entity
{
    public class Role
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
    }
}