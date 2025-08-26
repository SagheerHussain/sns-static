import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutPage, HomePage, ServicePage, ContactPage, PricingPage, ProjectsPage } from "./pages/page";
import "./App.css";
import ComingSoon from './components/ComingSoon';
import PreLoader from './components/PreLoader';
import { AnalyticsPage } from './admin/page/page';
import { AddService, ViewService, EditService, AddPortfolio, ViewPortfolio, EditPortfolio, AddCategory, ViewCategory, Login, Register, ProtectedRoute, ForgetPassword, ResetPassword } from './admin/components/index';
import EditCategory from './admin/components/category/EditCategory';

function App() {

  // console.log(import.meta.env.VITE_BASE_URL)

  const [loading, setLoading] = useState(true);
  const [apiLoading, setApiLoading] = useState(false); // State to track API calls

  return (
    <>
      {(loading) && <PreLoader />} {/* Show when page loads or API is loading */}

      <Routes>
        <Route path='/' element={<HomePage setLoading={setLoading} />} />
        <Route path='/about-us' element={<AboutPage setLoading={setLoading} />} />
        <Route path='/service/:category' element={<ServicePage setApiLoading={setApiLoading} apiLoading={apiLoading} />} />
        <Route path='/contact' element={<ContactPage setLoading={setLoading} />} />
        <Route path='/pricing-package/:category' element={<PricingPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='*' element={<ComingSoon />} />


        {/* Admin Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<AnalyticsPage />} />
          <Route path='/dashboard/add-service' element={<AddService />} />
          <Route path='/dashboard/view-services' element={<ViewService />} />
          <Route path='/dashboard/edit-service/:id' element={<EditService />} />
          <Route path='/dashboard/add-portfolio' element={<AddPortfolio />} />
          <Route path='/dashboard/view-portfolio' element={<ViewPortfolio />} />
          <Route path='/dashboard/edit-portfolio/:id' element={<EditPortfolio />} />
          <Route path='/dashboard/add-category' element={<AddCategory />} />
          <Route path='/dashboard/view-category' element={<ViewCategory />} />
          <Route path='/dashboard/edit-category/:id' element={<EditCategory />} />
        </Route>

        {/* Authentication */}
        <Route path='/login' element={<Login />} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/reset-password/:token' element={<ResetPassword />} />
        <Route path='/register' element={<Register />} />

      </Routes>
    </>
  );
}

export default App;