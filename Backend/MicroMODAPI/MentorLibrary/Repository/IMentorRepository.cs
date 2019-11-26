using DtoLibrary;
using System;
using System.Collections.Generic;
using System.Text;

namespace MentorLibrary.Repository
{
    public interface IMentorRepository
    {
        bool AddCourse(CourseDto course);
        bool UpdateMentor(int id, MentorsDTO model);
        MCountDto CountDb();
        MentorsDTO GetMentorDetails(string id);
        IEnumerable<CourseDto> GetAllCourses(string id);
        IEnumerable<CourseReqMDto> getAllReq(string id);
        bool UpdateReq(StatusIDDto model);
    }
}
