﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MvcStoreApplication.Controllers
{
    public class AdministratorController : Controller
    {
        // GET: AdministratorController
        public ActionResult Index()
        {
            return View();
        }

        // GET: AdministratorController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: AdministratorController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: AdministratorController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(HomeController.Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: AdministratorController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: AdministratorController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Details));
            }
            catch
            {
                return View();
            }
        }

        // GET: AdministratorController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: AdministratorController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(HomeController.Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
