using System;
using System.Collections.Generic;
using System.Text;

namespace DtoLibrary
{
    public class CourseDto
    {
        public string CName { get; set; }
        public int CDuration { get; set; }
        public string CFees { get; set; }
        public string CTiming { get; set; }
        public int TId { get; set; }

        public string MId { get; set; }
    }
}
