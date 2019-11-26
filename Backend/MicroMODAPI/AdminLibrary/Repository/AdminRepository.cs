using DtoLibrary;
using ModelLibrary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AdminLibrary.Repository
{
    public class AdminRepository : IAdminRepository
    {
        AdminContext context;
        public AdminRepository(AdminContext context)
        {
            this.context = context;
        }

        public bool AddTechnology(Technology tech)
        {
            try
            {
                context.Technologies.Add(tech);
                var result = context.SaveChanges();
                if (result > 0)
                {
                    return true;
                }
                return false;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void blockUser(string id)
        {
            var user = context.MoDUsers.SingleOrDefault(u => u.Id == id);
            user.IsActive = !user.IsActive;
            context.SaveChanges();
        }

        public IEnumerable<MentorsDTO> GetMentors()
        {
            string role = "2";
            var result = from c in context.MoDUsers
                         join r in context.UserRoles on c.Id equals r.UserId
                         where r.RoleId == role
                         select new MentorsDTO
                         {
                             FirstName = c.FirstName,
                             LastName = c.LastName,
                             Experience = c.Experience,
                             Skill = c.Skill,
                             UserName = c.UserName,
                             MId = c.Id,
                             Status = c.IsActive

                         };
            return result;
        }

        public IEnumerable<StudentDto> GetStudents()
        {
            string role = "3";
            var result = from c in context.MoDUsers
                         join r in context.UserRoles on c.Id equals r.UserId
                         where r.RoleId == role
                         select new StudentDto
                         {
                             FirstName = c.FirstName,
                             LastName = c.LastName,
                             PhoneNumber = c.PhoneNumber,
                             SId = c.Id,
                             Status = c.IsActive
                         };
            return result;

        }

        public IEnumerable<Technology> GetTechnologies()
        {
            return context.Technologies.ToList();
        }

        public IEnumerable<UserMod> GetUsers()
        {
            var result = from c in context.UserRoles
                         where c.RoleId == "1"
                         select c.UserId;
            var result2 = from c in context.MoDUsers
                          where c.Id != result.ToString()
                          select c;
            return result2;



        }

        public CountDto CountDb()
        {

            var studentC = from c in context.UserRoles
                           where c.RoleId == "3"
                           select c;

            var mentorC = from c in context.UserRoles
                          where c.RoleId == "2"
                          select c;

            CountDto countDto = new CountDto
            {
                Users = context.MoDUsers.Count() - 1,
                Courses = context.Courses.Count(),
                Students = studentC.Count(),
                Mentors = mentorC.Count(),
                Technologies = context.Technologies.Count()

            };

            return countDto;

        }

        public void DeleteTech(int id)
        {
            var result = context.Technologies.Find(id);
            context.Technologies.Remove(result);
            context.SaveChanges();
        }
    }

}
