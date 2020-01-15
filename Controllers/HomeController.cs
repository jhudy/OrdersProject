using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OrdersProject.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        public ActionResult Categories()
        {
            ViewBag.Title = "Categories Page";

            return View();
        }

        public ActionResult Products()
        {
            ViewBag.Title = "Products Page";

            return View();
        }

    }
}
