using DtoLibrary;
using System;
using System.Collections.Generic;
using System.Text;

namespace StudentLibrary.Repository
{
    public interface IStudentRepository
    {
        IEnumerable<CourseSearchDTO> SearchIt(SearchDTO model);
        IEnumerable<CourseSearchDTO> Search();
        StudentDto GetStudentDetails(string id);
        bool AddReq(CourseRequestDto course);
        IEnumerable<CourseReqSDto> getAllReq(string id);
        bool UpdateReq(StatusIDDto Status);
    }
}
