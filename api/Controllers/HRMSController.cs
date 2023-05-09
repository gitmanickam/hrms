
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using System.Runtime.Serialization;

namespace HRMSAPI.Controllers
{
    [EnableCors("corsapp")]
    public class HRMSController
    {
        [HttpGet]
        public UserDTO get()
        {
            UserDTO user = new UserDTO()
            {
                UserName = "Demo",
                Password = "Hello"
            };
            return user;
        }
    }

    public class UserDTO
    {
        [DataMember]
        public string UserName { get; set; }
        [DataMember]
        public string Password { get; set; }
    }

}