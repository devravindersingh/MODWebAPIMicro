using DtoLibrary;
using ModelLibrary;
using System;
using System.Collections.Generic;
using System.Text;

namespace AdminLibrary.Repository
{
    public interface IAdminRepository
    {
        bool AddTechnology(Technology tech);
        void blockUser(string id);
        IEnumerable<Technology> GetTechnologies();
        IEnumerable<MentorsDTO> GetMentors();
        IEnumerable<UserMod> GetUsers();
        IEnumerable<StudentDto> GetStudents();
        CountDto CountDb();
        void DeleteTech(int id);
    }
}
