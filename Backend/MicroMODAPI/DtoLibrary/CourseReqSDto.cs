using System;
using System.Collections.Generic;
using System.Text;

namespace DtoLibrary
{
    public class CourseReqSDto
    {
        public string StudentId { get; set; }
        public string MentorName { get; set; }
        public string MentorId { get; set; }
        public int CourseId { get; set; }

        public string CourseName { get; set; }
        public string Status { get; set; }

        public int ReqId { get; set; }

    }
}
