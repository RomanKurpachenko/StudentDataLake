using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace StudentDataLake.Common.Entity
{
    public class UserRole
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string PmcId { get; set; }

        [ForeignKey("PmcId")]
        public virtual User User { get; set; }

        [Required]
        public int RoleId { get; set; }

        [ForeignKey("RoleId")]
        public virtual Role Role { get; set; }
    }
}
