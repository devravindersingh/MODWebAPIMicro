using System;
using System.Collections.Generic;
using System.Text;

namespace ModelLibrary
{
    public class Course
    {
        public string Name { get; set; }

        public int Id { get; set; }
        public int Duration { get; set; }
        public string Fees { get; set; }
        public string Timing { get; set; }

        public Technology Technology { get; set; }

        public UserMod Mentor { get; set; }

    }
}
