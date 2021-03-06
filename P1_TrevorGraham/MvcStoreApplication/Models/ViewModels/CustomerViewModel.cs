﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.ViewModels
{
    public class CustomerViewModel
    {
        [Required]
        [StringLength(20, MinimumLength = 5, ErrorMessage = "The username must be between 5 and 20 characters.")]
        [RegularExpression(@"^[a-zA-Z0-9]+$", ErrorMessage = "Use letters and numbers only please")]
        [Display(Name = "Username")]
        public string Username { get; set; }

        [Required]
        [StringLength(40, MinimumLength = 5, ErrorMessage = "The password must be between 5 and 40 characters.")]
        [RegularExpression(@"^[a-zA-Z0-9]+$", ErrorMessage = "Use letters and numbers only please")]
        [Display(Name = "Password")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        [StringLength(20, MinimumLength = 1, ErrorMessage = "The name must be between 1 and 20 characters.")]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Use letters only please")]
        [Display(Name = "First Name")]
        public string Fname { get; set; }

        [Required]
        [StringLength(20, MinimumLength = 1, ErrorMessage = "The name must be between 1 and 20 characters.")]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Use letters only please")]
        [Display(Name = "Last Name")]
        public string LName { get; set; }

        [Display(Name = "Default Store")]
        public string DefaultStoreName { get; set; }
        [Display(Name = "Default Store ID")]
        public Guid DefaultLocationId { get; set; }

        //[Key]
        [Display(Name = "ID")]
        public Guid UserId { get; set; }
    }
}
