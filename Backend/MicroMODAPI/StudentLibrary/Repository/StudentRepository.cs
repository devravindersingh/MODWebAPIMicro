using DtoLibrary;
using ModelLibrary;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace StudentLibrary.Repository
{
    public class StudentRepository : IStudentRepository
    {
        StudentContext context;
        public StudentRepository(StudentContext context)
        {
            this.context = context;
        }

        public bool AddReq(CourseRequestDto course)
        {
            var reqCourse = new TempTransactionalDB
            {
                Course = context.Courses.Find(course.CourseId),
                Mentor = context.MoDUsers.Find(course.MentorId),
                Student = context.MoDUsers.Find(course.StudentId),
                Status = course.Status
            };

            try
            {
                context.TempTransactionalDBs.Add(reqCourse);
                var result = context.SaveChanges();
                if (result > 0)
                {
                    return true;
                }
                return false;
            }
            catch
            {
                throw;

            }
        }

        public IEnumerable<CourseReqSDto> getAllReq(string id)
        {
            var result = from c in context.TempTransactionalDBs
                         where c.Student.Id == id
                         select new CourseReqSDto
                         {
                             CourseId = c.Course.Id,
                             CourseName = c.Course.Name,
                             MentorName = c.Mentor.FirstName + " " + c.Mentor.LastName,
                             MentorId = c.Mentor.Id,
                             StudentId = c.Student.Id,
                             Status = c.Status,
                             ReqId = c.Id
                         };

            return result.ToList();
        }

        public StudentDto GetStudentDetails(string id)
        {
            var result = from a in context.MoDUsers
                         where a.Id == id
                         select new StudentDto
                         {
                             FirstName = a.FirstName,
                             LastName = a.LastName,
                             PhoneNumber = a.PhoneNumber,
                             SId = a.Id,
                             Status = a.IsActive
                         };

            return result.SingleOrDefault();

        }

        public IEnumerable<CourseSearchDTO> Search()
        {
            var result = from c in context.Courses
                         select new CourseSearchDTO
                         {
                             CSDuration = c.Duration,
                             CId = c.Id,
                             MId = c.Mentor.Id,
                             CSFees = c.Fees,
                             CSName = c.Name,
                             CSTiming = c.Timing,
                             MSName = c.Mentor.FirstName + " " + c.Mentor.LastName,
                             CSTechnology = c.Technology.Name,

                         };

            return result;

        }

        public IEnumerable<CourseSearchDTO> SearchIt(SearchDTO model)
        {
            var result = from c in context.Courses
                         where c.Duration <= model.CDuration && c.Technology.Id == model.CTechnology
                         select new CourseSearchDTO
                         {
                             CSDuration = c.Duration,
                             CId = c.Id,
                             MId = c.Mentor.Id,
                             CSFees = c.Fees,
                             CSName = c.Name,
                             CSTiming = c.Timing,
                             MSName = c.Mentor.FirstName + " " + c.Mentor.LastName,
                             CSTechnology = c.Technology.Name,

                         };

            return result;
        }

        public bool UpdateReq(StatusIDDto model)
        {
            var id = model.id;
            var status = model.status;

            TempTransactionalDB result = context.TempTransactionalDBs.Find(id);
            if (status == "Payment Done")
            {
                var updateResult = context.TempTransactionalDBs.Find(id);
                updateResult.Status = status;

                try
                {
                    var result2 = context.SaveChanges();
                    if (result2 > 0)
                    {
                        return true;
                    }
                    return false;
                }
                catch
                {
                    throw;

                }
            }

            return false;
        }
    }
}

