using System;
using System.Collections.Generic;
using System.Text;

namespace ModelLibrary
{
    public class Payment
    {
        public int Id { get; set; }
        public Course Course { get; set; }
        public UserMod Student { get; set; }

    }
}
