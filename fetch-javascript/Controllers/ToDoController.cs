using fetch_javascript.Models;
using Microsoft.AspNetCore.Mvc;

namespace fetch_javascript.Controllers
{
    //[ApiController]
    public class ToDoController : Controller
    {

        public static List<ToDo> _toDoList = new List<ToDo>();


        [HttpGet]
        public IActionResult Index()
        {
            return View(_toDoList.ToList());
        }

        [HttpGet]
        public IActionResult GetList()
        {
            return Json(_toDoList.ToList());
        }

        [HttpPost]
        public IActionResult Add(ToDoDto toDoDto)
        {
            _toDoList.Add(new ToDo(toDoDto.Title));

            return RedirectToAction(nameof(Index));
        }

        [HttpPost]
        //[Consumes("")]
        public IActionResult AddJSON([FromBody] ToDoDto toDoDto)
        {
            var newToDo = new ToDo(toDoDto.Title);
            _toDoList.Add(newToDo);

            return Json(newToDo);
        }
    }
}
