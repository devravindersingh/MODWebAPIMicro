using System;
using System.Collections.Generic;
using System.Text;

namespace DtoLibrary
{
    public class CourseRequestDto
    {
        public string StudentId { get; set; }
        public string MentorId { get; set; }
        public int CourseId { get; set; }
        public string Status { get; set; }

    }
}
