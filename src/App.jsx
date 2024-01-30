import React, { useEffect, useState } from "react";
import { GetBookData } from "./service/book.service";
import useFetch from "./hook/useFetch";
import { GetAuthorData } from "./service/author.sevice";
import { Routes, Route } from "react-router-dom";
import { AdminPage, BlogPage, DashboardPage, DetailbookPage, HomePage, InventoryPage, UserPage } from "./page"
import { NavComponents } from "./components";
import Notfound from "../not-found";

const App = () => {
  const { loading, error, data } = useFetch(GetAuthorData, "author");
  console.log(data);
  return (
    <div className="main">
      <NavComponents  />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailbookPage />} />
        <Route path="/dashboard" element={<DashboardPage />} >
          <Route index element={<InventoryPage />} /> 
          <Route  path="user" element={<UserPage />} />  
          <Route  path="blog" element={<BlogPage />} />           
        </Route>  
        <Route path="admin" element={<AdminPage />} />     
        <Route path="*" element={<Notfound />} />

      </Routes>

    </div>
  );
};

export default App;

//custom hook
//build in hook => usestate,useEffect,usecontext,usereducer,uselayouteffect,useid,usetransition...
//library provite hook =>useParams, useNavigate, useLocation,usesearchparam
