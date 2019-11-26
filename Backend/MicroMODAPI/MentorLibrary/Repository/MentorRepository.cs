using DtoLibrary;
using ModelLibrary;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace MentorLibrary.Repository
{
    public class MentorRepository : IMentorRepository
    {
        MentorContext context;
        public MentorRepository(MentorContext context)
        {
            this.context = context;
        }
        public bool AddCourse(CourseDto model)
        {
            var course = new Course
            {
                Name = model.CName,
                Duration = model.CDuration,
                Timing = model.CTiming,
                Fees = model.CFees,
                Technology = context.Technologies.Find(model.TId),
                Mentor = context.MoDUsers.Find(model.MId)
            };
            try
            {
                context.Courses.Add(course);
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


        public bool UpdateMentor(int id, MentorsDTO model)
        {
            throw new NotImplementedException();
        }

        public MCountDto CountDb()
        {
            MCountDto McountDto = new MCountDto
            {

            };

            return McountDto;
        }

        public MentorsDTO GetMentorDetails(string id)
        {
            var result = from a in context.MoDUsers
                         where a.Id == id
                         select new MentorsDTO
                         {
                             FirstName = a.FirstName,
                             LastName = a.LastName,
                             Experience = a.Experience,
                             Skill = a.Skill,
                             MId = a.Id,
                             UserName = a.UserName,
                             Status = a.IsActive
                         };

            return result.SingleOrDefault();
        }

        public IEnumerable<CourseDto> GetAllCourses(string id)
        {
            var result = from c in context.Courses
                         where c.Mentor.Id == id
                         select new CourseDto
                         {
                             CName = c.Name,
                             CDuration = c.Duration,
                             CFees = c.Fees,
                             CTiming = c.Timing,
                             TId = c.Technology.Id
                         };
            return result.ToList();
        }

        public IEnumerable<CourseReqMDto> getAllReq(string id)
        {
            var result = from c in context.TempTransactionalDBs
                         where c.Mentor.Id == id
                         select new CourseReqMDto
                         {
                             CourseId = c.Course.Id,
                             CourseName = c.Course.Name,
                             StudentName = c.Student.FirstName + " " + c.Student.LastName,
                             MentorId = c.Mentor.Id,
                             StudentId = c.Student.Id,
                             Status = c.Status,
                             ReqId = c.Id
                         };

            return result.ToList();

        }

        public bool UpdateReq(StatusIDDto model)
        {
            var id = model.id;
            var status = model.status;

            TempTransactionalDB result = context.TempTransactionalDBs.Find(id);
            if (status == "Accept")
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
            else if (status == "Reject")
            {
                var updateResult = context.TempTransactionalDBs.Find(id);
                updateResult.Status = status; //updated status to rejected in temp db.
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
            else if (status == "PaymentDone")
            {
                var updateResult = context.TempTransactionalDBs.Find(id);
                updateResult.Status = status; //updated status to rejected in temp db.
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
