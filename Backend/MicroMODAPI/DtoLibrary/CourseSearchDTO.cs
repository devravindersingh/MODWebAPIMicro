using System;
using System.Collections.Generic;
using System.Text;

namespace DtoLibrary
{
    public class CourseSearchDTO
    {
        public string CSName { get; set; }

        public int CId { get; set; }

        public string MSName { get; set; }

        public string MId { get; set; }

        public int CSDuration { get; set; }
        public string CSFees { get; set; }
        public string CSTiming { get; set; }
        public string CSTechnology { get; set; }

    }
}
