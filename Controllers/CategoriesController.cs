using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using System.Web.UI.WebControls;
using OrdersProject.Models;

namespace OrdersProject.Controllers
{
    //[EnableCors(origins: "http://localhost:33991", headers: "*", methods: "*")]
    public class CategoriesController : ApiController
    {
        private OrdersEntities db = new OrdersEntities();

        //[Authorize]
        // GET: api/Categories
        public IQueryable<Category> GetCategories()
        {
            return db.Categories;
        }


        //[Authorize]
        // GET: api/Categories/5
        [System.Web.Http.HttpGet]
        [ResponseType(typeof(Category))]
        public IHttpActionResult GetCategory(int id)
        {
            Category category = db.Categories.Find(id);
            if (category == null)
            {
                return NotFound();
            }

            return Ok(category);
        }

        // PUT: api/Categories/5
        [System.Web.Http.HttpPut]
        //[Route("customers/{customerId}/orders")]
        //[ResponseType(typeof(void))]
        public IHttpActionResult PutCategory(int id,Category category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != category.Id)
            {
                return BadRequest();
            }

            db.Entry(category).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }



        // POST: api/Categories
        [System.Web.Http.HttpPost]
        //[Route("customers/{customerId}/orders")]
        [ResponseType(typeof(Category))]
        public IHttpActionResult PostCategory(Category category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Categories.Add(category);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = category.Id }, category);
        }

        // DELETE: api/Categories/5
        [ResponseType(typeof(Category))]
        public IHttpActionResult DeleteCategory(int id)
        {

            Category category = db.Categories.Find(id);
            if (category == null)
            {
                return NotFound();
            }
            try
            {
                db.Categories.Remove(category);
                db.SaveChanges();
            }
            catch (Exception ex)
            {

                return Conflict();
            }
          

            return Ok(category);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CategoryExists(int id)
        {
            return db.Categories.Count(e => e.Id == id) > 0;
        }
    }
}