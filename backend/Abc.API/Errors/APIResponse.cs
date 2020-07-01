using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Abc.API.Errors
{
    public class APIResponse
    {
        public APIResponse(int statusCode, string message = null)
        {
            StatusCode = statusCode;
            Message = message ?? GetDefaultMessage(statusCode);
        }
        public APIResponse(int statusCode, Dictionary<string,string> errors)
        {
            StatusCode = statusCode;
            Errors = errors;
        }
      
        public int StatusCode { get; set; }
        public string Message { get; set; }
        public Dictionary<string,string> Errors { get; set; }
        private string GetDefaultMessage(int statusCode)
        {
            return statusCode switch
            {
                400 => "Bad Request",
                401 => "Unauthorized",
                404 => "Not Found",
                500 => "Internal Server Error",
                _ => null
            };
        }
    }
}
