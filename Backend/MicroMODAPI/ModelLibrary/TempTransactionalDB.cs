using System;
using System.Collections.Generic;
using System.Text;

namespace ModelLibrary
{
    public class TempTransactionalDB
    {
        public int Id { get; set; }
        public UserMod Mentor { get; set; }
        public UserMod Student { get; set; }
        public Course Course { get; set; }

        public string Status { get; set; }


    }
}
