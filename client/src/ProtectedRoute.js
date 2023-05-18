import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const isAuthed = useSelector((store) => store.ReduxSlice.data.isAuthed);

  if (!isAuthed) {
    return <Navigate to={'/landingpage'} />;
  }
  return <Outlet />;
}
